const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Resregister = require('../Models/Resregister');

router.post('/', async (req, res) => {
  const { Email, password } = req.body;

  try {
    // Check if the user with the provided email exists
    const user = await Resregister.findOne({ Email });

    if (!user) {
      return res.status(401).json({ message: "Login failed. User not found." });
    }

    // Check if the password matches
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      // Passwords match
      res.status(200).json({ message: "Login successful" });
    } else {
      // Passwords do not match
      res.status(401).json({ message: "Login failed. Invalid credentials." });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
