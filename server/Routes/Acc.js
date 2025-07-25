/*// Acc.js (Controller)
const express = require('express');
const router = express.Router();
const Resregister = require('../Models/Resregister');

// Get user details
router.get('/user/details', async (req, res) => {
  try {
    const users = await Resregister.find();
    res.json(users);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
*/

// Acc.js (Controller)

const express = require('express');
const router = express.Router();
const Resregister = require('../Models/Resregister');

// Get user details
router.get('/user/details', async (req, res) => {
  try {
    const userId = req.user.id; // Assuming you have access to the logged-in user's ID through authentication
    const user = await Resregister.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({
      Email: user.Email,
      Name: user.Name,
      Address: user.Address,
      phoneNumber: user.phoneNumber
    });
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;


