const express = require('express');
const auth = require('../middleware/auth');
const AutoReply = require('../models/AutoReply');
const router = express.Router();

// Setup AutoReply
router.post('/setup', auth, async (req, res) => {
  try {
    const { platform, triggerKeywords, responseMessage, language } = req.body;
    
    let autoReply = await AutoReply.findOne({ userId: req.user.id, platform });
    
    if (autoReply) {
      autoReply = await AutoReply.findByIdAndUpdate(
        autoReply._id,
        { triggerKeywords, responseMessage, language },
        { new: true }
      );
    } else {
      autoReply = new AutoReply({
        userId: req.user.id,
        platform,
        triggerKeywords,
        responseMessage,
        language
      });
      await autoReply.save();
    }
    
    res.status(200).json({ success: true, message: 'ऑटो-रिप्लाई सेट किया गया', autoReply });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

// Get AutoReply for User
router.get('/user/:platform', auth, async (req, res) => {
  try {
    const autoReply = await AutoReply.findOne({ 
      userId: req.user.id, 
      platform: req.params.platform 
    });
    res.status(200).json({ success: true, autoReply });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

// Send Message to Chatbot
router.post('/message', async (req, res) => {
  try {
    const { message, platform, language } = req.body;
    
    // Find matching AutoReply
    const autoReplies = await AutoReply.find({ 
      isActive: true,
      language: language || 'Hindi'
    });
    
    let response = null;
    for (let ar of autoReplies) {
      for (let keyword of ar.triggerKeywords) {
        if (message.toLowerCase().includes(keyword.toLowerCase())) {
          response = ar.responseMessage;
          break;
        }
      }
      if (response) break;
    }
    
    if (!response) {
      response = 'कृपया किसी अन्य तरीके से प्रश्न पूछें या सीधे संपर्क करें।';
    }
    
    res.status(200).json({ success: true, response });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

module.exports = router;