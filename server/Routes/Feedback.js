// Feedback.js in Routes folder
const express = require('express');
const router = express.Router();
const Contact = require('../Models/Contact'); // Using the same model for Contact and Feedback

router.get('/', async (req, res) => {
  try {
    const feedbacks = await Contact.find(); // Retrieve all contacts (which are feedbacks) from the database

    res.status(200).json(feedbacks);
  } catch (error) {
    console.error('Error fetching feedbacks:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
