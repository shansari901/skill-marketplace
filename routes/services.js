const express = require('express');
const auth = require('../middleware/auth');
const Service = require('../models/Service');
const router = express.Router();

// Add Service
router.post('/add-service', auth, async (req, res) => {
  try {
    const service = new Service(req.body);
    await service.save();
    res.status(201).json({ success: true, message: 'सेवा जोड़ी गई', service });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

// Get Services by Area and Category
router.get('/area/:area/category/:category', async (req, res) => {
  try {
    const services = await Service.find({ 
      area: req.params.area,
      category: req.params.category,
      approvalStatus: 'Approved'
    });
    res.status(200).json({ success: true, services });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

// Get Electricians
router.get('/electrician/:area', async (req, res) => {
  try {
    const electricians = await Service.find({ 
      area: req.params.area,
      category: 'Electrician',
      approvalStatus: 'Approved'
    });
    res.status(200).json({ success: true, electricians });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

// Get Plumbers
router.get('/plumber/:area', async (req, res) => {
  try {
    const plumbers = await Service.find({ 
      area: req.params.area,
      category: 'Plumber',
      approvalStatus: 'Approved'
    });
    res.status(200).json({ success: true, plumbers });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

// Get Mechanics
router.get('/mechanic/:area', async (req, res) => {
  try {
    const mechanics = await Service.find({ 
      area: req.params.area,
      category: 'Mechanic',
      approvalStatus: 'Approved'
    });
    res.status(200).json({ success: true, mechanics });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

// Get 24/7 Emergency Services
router.get('/emergency', async (req, res) => {
  try {
    const services = await Service.find({ 
      'availability.is24x7': true,
      approvalStatus: 'Approved'
    });
    res.status(200).json({ success: true, services });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

module.exports = router;