const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
console.log('Environment Loaded. JWT_SECRET exists:', !!process.env.JWT_SECRET);
const asyncHandler = require('express-async-handler');
const { registerSchema, loginSchema, updateProfileSchema } = require('../utils/validators');

// @desc    Register user
// @route   POST /api/auth/register
exports.register = asyncHandler(async (req, res) => {
  // Validate input
  const validatedData = registerSchema.parse(req.body);
  const { name, email, password, organization } = validatedData;

  let user = await User.findOne({ email });
  if (user) {
    res.status(400);
    throw new Error('Sovereign identity already exists');
  }

  user = new User({
    name,
    email,
    password,
    organization,
  });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(password, salt);

  await user.save();

  const payload = { user: { id: user.id, role: user.role || 'user' } };

  try {
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '24h' });
    res.status(201).json({ 
      success: true, 
      token, 
      user: { name: user.name, email: user.email, organization: user.organization, role: user.role } 
    });
  } catch (err) {
    res.status(500);
    throw new Error('Token generation failed');
  }
});

// @desc    Login user
// @route   POST /api/auth/login
exports.login = asyncHandler(async (req, res) => {
  // Validate input
  const validatedData = loginSchema.parse(req.body);
  const { email, password } = validatedData;

  let user = await User.findOne({ email });
  if (!user) {
    console.log(`Login Failed: User not found for email ${email}`);
    res.status(401);
    throw new Error('Invalid Sovereign Credentials');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    console.log(`Login Failed: Password mismatch for email ${email}`);
    res.status(401);
    throw new Error('Invalid Sovereign Credentials');
  }

  const payload = { user: { id: user.id, role: user.role || 'user' } };

  try {
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '24h' });
    res.json({ 
      success: true, 
      token, 
      user: { name: user.name, email: user.email, organization: user.organization, role: user.role } 
    });
  } catch (err) {
    res.status(500);
    throw new Error('Token generation failed');
  }
});

// @desc    Get current user
// @route   GET /api/auth/me
exports.getMe = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  if (!user) {
    res.status(404);
    throw new Error('Profile not found in sovereign mesh');
  }
  res.json({ success: true, user });
});

// @desc    Update user profile
// @route   PUT /api/auth/update-profile
exports.updateProfile = asyncHandler(async (req, res) => {
  // Validate input
  const validatedData = updateProfileSchema.parse(req.body);
  const { name, organization } = validatedData;

  const updateFields = {};
  if (name) updateFields.name = name;
  if (organization) updateFields.organization = organization;

  const user = await User.findByIdAndUpdate(
    req.user.id,
    { $set: updateFields },
    { new: true }
  ).select('-password');

  res.json({ success: true, user, msg: 'Profile synchronized successfully' });
});

// @desc    Forgot password
// @route   POST /api/auth/forgot-password
exports.forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  if (!email) {
    res.status(400);
    throw new Error('Email is required for recovery protocol');
  }

  const user = await User.findOne({ email });
  // Always return success to prevent user enumeration
  res.json({ success: true, msg: 'If this email exists, a recovery link has been dispatched.' });
});
