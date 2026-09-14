const mongoose = require('mongoose');

// Khabrein (News & Events) Model
const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['News', 'Event', 'Traffic', 'Government', 'Travel', 'Other'],
    required: true
  },
  image: String,
  newsImage: String,
  city: {
    type: String,
    required: true
  },
  area: {
    type: String,
    required: true
  },
  eventDate: Date,
  eventLocation: String,
  source: String,
  author: String,
  views: {
    type: Number,
    default: 0
  },
  importance: {
    type: String,
    enum: ['Low', 'Medium', 'High', 'Urgent'],
    default: 'Medium'
  },
  approvalStatus: {
    type: String,
    enum: ['Pending', 'Approved', 'Rejected'],
    default: 'Pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('News', newsSchema);
