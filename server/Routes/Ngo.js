const express = require('express');
const router = express.Router();
const Donation = require('../Models/Donation'); // Assuming you have a Donation model

router.get('/donations', async (req, res) => {
  try {
    const donations = await Donation.find(); // Retrieve all donations from the database

    res.status(200).json(donations);
  } catch (error) {
    console.error('Error fetching donations:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/updateStatus/:id', async (req, res) => {
  const { donationStatus } = req.body;

  try {
    const updatedDonation = await Donation.findByIdAndUpdate(
      req.params.id,
      { $set: { donationStatus } },
      { new: true }
    );

    res.status(200).json(updatedDonation);
  } catch (error) {
    console.error('Error updating donation status:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/addContactDetails/:id', async (req, res) => {
  const { contactDetails } = req.body;

  try {
    const updatedDonation = await Donation.findByIdAndUpdate(
      req.params.id,
      { $set: { contactDetails } },
      { new: true }
    );

    res.status(200).json(updatedDonation);
  } catch (error) {
    console.error('Error adding contact details:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;


