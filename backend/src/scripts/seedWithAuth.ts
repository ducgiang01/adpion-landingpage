import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from '../config/database';
import User from '../models/User';
import Account from '../models/Account';
import Activity from '../models/Activity';
import Wallet from '../models/Wallet';
import WalletTransaction from '../models/WalletTransaction';

dotenv.config();

const seedWithAuth = async () => {
  try {
    await connectDB();
    
    // Clear existing data
    await User.deleteMany({});
    await Account.deleteMany({});
    await Activity.deleteMany({});
    await Wallet.deleteMany({});
    await WalletTransaction.deleteMany({});
    
    console.log('🗑️  Cleared existing data');
    
    // Create test users
    const users = [
      {
        username: 'admin',
        email: 'admin@adpion.com',
        password: 'admin123',
        role: 'admin'
      },
      {
        username: 'user1',
        email: 'user1@adpion.com',
        password: 'user123',
        role: 'user'
      },
      {
        username: 'user2',
        email: 'user2@adpion.com',
        password: 'user123',
        role: 'user'
      }
    ];
    
    const createdUsers = await User.insertMany(users);
    console.log('✅ Seeded users');
    
    // Create wallets for users
    const wallets = createdUsers.map((user: any) => ({
      userId: user._id.toString(),
      balance: Math.floor(Math.random() * 1000) + 100, // Random balance between 100-1100
      currency: 'USD'
    }));
    
    await Wallet.insertMany(wallets);
    console.log('✅ Seeded wallets');
    
    // Create accounts for each user
    const accounts = [
      // Admin accounts
      {
        userId: (createdUsers[0] as any)._id.toString(),
        accountId: '1157513326484527',
        accountName: 'achievecollect.shop',
        status: 'active',
        balance: 0.01
      },
      {
        userId: (createdUsers[0] as any)._id.toString(),
        accountId: '833346622688890',
        accountName: 'Buyeasybd.shop',
        status: 'pending',
        balance: 0.27
      },
      {
        userId: (createdUsers[0] as any)._id.toString(),
        accountId: '645709148613088',
        accountName: 'Ads.Towfiq',
        status: 'active',
        balance: 12.60
      },
      {
        userId: (createdUsers[0] as any)._id.toString(),
        accountId: '800624365979550',
        accountName: 'SHOTOTA HOMEO',
        status: 'active',
        balance: 182.58
      },
      // User1 accounts
      {
        userId: (createdUsers[1] as any)._id.toString(),
        accountId: '123456789012345',
        accountName: 'Test Account 1',
        status: 'active',
        balance: 500.00
      },
      {
        userId: (createdUsers[1] as any)._id.toString(),
        accountId: '987654321098765',
        accountName: 'Test Account 2',
        status: 'blocked',
        balance: 0.00
      },
      // User2 accounts
      {
        userId: (createdUsers[2] as any)._id.toString(),
        accountId: '1549312319781595',
        accountName: 'tagor.xyz',
        status: 'active',
        balance: 44.48
      },
      {
        userId: (createdUsers[2] as any)._id.toString(),
        accountId: '555666777888999',
        accountName: 'Adpion01',
        status: 'active',
        balance: 5.47
      }
    ];
    
    await Account.insertMany(accounts);
    console.log('✅ Seeded accounts');
    
    // Create activities for each user
    const activities = [
      // Admin activities
      {
        userId: (createdUsers[0] as any)._id.toString(),
        type: 'top-up',
        title: 'Account Top-up',
        description: 'Top-up request processed successfully',
        amount: '+$1,000.00',
        accountId: '800624365979550',
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000) // 2 hours ago
      },
      {
        userId: (createdUsers[0] as any)._id.toString(),
        type: 'deduct',
        title: 'Account Deduction',
        description: 'Deduction request processed',
        amount: '-$500.00',
        accountId: '1157513326484527',
        createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000) // 4 hours ago
      },
      // User1 activities
      {
        userId: (createdUsers[1] as any)._id.toString(),
        type: 'top-up',
        title: 'Account Top-up',
        description: 'Top-up request processed successfully',
        amount: '+$250.00',
        accountId: '123456789012345',
        createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000) // 3 days ago
      },
      // User2 activities
      {
        userId: (createdUsers[2] as any)._id.toString(),
        type: 'bind',
        title: 'BM Binding',
        description: 'Business Manager binding completed',
        amount: 'N/A',
        accountId: '1549312319781595',
        createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000) // 6 hours ago
      }
    ];
    
    await Activity.insertMany(activities);
    console.log('✅ Seeded activities');
    
    // Create wallet transactions
    const transactions = [
      // Admin transactions
      {
        userId: (createdUsers[0] as any)._id.toString(),
        type: 'top-up',
        amount: 1000,
        balanceBefore: 0,
        balanceAfter: 1000,
        description: 'Initial wallet top-up'
      },
      {
        userId: (createdUsers[0] as any)._id.toString(),
        type: 'deduct',
        amount: 500,
        balanceBefore: 1000,
        balanceAfter: 500,
        description: 'Account top-up payment'
      },
      // User1 transactions
      {
        userId: (createdUsers[1] as any)._id.toString(),
        type: 'top-up',
        amount: 750,
        balanceBefore: 0,
        balanceAfter: 750,
        description: 'Initial wallet top-up'
      },
      // User2 transactions
      {
        userId: (createdUsers[2] as any)._id.toString(),
        type: 'top-up',
        amount: 300,
        balanceBefore: 0,
        balanceAfter: 300,
        description: 'Initial wallet top-up'
      }
    ];
    
    await WalletTransaction.insertMany(transactions);
    console.log('✅ Seeded wallet transactions');
    
    console.log('🎉 Database seeded successfully with authentication!');
    console.log('\n📋 Test Users:');
    console.log('Admin: admin@adpion.com / admin123');
    console.log('User1: user1@adpion.com / user123');
    console.log('User2: user2@adpion.com / user123');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

// Run if called directly
if (require.main === module) {
  seedWithAuth();
}

export default seedWithAuth;
