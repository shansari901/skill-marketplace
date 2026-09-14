const express = require('express');
const auth = require('../middleware/auth');
const Rozgar = require('../models/Rozgar');
const router = express.Router();

// Post Job
router.post('/post-job', auth, async (req, res) => {
  try {
    const job = new Rozgar(req.body);
    await job.save();
    res.status(201).json({ success: true, message: 'नौकरी पोस्ट की गई', job });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

// Get Jobs by Area
router.get('/area/:area', async (req, res) => {
  try {
    const jobs = await Rozgar.find({ 
      area: req.params.area, 
      approvalStatus: 'Approved'
    });
    res.status(200).json({ success: true, jobs });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

// Get Jobs by Category
router.get('/category/:category', async (req, res) => {
  try {
    const jobs = await Rozgar.find({ 
      category: req.params.category,
      approvalStatus: 'Approved'
    });
    res.status(200).json({ success: true, jobs });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

// Search Jobs
router.get('/search', async (req, res) => {
  try {
    const { title, area, category } = req.query;
    const query = { approvalStatus: 'Approved' };
    if (title) query.jobTitle = { $regex: title, $options: 'i' };
    if (area) query.area = area;
    if (category) query.category = category;
    
    const jobs = await Rozgar.find(query);
    res.status(200).json({ success: true, jobs });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

module.exports = router;