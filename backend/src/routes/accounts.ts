import { Router } from 'express';
import {
  getAllAccounts,
  getAccountById,
  createAccount,
  updateAccount,
  deleteAccount,
  topUpAccount,
  deductAccount
} from '../controllers/accountController';

const router = Router();

// GET /api/accounts - Get all accounts with pagination and filters
router.get('/', getAllAccounts);

// GET /api/accounts/:id - Get account by ID
router.get('/:id', getAccountById);

// POST /api/accounts - Create new account
router.post('/', createAccount);

// PUT /api/accounts/:id - Update account
router.put('/:id', updateAccount);

// DELETE /api/accounts/:id - Delete account
router.delete('/:id', deleteAccount);

// POST /api/accounts/:id/topup - Top up account balance
router.post('/:id/topup', topUpAccount);

// POST /api/accounts/:id/deduct - Deduct from account balance
router.post('/:id/deduct', deductAccount);

export default router;
