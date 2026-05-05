const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required for sovereign identification'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Security protocol requires a password'],
  },
  organization: {
    type: String,
    required: [true, 'Organization link is required'],
  },
  partnerCode: {
    type: String,
    required: false, // Explicitly optional as requested
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', UserSchema);
