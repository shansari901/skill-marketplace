const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'कृपया नाम दर्ज करें'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'कृपया ईमेल दर्ज करें'],
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'कृपया वैध ईमेल दर्ज करें']
  },
  password: {
    type: String,
    required: [true, 'कृपया पासवर्ड दर्ज करें'],
    minlength: 6,
    select: false
  },
  phone: {
    type: String,
    required: [true, 'कृपया फोन नंबर दर्ज करें']
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  userType: {
    type: String,
    enum: ['worker', 'employer', 'admin'],
    default: 'worker'
  },
  profilePicture: {
    type: String,
    default: null
  },
  bio: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare passwords
userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
