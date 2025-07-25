/*{const express = require('express');
const router = express.Router();
const Contact = require('../Models/Contact');

router.post('/submitContactForm', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const newContactMessage = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    res.status(200).json(newContactMessage);
  } catch (error) {
    console.error('Error submitting contact form:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
*/
const express = require('express');
const router = express.Router();
const Contact = require('../Models/Contact');

router.post('/submitContactForm', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const newContactMessage = new Contact({
      name,
      email,
      subject,
      message,
    });

    await newContactMessage.save();

    res.status(200).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error('Error submitting contact form:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

