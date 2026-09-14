const mongoose = require('mongoose');

// Rozgar (Jobs) Model
const rozgarSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['Data Entry', 'Computer Operator', 'Manual Labour', 'Office Staff', 'Sales', 'Support', 'Driver', 'Other'],
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  employerName: String,
  employerPhone: {
    type: String,
    required: true
  },
  employerEmail: String,
  salary: {
    min: Number,
    max: Number,
    currency: {
      type: String,
      default: 'INR'
    }
  },
  jobLocation: {
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
  qualifications: String,
  experience: String,
  jobType: {
    type: String,
    enum: ['Full-time', 'Part-time', 'Contract', 'Freelance'],
    default: 'Full-time'
  },
  jobDescription: String,
  vacancies: Number,
  postedDate: {
    type: Date,
    default: Date.now
  },
  deadline: Date,
  approvalStatus: {
    type: String,
    enum: ['Pending', 'Approved', 'Rejected'],
    default: 'Pending'
  }
});

module.exports = mongoose.model('Rozgar', rozgarSchema);
