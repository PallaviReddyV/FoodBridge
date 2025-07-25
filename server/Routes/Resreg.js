const express = require('express');
const router = express.Router();
const Resregister = require('../Models/Resregister');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
  const { yourName, Email, Name, Address, phoneNumber, password, confirmPassword } = req.body;

  try {
    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords don't match" });
    }

    // Check if the email is already registered
    const existingUser = await Resregister.findOne({ Email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new Resregister({
      yourName,
      Email,
      Name,
      Address,
      phoneNumber,
      password: hashedPassword,
      confirmPassword: hashedPassword, // You may want to remove this line or adjust it based on your schema
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (error) {
    console.error('Registration error:', error.message);
    res.status(500).json({ message: "Registration failed" });
  }
});

module.exports = router;
