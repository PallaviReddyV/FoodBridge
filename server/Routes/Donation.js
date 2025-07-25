/*{// Donation.js in Routes folder
const express = require('express');
const router = express.Router();
const Donation = require('../Models/Donation');

router.post('/submitDonationForm', async (req, res) => {
  try {
    const {
      donorName,
      foodType,
      foodQuantity,
      foodAge,
      collectionAddress,
      specialNote,
      dateTimeOfDonation,
    } = req.body;

    const newDonation = new Donation({
      donorName,
      foodType,
      foodQuantity,
      foodAge,
      collectionAddress,
      specialNote,
      dateTimeOfDonation,
    });

    await newDonation.save();

    res.status(200).json({ message: 'Donation form submitted successfully' });
  } catch (error) {
    console.error('Error submitting donation form:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

}*/
const express = require('express');
const router = express.Router();
const Donation = require('../Models/Donation');

router.post('/submitDonationForm', async (req, res) => {
  try {
    const {
      donorName,
      foodType,
      foodQuantity,
      foodAge,
      collectionAddress,
      specialNote,
      dateTimeOfDonation,
    } = req.body;

    const newDonation = new Donation({
      donorName,
      foodType,
      foodQuantity,
      foodAge,
      collectionAddress,
      specialNote,
      dateTimeOfDonation,
    });

    await newDonation.save();

    res.status(200).json({ message: 'Donation form submitted successfully' });
  } catch (error) {
    console.error('Error submitting donation form:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

