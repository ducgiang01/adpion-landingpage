import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from '../config/database';
import Account from '../models/Account';
import Activity from '../models/Activity';

dotenv.config();

const seedData = async () => {
  try {
    await connectDB();
    
    // Clear existing data
    await Account.deleteMany({});
    await Activity.deleteMany({});
    
    console.log('🗑️  Cleared existing data');
    
    // Seed accounts
    const accounts = [
      {
        accountId: '1157513326484527',
        accountName: 'achievecollect.shop',
        status: 'active',
        balance: 0.01
      },
      {
        accountId: '833346622688890',
        accountName: 'Buyeasybd.shop',
        status: 'pending',
        balance: 0.27
      },
      {
        accountId: '645709148613088',
        accountName: 'Ads.Towfiq',
        status: 'active',
        balance: 12.60
      },
      {
        accountId: '800624365979550',
        accountName: 'SHOTOTA HOMEO',
        status: 'active',
        balance: 182.58
      },
      {
        accountId: '123456789012345',
        accountName: 'Test Account 1',
        status: 'active',
        balance: 500.00
      },
      {
        accountId: '987654321098765',
        accountName: 'Test Account 2',
        status: 'blocked',
        balance: 0.00
      },
      {
        accountId: '1549312319781595',
        accountName: 'tagor.xyz',
        status: 'active',
        balance: 44.48
      },
      {
        accountId: '555666777888999',
        accountName: 'Adpion01',
        status: 'active',
        balance: 5.47
      },
      {
        accountId: '111222333444555',
        accountName: 'adscitybd.com',
        status: 'active',
        balance: 0.01
      },
      {
        accountId: '999888777666555',
        accountName: 'Cholo Speed UK',
        status: 'active',
        balance: 0.01
      }
    ];
    
    await Account.insertMany(accounts);
    console.log('✅ Seeded accounts');
    
    // Seed activities
    const activities = [
      {
        type: 'top-up',
        title: 'Account Top-up',
        description: 'Top-up request processed successfully',
        amount: '+$1,000.00',
        accountId: '800624365979550',
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000) // 2 hours ago
      },
      {
        type: 'deduct',
        title: 'Account Deduction',
        description: 'Deduction request processed',
        amount: '-$500.00',
        accountId: '1157513326484527',
        createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000) // 4 hours ago
      },
      {
        type: 'bind',
        title: 'BM Binding',
        description: 'Business Manager binding completed',
        amount: 'N/A',
        accountId: '833346622688890',
        createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000) // 6 hours ago
      },
      {
        type: 'reset',
        title: 'Account Reset',
        description: 'Account reset to initial state',
        amount: 'N/A',
        accountId: '645709148613088',
        createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000) // 1 day ago
      },
      {
        type: 'top-up',
        title: 'Account Top-up',
        description: 'Top-up request processed successfully',
        amount: '+$250.00',
        accountId: '123456789012345',
        createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000) // 3 days ago
      },
      {
        type: 'deduct',
        title: 'Account Deduction',
        description: 'Deduction request processed',
        amount: '-$100.00',
        accountId: '987654321098765',
        createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000) // 5 days ago
      }
    ];
    
    await Activity.insertMany(activities);
    console.log('✅ Seeded activities');
    
    console.log('🎉 Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

// Run if called directly
if (require.main === module) {
  seedData();
}

export default seedData;
