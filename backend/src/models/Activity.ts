import mongoose, { Document, Schema } from 'mongoose';

export interface IActivity extends Document {
  userId: string;
  type: 'top-up' | 'deduct' | 'reset' | 'bind';
  title: string;
  description: string;
  amount?: string;
  accountId: string;
  createdAt: Date;
}

const ActivitySchema: Schema = new Schema({
  userId: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    enum: ['top-up', 'deduct', 'reset', 'bind'],
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  amount: {
    type: String,
    trim: true
  },
  accountId: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});

export default mongoose.model<IActivity>('Activity', ActivitySchema);
