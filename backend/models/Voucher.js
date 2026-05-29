import mongoose from 'mongoose'

const voucherSchema = new mongoose.Schema({
  code: { type: String, unique: true, required: true },
  reward: { type: String, required: true },
  rewardType: { type: String, enum: ['COINS', 'ITEM', 'RANK'], default: 'COINS' },
  rewardValue: { type: Number, required: true },
  usedBy: { type: String },
  usedAt: { type: Date },
  createdAt: { type: Date, default: Date.now },
  expiresAt: { type: Date },
  maxUses: { type: Number, default: 1 },
  usedCount: { type: Number, default: 0 },
})

export default mongoose.model('Voucher', voucherSchema)