{// Routes/History.js
const express = require('express');
const router = express.Router();
const Donation = require('../Models/Donation');

// GET request to fetch donation history
router.get('/', async (req, res) => {
  try {
    const history = await Donation.find({ donationStatus: 'accept' }); // Assuming 'accept' is the completed status

    res.json(history);
  } catch (error) {
    console.error('Error fetching donation history:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

}


