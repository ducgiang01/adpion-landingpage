import mongoose, { Document, Schema } from 'mongoose';

export interface IWallet extends Document {
  userId: string;
  balance: number;
  currency: string;
  createdAt: Date;
  updatedAt: Date;
}

const WalletSchema: Schema = new Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  balance: {
    type: Number,
    default: 0,
    min: 0
  },
  currency: {
    type: String,
    default: 'USD',
    enum: ['USD', 'EUR', 'GBP']
  }
}, {
  timestamps: true
});

export default mongoose.model<IWallet>('Wallet', WalletSchema);
