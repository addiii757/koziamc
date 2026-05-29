import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  coins: { type: Number, required: true },
  isPopular: { type: Boolean, default: false },
  isCustomAmount: { type: Boolean, default: false },
  sortOrder: { type: Number, default: 0 },
  imageUrl: { type: String },
  description: { type: String },
  rconCommands: [{
    type: String
  }],
  productType: {
    type: String,
    enum: ['coins', 'item'],
    default: 'coins'
  },
})

export default mongoose.model('Product', productSchema)