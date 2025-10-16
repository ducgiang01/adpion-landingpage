import { Router } from 'express';
import { getWallet, getWalletTransactions, topUpWallet, deductWallet } from '../controllers/walletController';
import { authenticateToken } from '../middleware/auth';

const router = Router();

// All wallet routes require authentication
router.use(authenticateToken);

// GET /api/wallet - Get wallet balance
router.get('/', getWallet);

// GET /api/wallet/transactions - Get wallet transactions
router.get('/transactions', getWalletTransactions);

// POST /api/wallet/topup - Top up wallet
router.post('/topup', topUpWallet);

// POST /api/wallet/deduct - Deduct from wallet
router.post('/deduct', deductWallet);

export default router;
