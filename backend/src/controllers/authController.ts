import { Request, Response } from 'express';
import User from '../models/User';
import Wallet from '../models/Wallet';

const jwt = require('jsonwebtoken');

interface AuthRequest extends Request {
  userId?: string;
  user?: any;
}

export const register = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ email }, { username }]
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User with this email or username already exists'
      });
    }

    // Create new user
    const user = new User({
      username,
      email,
      password
    });

    await user.save();

    // Create wallet for user
    const wallet = new Wallet({
      userId: (user as any)._id.toString(),
      balance: 0,
      currency: 'USD'
    });

    await wallet.save();

    // Generate JWT token
    const token = jwt.sign(
      { 
        userId: (user as any)._id.toString(), 
        username: user.username, 
        email: user.email 
      },
      (process.env.JWT_SECRET || 'your-secret-key') as string,
      { expiresIn: (process.env.JWT_EXPIRES_IN || '7d') as string }
    );

    res.status(201).json({
      success: true,
      data: {
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          role: user.role
        },
        token
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    // Check password
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { 
        userId: (user as any)._id.toString(), 
        username: user.username, 
        email: user.email 
      },
      (process.env.JWT_SECRET || 'your-secret-key') as string,
      { expiresIn: (process.env.JWT_EXPIRES_IN || '7d') as string }
    );

    res.json({
      success: true,
      data: {
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          role: user.role
        },
        token
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export const getProfile = async (req: AuthRequest, res: Response) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.json({
      success: true,
      data: {
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          role: user.role,
          createdAt: user.createdAt
        }
      }
    });
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
