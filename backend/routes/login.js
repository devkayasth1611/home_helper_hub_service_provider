// routes/auth.js
const express = require('express');
const router = express.Router();
const User = require('../model/userModel'); // Assume you have a User model
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Login route
// routes/auth.js (Enhanced logging version)
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log("Login attempt with email:", email); // Log incoming email

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      console.warn("User not found with email:", email);
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.warn("Password mismatch for user:", email);
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Generate token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log("Login successful, token generated for user:", email);

    res.json({ message: 'Login successful', token });
  } catch (error) {
    console.error("Login error:", error); // Log the error to the console
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;