import mongoose from 'mongoose'

const applicationSchema = new mongoose.Schema({
  applicationType: { 
    type: String, 
    enum: ['TESTHELPER', 'TWORCA', 'MEDIA', 'MINIMEDIA'], 
    required: true 
  },
  minecraftNick: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  answers: { type: mongoose.Schema.Types.Mixed, required: true },
  status: { 
    type: String, 
    enum: ['PENDING', 'ACCEPTED', 'REJECTED'], 
    default: 'PENDING' 
  },
  reviewedBy: { type: String },
  reviewNote: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

export default mongoose.model('Application', applicationSchema)