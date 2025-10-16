import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from '../config/database';
import User from '../models/User';

dotenv.config();

const testAuth = async () => {
  try {
    await connectDB();
    
    // Find admin user
    const admin = await User.findOne({ email: 'admin@adpion.com' });
    console.log('Admin user:', admin);
    
    if (admin) {
      // Test password comparison
      const isValid = await admin.comparePassword('admin123');
      console.log('Password valid:', isValid);
    }
    
    // List all users
    const users = await User.find({}, 'username email role');
    console.log('All users:', users);
    
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
};

testAuth();
