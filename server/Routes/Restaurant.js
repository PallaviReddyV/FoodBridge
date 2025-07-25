// Restaurant.js in Routes folder
const express = require('express');
const router = express.Router();
const Donation = require('../Models/Donation');

router.get('/donations', async (req, res) => {
  try {
    const donations = await Donation.find(); // Retrieve all donations from the database

    res.status(200).json(donations);
  } catch (error) {
    console.error('Error fetching donations:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
