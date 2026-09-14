const express = require('express');
const Job = require('../models/Job');
const auth = require('../middleware/auth');
const router = express.Router();

// Create job posting
router.post('/create', auth, async (req, res) => {
  try {
    const { category, title, description, requirements, budget, location, city, state, duration, deadline } = req.body;

    const job = new Job({
      employerId: req.user.id,
      category,
      title,
      description,
      requirements,
      budget,
      location,
      city,
      state,
      duration,
      deadline
    });

    await job.save();
    res.status(201).json({ success: true, message: 'नौकरी पोस्ट की गई', job });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

// Get all open jobs
router.get('/open', async (req, res) => {
  try {
    const jobs = await Job.find({ status: 'open' }).populate('employerId');
    res.status(200).json({ success: true, count: jobs.length, jobs });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

// Get jobs by category
router.get('/category/:category', async (req, res) => {
  try {
    const jobs = await Job.find({ category: req.params.category, status: 'open' }).populate('employerId');
    res.status(200).json({ success: true, jobs });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

module.exports = router;
