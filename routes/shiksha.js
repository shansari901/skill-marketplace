const express = require('express');
const auth = require('../middleware/auth');
const Shiksha = require('../models/Shiksha');
const router = express.Router();

// Add Education Institute
router.post('/add-institute', auth, async (req, res) => {
  try {
    const institute = new Shiksha(req.body);
    await institute.save();
    res.status(201).json({ success: true, message: 'संस्थान जोड़ा गया', institute });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

// Get Schools by Area
router.get('/schools/:area', async (req, res) => {
  try {
    const schools = await Shiksha.find({ 
      area: req.params.area, 
      type: 'School',
      approvalStatus: 'Approved'
    });
    res.status(200).json({ success: true, schools });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

// Get Colleges
router.get('/colleges', async (req, res) => {
  try {
    const colleges = await Shiksha.find({ 
      type: 'College',
      approvalStatus: 'Approved'
    });
    res.status(200).json({ success: true, colleges });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

// Get Admission Updates
router.get('/admission-updates', async (req, res) => {
  try {
    const updates = await Shiksha.find({ 
      'admissionInfo.dates': { $exists: true },
      approvalStatus: 'Approved'
    });
    res.status(200).json({ success: true, updates });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

// Get Results
router.get('/results', async (req, res) => {
  try {
    const results = await Shiksha.find({ 
      'resultInfo.resultDate': { $exists: true },
      approvalStatus: 'Approved'
    });
    res.status(200).json({ success: true, results });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

module.exports = router;