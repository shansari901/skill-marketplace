const express = require('express');
const EmergencyContact = require('../models/EmergencyContact');
const router = express.Router();

// Get All Emergency Contacts
router.get('/all', async (req, res) => {
  try {
    const contacts = await EmergencyContact.find({ approvalStatus: 'Approved' });
    res.status(200).json({ success: true, contacts });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

// Get Hospitals
router.get('/hospitals/:area', async (req, res) => {
  try {
    const hospitals = await EmergencyContact.find({ 
      contactType: 'Hospital',
      area: req.params.area,
      approvalStatus: 'Approved'
    });
    res.status(200).json({ success: true, hospitals });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

// Get Police Stations
router.get('/police', async (req, res) => {
  try {
    const police = await EmergencyContact.find({ 
      contactType: 'Police',
      approvalStatus: 'Approved'
    });
    res.status(200).json({ success: true, police });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

// Get Fire Brigade
router.get('/fire', async (req, res) => {
  try {
    const fire = await EmergencyContact.find({ 
      contactType: 'Fire Brigade',
      approvalStatus: 'Approved'
    });
    res.status(200).json({ success: true, fire });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

// Get Ambulance
router.get('/ambulance', async (req, res) => {
  try {
    const ambulance = await EmergencyContact.find({ 
      contactType: 'Ambulance',
      approvalStatus: 'Approved'
    });
    res.status(200).json({ success: true, ambulance });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

// Get Cyber Cell
router.get('/cyber-cell', async (req, res) => {
  try {
    const cyberCell = await EmergencyContact.find({ 
      contactType: 'Cyber Cell',
      approvalStatus: 'Approved'
    });
    res.status(200).json({ success: true, cyberCell });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

// Get Mental Health Support
router.get('/mental-health', async (req, res) => {
  try {
    const support = await EmergencyContact.find({ 
      contactType: 'Mental Health',
      approvalStatus: 'Approved'
    });
    res.status(200).json({ success: true, support });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

module.exports = router;