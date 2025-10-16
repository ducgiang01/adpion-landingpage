import { Request, Response } from 'express';
import Account, { IAccount } from '../models/Account';
import Activity, { IActivity } from '../models/Activity';

export const getDashboardStats = async (req: Request, res: Response) => {
  try {
    // Get total accounts
    const totalAccounts = await Account.countDocuments();
    
    // Get active accounts
    const activeAccounts = await Account.countDocuments({ status: 'active' });
    
    // Get new accounts this month
    const startOfMonth = new Date();
    startOfMonth.setDate(1);
    startOfMonth.setHours(0, 0, 0, 0);
    
    const newAccountsThisMonth = await Account.countDocuments({
      createdAt: { $gte: startOfMonth }
    });
    
    // Get total balance
    const totalBalanceResult = await Account.aggregate([
      { $group: { _id: null, total: { $sum: '$balance' } } }
    ]);
    const totalBalance = totalBalanceResult.length > 0 ? totalBalanceResult[0].total : 0;
    
    // Get balance increase this month
    const balanceIncreaseResult = await Account.aggregate([
      { $match: { updatedAt: { $gte: startOfMonth } } },
      { $group: { _id: null, total: { $sum: '$balance' } } }
    ]);
    const balanceIncrease = balanceIncreaseResult.length > 0 ? balanceIncreaseResult[0].total : 0;
    
    // Get total requests
    const totalRequests = await Activity.countDocuments();
    
    // Get requests this week
    const startOfWeek = new Date();
    startOfWeek.setDate(startOfWeek.getDate() - 7);
    const requestsThisWeek = await Activity.countDocuments({
      createdAt: { $gte: startOfWeek }
    });
    
    const statistics = {
      totalAccounts,
      activeAccounts,
      newAccountsThisMonth,
      totalBalance,
      balanceIncrease,
      totalRequests,
      requestsThisWeek
    };
    
    res.json({ success: true, data: statistics });
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export const getAccountStatus = async (req: Request, res: Response) => {
  try {
    const accounts = await Account.find()
      .sort({ createdAt: -1 })
      .limit(10)
      .select('accountId accountName status balance createdAt');
    
    res.json({ success: true, data: accounts });
  } catch (error) {
    console.error('Error fetching account status:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export const getRecentActivities = async (req: Request, res: Response) => {
  try {
    const activities = await Activity.find()
      .sort({ createdAt: -1 })
      .limit(10)
      .select('type title description amount accountId createdAt');
    
    // Format activities with time ago
    const formattedActivities = activities.map(activity => {
      const timeAgo = getTimeAgo(activity.createdAt);
      return {
        ...activity.toObject(),
        time: timeAgo
      };
    });
    
    res.json({ success: true, data: formattedActivities });
  } catch (error) {
    console.error('Error fetching recent activities:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export const getChartData = async (req: Request, res: Response) => {
  try {
    // Get balance trend for last 7 days
    const balanceTrend = await getBalanceTrend();
    
    // Get request types distribution
    const requestTypes = await getRequestTypesDistribution();
    
    res.json({ 
      success: true, 
      data: { 
        balanceTrend, 
        requestTypes 
      } 
    });
  } catch (error) {
    console.error('Error fetching chart data:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Helper functions
const getTimeAgo = (date: Date): string => {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) return 'Just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} days ago`;
  return `${Math.floor(diffInSeconds / 604800)} weeks ago`;
};

const getBalanceTrend = async () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const trend = [];
  
  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    date.setHours(0, 0, 0, 0);
    
    const endDate = new Date(date);
    endDate.setHours(23, 59, 59, 999);
    
    const result = await Account.aggregate([
      {
        $match: {
          createdAt: { $lte: endDate }
        }
      },
      {
        $group: {
          _id: null,
          total: { $sum: '$balance' }
        }
      }
    ]);
    
    const total = result.length > 0 ? result[0].total : 0;
    trend.push({
      label: days[date.getDay() === 0 ? 6 : date.getDay() - 1],
      value: total
    });
  }
  
  return trend;
};

const getRequestTypesDistribution = async () => {
  const distribution = await Activity.aggregate([
    {
      $group: {
        _id: '$type',
        count: { $sum: 1 }
      }
    }
  ]);
  
  const typeColors = {
    'top-up': 'bg-green-500',
    'deduct': 'bg-red-500',
    'reset': 'bg-yellow-500',
    'bind': 'bg-purple-500'
  };
  
  return distribution.map(item => ({
    name: item._id.charAt(0).toUpperCase() + item._id.slice(1),
    value: item.count,
    color: typeColors[item._id as keyof typeof typeColors] || 'bg-gray-500'
  }));
};
