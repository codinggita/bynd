const mongoose = require('mongoose');

const SyncContractSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: [true, 'Contract name is required'],
  },
  status: {
    type: String,
    enum: ['Active', 'Paused', 'Draft'],
    default: 'Active',
  },
  sourceNode: {
    type: String,
    required: true,
  },
  targetNode: {
    type: String,
    required: true,
  },
  frequency: {
    type: String,
    default: 'Real-time',
  },
  lastSync: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('SyncContract', SyncContractSchema);
