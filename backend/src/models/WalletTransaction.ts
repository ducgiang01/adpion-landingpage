import mongoose, { Document, Schema } from 'mongoose';

export interface IWalletTransaction extends Document {
  userId: string;
  type: 'top-up' | 'deduct' | 'reset' | 'transfer';
  amount: number;
  balanceBefore: number;
  balanceAfter: number;
  description: string;
  accountId?: string;
  createdAt: Date;
}

const WalletTransactionSchema: Schema = new Schema({
  userId: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    enum: ['top-up', 'deduct', 'reset', 'transfer'],
    required: true
  },
  amount: {
    type: Number,
    required: true,
    min: 0
  },
  balanceBefore: {
    type: Number,
    required: true,
    min: 0
  },
  balanceAfter: {
    type: Number,
    required: true,
    min: 0
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  accountId: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

export default mongoose.model<IWalletTransaction>('WalletTransaction', WalletTransactionSchema);
