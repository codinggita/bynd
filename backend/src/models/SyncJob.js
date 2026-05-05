const mongoose = require('mongoose');

const SyncJobSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: [true, 'Job name is required'],
  },
  status: {
    type: String,
    enum: ['Success', 'Failed', 'Partial'],
    default: 'Success',
  },
  records: {
    type: Number,
    default: 0,
  },
  duration: {
    type: String,
    default: '0ms',
  },
  source: {
    type: String,
    required: true,
  },
  target: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('SyncJob', SyncJobSchema);
