const mongoose = require('mongoose');

// Vyapar (Shops & Businesses) Model
const vyaparSchema = new mongoose.Schema({
  shopName: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['Kirana', 'Stationery', 'Saree', 'General', 'Electronics', 'Clothing', 'Food', 'Other'],
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  area: {
    type: String,
    required: true
  },
  pincode: {
    type: String,
    required: true
  },
  ownerName: {
    type: String,
    required: true
  },
  ownerPhone: {
    type: String,
    required: true
  },
  ownerEmail: {
    type: String
  },
  shopTiming: {
    opening: String,
    closing: String
  },
  services: [String],
  shopImage: String,
  rating: {
    type: Number,
    default: 0
  },
  reviews: [String],
  approvalStatus: {
    type: String,
    enum: ['Pending', 'Approved', 'Rejected'],
    default: 'Pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Vyapar', vyaparSchema);
