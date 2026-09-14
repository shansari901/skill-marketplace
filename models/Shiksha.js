const mongoose = require('mongoose');

// Shiksha (Education) Model
const shikshaSchema = new mongoose.Schema({
  institutionName: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['School', 'College', 'Coaching', 'Online Course'],
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
    type: String
  },
  contactNumber: {
    type: String,
    required: true
  },
  contactEmail: String,
  website: String,
  coursesOffered: [String],
  admissionInfo: {
    openings: String,
    eligibility: String,
    dates: String
  },
  resultInfo: {
    examName: String,
    resultDate: String,
    passingPercentage: String
  },
  studyMaterials: [String],
  principalName: String,
  institutionImage: String,
  rating: {
    type: Number,
    default: 0
  },
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

module.exports = mongoose.model('Shiksha', shikshaSchema);
