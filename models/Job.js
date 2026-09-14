const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  employerId: {
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
  title: {
    type: String,
    required: true
  },
  description: String,
  requirements: [String],
  budget: {
    type: Number,
    required: true
  },
  location: String,
  city: String,
  state: String,
  duration: String,
  status: {
    type: String,
    enum: ['open', 'in-progress', 'completed', 'closed'],
    default: 'open'
  },
  applications: [{
    workerId: mongoose.Schema.Types.ObjectId,
    status: {
      type: String,
      enum: ['pending', 'accepted', 'rejected'],
      default: 'pending'
    },
    appliedAt: Date
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  deadline: Date
});

module.exports = mongoose.model('Job', jobSchema);
