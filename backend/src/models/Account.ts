import mongoose, { Document, Schema } from 'mongoose';

export interface IAccount extends Document {
  accountId: string;
  accountName: string;
  status: 'active' | 'pending' | 'blocked';
  balance: number;
  createdAt: Date;
  updatedAt: Date;
}

const AccountSchema: Schema = new Schema({
  accountId: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  accountName: {
    type: String,
    required: true,
    trim: true
  },
  status: {
    type: String,
    enum: ['active', 'pending', 'blocked'],
    default: 'active'
  },
  balance: {
    type: Number,
    default: 0,
    min: 0
  }
}, {
  timestamps: true
});

export default mongoose.model<IAccount>('Account', AccountSchema);
