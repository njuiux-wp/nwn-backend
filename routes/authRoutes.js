const express = require('express');
const router = express.Router();
const { generateOTP, verifyOTP } = require('../controllers/authController');

// Define your route
router.get('/', (req, res) => {
    res.send('Auth route is working!'); // This will respond when accessing /auth
});

router.post('/login', generateOTP);
router.post('/verify-otp', verifyOTP); // New route for OTP verification


module.exports = router;
