const mongoose = require('mongoose');

// Zaroori Services (Emergency Services) Model
const serviceSchema = new mongoose.Schema({
  serviceName: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['Electrician', 'Plumber', 'Mechanic', 'AC Repair', 'Water Tank', 'Carpenter', 'Painter', 'Other'],
    required: true
  },
  serviceType: String,
  providerName: {
    type: String,
    required: true
  },
  providerPhone: {
    type: String,
    required: true
  },
  providerEmail: String,
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
  pincode: String,
  experience: String,
  rating: {
    type: Number,
    default: 0
  },
  availability: {
    is24x7: {
      type: Boolean,
      default: false
    },
    openingTime: String,
    closingTime: String,
    daysOpen: [String]
  },
  baseCost: Number,
  emergencyCost: Number,
  description: String,
  serviceImage: String,
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

module.exports = mongoose.model('Service', serviceSchema);
