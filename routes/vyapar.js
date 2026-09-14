const express = require('express');
const auth = require('../middleware/auth');
const Vyapar = require('../models/Vyapar');
const router = express.Router();

// Add Shop
router.post('/add-shop', auth, async (req, res) => {
  try {
    const shop = new Vyapar(req.body);
    await shop.save();
    res.status(201).json({ success: true, message: 'दुकान जोड़ी गई', shop });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

// Get Shops by Area
router.get('/area/:area', async (req, res) => {
  try {
    const shops = await Vyapar.find({ area: req.params.area, approvalStatus: 'Approved' });
    res.status(200).json({ success: true, shops });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

// Get Shops by Category
router.get('/category/:category', async (req, res) => {
  try {
    const shops = await Vyapar.find({ category: req.params.category, approvalStatus: 'Approved' });
    res.status(200).json({ success: true, shops });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

// Search Shops
router.get('/search', async (req, res) => {
  try {
    const { name, area } = req.query;
    const shops = await Vyapar.find({ 
      shopName: { $regex: name, $options: 'i' },
      area: area,
      approvalStatus: 'Approved'
    });
    res.status(200).json({ success: true, shops });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

// Get All Shops (Admin)
router.get('/all', auth, async (req, res) => {
  try {
    const shops = await Vyapar.find();
    res.status(200).json({ success: true, shops });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

// Update Shop
router.put('/update/:id', auth, async (req, res) => {
  try {
    const shop = await Vyapar.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ success: true, message: 'दुकान अपडेट की गई', shop });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

module.exports = router;