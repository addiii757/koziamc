import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
  orderNumber: { type: String, required: true },
  email: { type: String, required: true },
  minecraftNickname: { type: String, required: true },
  playerNick: { type: String }, // Alias dla kompatybilności
  productType: { type: String, required: true },
  productName: { type: String, required: true },
  amount: { type: Number, required: true },
  coins: { type: Number, default: 0 },
  currency: { type: String, default: 'pln' },
  status: { type: String, default: 'PENDING' },
  paymentIntentId: { type: String },
  rconCommands: [{ type: String }],
  commandsExecuted: { type: Boolean, default: false },
  executedAt: { type: Date },
  completedAt: { type: Date }, // Data ukończenia płatności
  createdAt: { type: Date, default: Date.now }
})

export default mongoose.model('Order', orderSchema)