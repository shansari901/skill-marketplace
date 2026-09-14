const express = require('express');
const auth = require('../middleware/auth');
const News = require('../models/News');
const router = express.Router();

// Add News
router.post('/add-news', auth, async (req, res) => {
  try {
    const news = new News(req.body);
    await news.save();
    res.status(201).json({ success: true, message: 'खबर जोड़ी गई', news });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

// Get Local News
router.get('/local/:area', async (req, res) => {
  try {
    const news = await News.find({ 
      area: req.params.area,
      approvalStatus: 'Approved'
    }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, news });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

// Get Events
router.get('/events', async (req, res) => {
  try {
    const events = await News.find({ 
      category: 'Event',
      approvalStatus: 'Approved',
      eventDate: { $gte: new Date() }
    }).sort({ eventDate: 1 });
    res.status(200).json({ success: true, events });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

// Get Traffic Updates
router.get('/traffic/:area', async (req, res) => {
  try {
    const traffic = await News.find({ 
      area: req.params.area,
      category: 'Traffic',
      approvalStatus: 'Approved'
    }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, traffic });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

// Get Government Announcements
router.get('/government', async (req, res) => {
  try {
    const announcements = await News.find({ 
      category: 'Government',
      approvalStatus: 'Approved'
    }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, announcements });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

module.exports = router;