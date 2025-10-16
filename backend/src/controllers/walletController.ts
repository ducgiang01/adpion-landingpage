import { Request, Response } from 'express';
import Wallet from '../models/Wallet';
import WalletTransaction from '../models/WalletTransaction';

interface AuthRequest extends Request {
  userId?: string;
  user?: any;
}

export const getWallet = async (req: AuthRequest, res: Response) => {
  try {
    const wallet = await Wallet.findOne({ userId: req.userId });
    
    if (!wallet) {
      // Create wallet if it doesn't exist
      const newWallet = new Wallet({
        userId: req.userId,
        balance: 0,
        currency: 'USD'
      });
      await newWallet.save();
      
      return res.json({
        success: true,
        data: newWallet
      });
    }

    res.json({
      success: true,
      data: wallet
    });
  } catch (error) {
    console.error('Get wallet error:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export const getWalletTransactions = async (req: AuthRequest, res: Response) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    
    const transactions = await WalletTransaction.find({ userId: req.userId })
      .sort({ createdAt: -1 })
      .limit(Number(limit) * 1)
      .skip((Number(page) - 1) * Number(limit));
    
    const total = await WalletTransaction.countDocuments({ userId: req.userId });
    
    res.json({
      success: true,
      data: {
        transactions,
        pagination: {
          current: Number(page),
          pages: Math.ceil(total / Number(limit)),
          total
        }
      }
    });
  } catch (error) {
    console.error('Get wallet transactions error:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export const topUpWallet = async (req: AuthRequest, res: Response) => {
  try {
    const { amount } = req.body;
    
    if (!amount || amount <= 0) {
      return res.status(400).json({ success: false, message: 'Invalid amount' });
    }

    let wallet = await Wallet.findOne({ userId: req.userId });
    
    if (!wallet) {
      wallet = new Wallet({
        userId: req.userId,
        balance: 0,
        currency: 'USD'
      });
    }

    const balanceBefore = wallet.balance;
    wallet.balance += amount;
    await wallet.save();

    // Create transaction record
    const transaction = new WalletTransaction({
      userId: req.userId,
      type: 'top-up',
      amount,
      balanceBefore,
      balanceAfter: wallet.balance,
      description: `Wallet top-up: +$${amount.toFixed(2)}`
    });
    await transaction.save();

    res.json({
      success: true,
      data: wallet
    });
  } catch (error) {
    console.error('Top-up wallet error:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export const deductWallet = async (req: AuthRequest, res: Response) => {
  try {
    const { amount } = req.body;
    
    if (!amount || amount <= 0) {
      return res.status(400).json({ success: false, message: 'Invalid amount' });
    }

    const wallet = await Wallet.findOne({ userId: req.userId });
    
    if (!wallet) {
      return res.status(404).json({ success: false, message: 'Wallet not found' });
    }

    if (wallet.balance < amount) {
      return res.status(400).json({ success: false, message: 'Insufficient balance' });
    }

    const balanceBefore = wallet.balance;
    wallet.balance -= amount;
    await wallet.save();

    // Create transaction record
    const transaction = new WalletTransaction({
      userId: req.userId,
      type: 'deduct',
      amount,
      balanceBefore,
      balanceAfter: wallet.balance,
      description: `Wallet deduction: -$${amount.toFixed(2)}`
    });
    await transaction.save();

    res.json({
      success: true,
      data: wallet
    });
  } catch (error) {
    console.error('Deduct wallet error:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
