const express = require('express');
const nodemailer = require('nodemailer');
const auth = require('../middleware/auth');
const router = express.Router();

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Send job notification email
router.post('/job-notification', auth, async (req, res) => {
  try {
    const { recipientEmail, jobTitle, jobDescription, workerName } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipientEmail,
      subject: `🎉 नई नौकरी मिली: ${jobTitle}`,
      html: `
        <h2>नमस्ते ${workerName}!</h2>
        <p>आपके लिए एक नई नौकरी उपलब्ध है:</p>
        <h3>${jobTitle}</h3>
        <p>${jobDescription}</p>
        <p><a href="http://localhost:3000/jobs">नौकरी देखें</a></p>
        <hr>
        <p>अपना छेत्र - Skill Marketplace</p>
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'ईमेल भेजा गया' });
  } catch (error) {
    res.status(500).json({ message: 'ईमेल भेजने में त्रुटि', error: error.message });
  }
});

// Send application notification email
router.post('/application-notification', auth, async (req, res) => {
  try {
    const { recipientEmail, workerName, jobTitle, employerName } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipientEmail,
      subject: `✅ नई आवेदन: ${workerName} ने ${jobTitle} के लिए आवेदन किया`,
      html: `
        <h2>नमस्ते ${employerName}!</h2>
        <p><strong>${workerName}</strong> ने आपकी नौकरी "<strong>${jobTitle}</strong>" के लिए आवेदन किया है।</p>
        <p><a href="http://localhost:3000/applications">आवेदन देखें</a></p>
        <hr>
        <p>अपना छेत्र - Skill Marketplace</p>
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'ईमेल भेजा गया' });
  } catch (error) {
    res.status(500).json({ message: 'ईमेल भेजने में त्रुटि', error: error.message });
  }
});

// Send verification email
router.post('/verification-email', async (req, res) => {
  try {
    const { recipientEmail, verificationLink, userName } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipientEmail,
      subject: '📧 ईमेल सत्यापन - अपना छेत्र',
      html: `
        <h2>नमस्ते ${userName}!</h2>
        <p>आपके खाते को सत्यापित करने के लिए नीचे दिए गए लिंक पर क्लिक करें:</p>
        <p><a href="${verificationLink}" style="background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">ईमेल सत्यापित करें</a></p>
        <p>यह लिंक 24 घंटे में समाप्त हो जाएगा।</p>
        <hr>
        <p>अपना छेत्र - Skill Marketplace</p>
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'सत्यापन ईमेल भेजा गया' });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

// Send password reset email
router.post('/password-reset', async (req, res) => {
  try {
    const { recipientEmail, resetLink, userName } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipientEmail,
      subject: '🔐 पासवर्ड रीसेट - अपना छेत्र',
      html: `
        <h2>नमस्ते ${userName}!</h2>
        <p>आपने अपना पासवर्ड रीसेट करने का अनुरोध किया है।</p>
        <p><a href="${resetLink}" style="background-color: #2196F3; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">पासवर्ड रीसेट करें</a></p>
        <p>यह लिंक 1 घंटे में समाप्त हो जाएगा।</p>
        <p>अगर आपने यह अनुरोध नहीं किया, तो इस ईमेल को अनदेखा करें।</p>
        <hr>
        <p>अपना छेत्र - Skill Marketplace</p>
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'पासवर्ड रीसेट ईमेल भेजा गया' });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

// Send message notification email
router.post('/message-notification', async (req, res) => {
  try {
    const { recipientEmail, senderName, message } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipientEmail,
      subject: `💬 नया संदेश: ${senderName} से`,
      html: `
        <h2>नमस्ते!</h2>
        <p><strong>${senderName}</strong> ने आपको एक संदेश भेजा है:</p>
        <p style="background-color: #f0f0f0; padding: 10px; border-radius: 5px;">"${message}"</p>
        <p><a href="http://localhost:3000/messages">संदेश देखें</a></p>
        <hr>
        <p>अपना छेत्र - Skill Marketplace</p>
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'ईमेल भेजा गया' });
  } catch (error) {
    res.status(500).json({ message: 'त्रुटि', error: error.message });
  }
});

module.exports = router;
