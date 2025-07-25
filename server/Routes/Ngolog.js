/*{
  // userController.js
const express = require('express');

const User= require('../Models/Ngologin');
const router = express.Router();

// Login route
router.post('/Ngologin', async (req, res) => {
  const { email, password } = req.body;
  User.create(req.body)
  .then(Ngologin=>res.json(Ngologin))
  .catch(err=>res.json(err))


  try {
    // Find the user in the database
    const user = await User.findOne({ email, password });

    if (user) {
      // User found, send a success response
      res.status(200).json({ message: 'Login successful', user });
    } else {
      // User not found, send an error response
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    // Handle other errors
    console.error('Login error:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Add other routes or methods here (e.g., GET, PUT, etc.)

module.exports = router;
}*/


// userController.js

const express = require('express');
const User = require('../Models/Ngoregister');

const router = express.Router();

// Login route
router.post('/', async (req, res) => {
  const { ngoEmail, password } = req.body;

  try {
    // Find the user in the database
    const user = await User.findOne({ ngoEmail, password });

    if (user) {
      // User found, send a success response
      res.status(200).json({ message: 'Login successful', user });
    } else {
      // User not found, send a message to register
      res.status(401).json({ message: 'User not found. Please register.' });
    }
  } catch (error) {
    // Handle other errors
    console.error('Login error:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Add other routes or methods here (e.g., GET, PUT, etc.)

module.exports = router;

