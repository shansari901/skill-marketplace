const express = require('express');
const Message = require('../models/Message');
const auth = require('../middleware/auth');
const router = express.Router();

// Send message
router.post('/send', auth, async (req, res) => {
  try {
    const { recipientId, text } = req.body;

    const message = new Message({
      senderId: req.user.id,
      recipientId,
      text,
      timestamp: new Date()
    });

    await message.save();
    res.status(201).json({ success: true, message: 'संदेश भेजा गया', message });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

// Get conversation
router.get('/conversation/:userId', auth, async (req, res) => {
  try {
    const messages = await Message.find({
      $or: [
        { senderId: req.user.id, recipientId: req.params.userId },
        { senderId: req.params.userId, recipientId: req.user.id }
      ]
    }).sort({ timestamp: 1 });

    res.status(200).json({ success: true, messages });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

// Get all chats
router.get('/chats', auth, async (req, res) => {
  try {
    const chats = await Message.aggregate([
      {
        $match: {
          $or: [
            { senderId: req.user.id },
            { recipientId: req.user.id }
          ]
        }
      },
      { $sort: { timestamp: -1 } },
      {
        $group: {
          _id: {
            $cond: [
              { $eq: ['$senderId', req.user.id] },
              '$recipientId',
              '$senderId'
            ]
          },
          lastMessage: { $first: '$text' },
          lastMessageTime: { $first: '$timestamp' }
        }
      }
    ]);

    res.status(200).json({ success: true, chats });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

module.exports = router;
