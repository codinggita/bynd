const express = require('express');
const router = express.Router();
const { register, login, getMe, updateProfile, forgotPassword } = require('../controllers/authController');
const auth = require('../middleware/authMiddleware');

// @route   POST api/auth/register
router.post('/register', register);

// @route   POST api/auth/login
router.post('/login', login);

// @route   GET api/auth/me
router.get('/me', auth, getMe);

// @route   PUT api/auth/update-profile
router.put('/update-profile', auth, updateProfile);

// @route   POST api/auth/forgot-password
router.post('/forgot-password', forgotPassword);

module.exports = router;
