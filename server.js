const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const workerRoutes = require('./routes/workers');
const jobRoutes = require('./routes/jobs');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB से जुड़ा गया'))
  .catch(err => console.error('❌ MongoDB त्रुटि:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/workers', workerRoutes);
app.use('/api/jobs', jobRoutes);

// Welcome route
app.get('/', (req, res) => {
  res.json({
    message: '🎯 अपना छेत्र - Skill Marketplace',
    description: 'अपने आसपास काम और कारीगर खोजें',
    version: '1.0.0'
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 सर्वर पोर्ट ${PORT} पर चल रहा है`);
});
