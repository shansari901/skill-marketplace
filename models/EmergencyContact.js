const mongoose = require('mongoose');

// Emergency Contacts Model
const emergencyContactSchema = new mongoose.Schema({
  contactType: {
    type: String,
    enum: ['Hospital', 'Clinic', 'Police', 'Fire Brigade', 'Ambulance', 'Cyber Cell', 'Mental Health', 'Poison Control'],
    required: true
  },
  organizationName: {
    type: String,
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
  pincode: String,
  primaryPhone: {
    type: String,
    required: true
  },
  emergencyPhone: String,
  alternatePhone: String,
  email: String,
  website: String,
  is24x7: {
    type: Boolean,
    default: true
  },
  operatingHours: {
    opening: String,
    closing: String
  },
  services: [String],
  description: String,
  landmark: String,
  coordinates: {
    latitude: Number,
    longitude: Number
  },
  approvalStatus: {
    type: String,
    enum: ['Pending', 'Approved', 'Rejected'],
    default: 'Approved'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('EmergencyContact', emergencyContactSchema);
