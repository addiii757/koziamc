import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  discordId: { type: String, unique: true, sparse: true },
  username: { type: String, required: true },
  email: { type: String },
  avatar: { type: String },
  roles: [{ type: String, default: ['USER'] }],
  minecraftNick: { type: String },
  createdAt: { type: Date, default: Date.now },
  lastLogin: { type: Date },
})

export default mongoose.model('User', userSchema)