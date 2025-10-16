import { Request, Response } from 'express';
import Account, { IAccount } from '../models/Account';
import Activity from '../models/Activity';

export const getAllAccounts = async (req: Request, res: Response) => {
  try {
    const { page = 1, limit = 10, status, search } = req.query;
    
    const query: any = {};
    
    if (status && status !== 'all') {
      query.status = status;
    }
    
    if (search) {
      query.$or = [
        { accountName: { $regex: search, $options: 'i' } },
        { accountId: { $regex: search, $options: 'i' } }
      ];
    }
    
    const accounts = await Account.find(query)
      .sort({ createdAt: -1 })
      .limit(Number(limit) * 1)
      .skip((Number(page) - 1) * Number(limit));
    
    const total = await Account.countDocuments(query);
    
    res.json({
      success: true,
      data: {
        accounts,
        pagination: {
          current: Number(page),
          pages: Math.ceil(total / Number(limit)),
          total
        }
      }
    });
  } catch (error) {
    console.error('Error fetching accounts:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export const getAccountById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    const account = await Account.findOne({ accountId: id });
    
    if (!account) {
      return res.status(404).json({ success: false, message: 'Account not found' });
    }
    
    res.json({ success: true, data: account });
  } catch (error) {
    console.error('Error fetching account:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export const createAccount = async (req: Request, res: Response) => {
  try {
    const { accountId, accountName, status = 'active', balance = 0 } = req.body;
    
    // Check if account already exists
    const existingAccount = await Account.findOne({ accountId });
    if (existingAccount) {
      return res.status(400).json({ success: false, message: 'Account already exists' });
    }
    
    const account = new Account({
      accountId,
      accountName,
      status,
      balance
    });
    
    await account.save();
    
    // Log activity
    await Activity.create({
      type: 'bind',
      title: 'Account Created',
      description: `New account ${accountName} created`,
      accountId,
      amount: 'N/A'
    });
    
    res.status(201).json({ success: true, data: account });
  } catch (error) {
    console.error('Error creating account:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export const updateAccount = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { accountName, status, balance } = req.body;
    
    const account = await Account.findOne({ accountId: id });
    
    if (!account) {
      return res.status(404).json({ success: false, message: 'Account not found' });
    }
    
    const oldBalance = account.balance;
    
    // Update account
    if (accountName) account.accountName = accountName;
    if (status) account.status = status;
    if (balance !== undefined) account.balance = balance;
    
    await account.save();
    
    // Log activity if balance changed
    if (balance !== undefined && balance !== oldBalance) {
      const difference = balance - oldBalance;
      const activityType = difference > 0 ? 'top-up' : 'deduct';
      const amount = difference > 0 ? `+$${difference.toFixed(2)}` : `-$${Math.abs(difference).toFixed(2)}`;
      
      await Activity.create({
        type: activityType,
        title: `Account ${activityType === 'top-up' ? 'Top-up' : 'Deduction'}`,
        description: `Balance ${activityType === 'top-up' ? 'increased' : 'decreased'} by $${Math.abs(difference).toFixed(2)}`,
        accountId: id,
        amount
      });
    }
    
    res.json({ success: true, data: account });
  } catch (error) {
    console.error('Error updating account:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export const deleteAccount = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    const account = await Account.findOneAndDelete({ accountId: id });
    
    if (!account) {
      return res.status(404).json({ success: false, message: 'Account not found' });
    }
    
    // Log activity
    await Activity.create({
      type: 'reset',
      title: 'Account Deleted',
      description: `Account ${account.accountName} was deleted`,
      accountId: id,
      amount: 'N/A'
    });
    
    res.json({ success: true, message: 'Account deleted successfully' });
  } catch (error) {
    console.error('Error deleting account:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export const topUpAccount = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { amount } = req.body;
    
    if (!amount || amount <= 0) {
      return res.status(400).json({ success: false, message: 'Invalid amount' });
    }
    
    const account = await Account.findOne({ accountId: id });
    
    if (!account) {
      return res.status(404).json({ success: false, message: 'Account not found' });
    }
    
    account.balance += amount;
    await account.save();
    
    // Log activity
    await Activity.create({
      type: 'top-up',
      title: 'Account Top-up',
      description: `Top-up request processed successfully`,
      accountId: id,
      amount: `+$${amount.toFixed(2)}`
    });
    
    res.json({ success: true, data: account });
  } catch (error) {
    console.error('Error topping up account:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export const deductAccount = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { amount } = req.body;
    
    if (!amount || amount <= 0) {
      return res.status(400).json({ success: false, message: 'Invalid amount' });
    }
    
    const account = await Account.findOne({ accountId: id });
    
    if (!account) {
      return res.status(404).json({ success: false, message: 'Account not found' });
    }
    
    if (account.balance < amount) {
      return res.status(400).json({ success: false, message: 'Insufficient balance' });
    }
    
    account.balance -= amount;
    await account.save();
    
    // Log activity
    await Activity.create({
      type: 'deduct',
      title: 'Account Deduction',
      description: `Deduction request processed`,
      accountId: id,
      amount: `-$${amount.toFixed(2)}`
    });
    
    res.json({ success: true, data: account });
  } catch (error) {
    console.error('Error deducting from account:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
