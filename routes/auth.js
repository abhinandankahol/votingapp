const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');

const router = express.Router();

// User Signup
router.post('/', async (req, res) => {
    try {
        const { email, password, aadharnumber, age } = req.body;

        // Check if user already exists
        let existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send('User already exists');
        }

        // Create a new user instance
        const user = new User({
            email,
            password,
           aadharnumber,
            age
        });

        // Save the user to the database
        await user.save();

        // Respond with success message
        res.status(201).send('User registered successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error signing up user');
    }
});

module.exports = router;
