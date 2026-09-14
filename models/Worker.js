const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  category: {
    type: String,
    enum: [
      'textile',
      'medical',
      'computer',
      'restaurant',
      'retail',
      'driving',
      'repair',
      'construction',
      'cleaning',
      'warehouse',
      'other'
    ],
    required: true
  },
  skills: [String],
  experience: {
    type: Number,
    description: 'Experience in years'
  },
  description: String,
  portfolio: [{
    title: String,
    description: String,
    image: String
  }],
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  reviews: [{
    userId: mongoose.Schema.Types.ObjectId,
    text: String,
    rating: Number,
    createdAt: Date
  }],
  verified: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Worker', workerSchema);
