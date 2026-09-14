const mongoose = require('mongoose');

// AutoReply & Chatbot Model
const autoReplySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  platform: {
    type: String,
    enum: ['Facebook', 'Instagram', 'WhatsApp', 'Website'],
    required: true
  },
  triggerKeywords: [String],
  responseMessage: {
    type: String,
    required: true
  },
  language: {
    type: String,
    enum: ['Hindi', 'Urdu', 'English'],
    default: 'Hindi'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('AutoReply', autoReplySchema);
