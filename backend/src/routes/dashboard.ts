import { Router } from 'express';
import { getDashboardStats, getAccountStatus, getRecentActivities, getChartData } from '../controllers/dashboardController';

const router = Router();

// GET /api/dashboard/stats - Get dashboard statistics
router.get('/stats', getDashboardStats);

// GET /api/dashboard/accounts - Get account status overview
router.get('/accounts', getAccountStatus);

// GET /api/dashboard/activities - Get recent activities
router.get('/activities', getRecentActivities);

// GET /api/dashboard/charts - Get chart data
router.get('/charts', getChartData);

export default router;
