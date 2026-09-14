const express = require('express');
const Worker = require('../models/Worker');
const auth = require('../middleware/auth');
const router = express.Router();

const CATEGORIES = {
  textile: '🧵 कपड़ा और करघा',
  medical: '🏥 चिकित्सा और अस्पताल',
  computer: '💻 कंप्यूटर और ऑफिस',
  restaurant: '🍽️ रेस्तरां और भोजन',
  retail: '🛍️ दुकान और खुदरा',
  driving: '🚗 ड्राइविंग और डिलीवरी',
  repair: '🔧 मरम्मत और तकनीकी',
  construction: '🏠 निर्माण और घर',
  cleaning: '🧹 सफाई और घरेलू कार्य',
  warehouse: '📦 गोदाम और मजदूर',
  other: '🧑‍🔧 अन्य कुशल कार्य'
};

// Create worker profile
router.post('/profile', auth, async (req, res) => {
  try {
    const { category, skills, experience, description } = req.body;

    const workerProfile = new Worker({
      userId: req.user.id,
      category,
      skills,
      experience,
      description
    });

    await workerProfile.save();
    res.status(201).json({ success: true, message: 'प्रोफाइल बनाई गई', workerProfile });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

// Get worker profile
router.get('/profile/:workerId', async (req, res) => {
  try {
    const worker = await Worker.findById(req.params.workerId).populate('userId');
    if (!worker) {
      return res.status(404).json({ message: 'कार्यकर्ता नहीं मिला' });
    }
    res.status(200).json({ success: true, worker });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

// Get workers by category
router.get('/category/:category', async (req, res) => {
  try {
    const workers = await Worker.find({ category: req.params.category }).populate('userId');
    res.status(200).json({ success: true, category: CATEGORIES[req.params.category], workers });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

// Get all categories
router.get('/categories/all', (req, res) => {
  res.status(200).json({ success: true, categories: CATEGORIES });
});

module.exports = router;
