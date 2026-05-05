const SyncJob = require('../models/SyncJob');
const SyncContract = require('../models/SyncContract');
const asyncHandler = require('express-async-handler');

// @desc    Get all sync jobs for current user (with pagination)
// @route   GET /api/sync/jobs
// @access  Private
exports.getSyncJobs = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const query = { user: req.user.id };

  // Optional search filter
  if (req.query.search) {
    query.$or = [
      { name: { $regex: req.query.search, $options: 'i' } },
      { source: { $regex: req.query.search, $options: 'i' } },
      { target: { $regex: req.query.search, $options: 'i' } },
      { status: { $regex: req.query.search, $options: 'i' } },
    ];
  }

  // Filter by status if provided
  if (req.query.status && req.query.status !== 'All') {
    query.status = req.query.status;
  }

  const total = await SyncJob.countDocuments(query);
  const jobs = await SyncJob.find(query)
    .sort({ timestamp: -1 })
    .skip(skip)
    .limit(limit);

  res.json({
    success: true,
    count: jobs.length,
    total,
    pages: Math.ceil(total / limit),
    currentPage: page,
    data: jobs,
  });
});

// @desc    Get all sync contracts for current user
// @route   GET /api/sync/contracts
// @access  Private
exports.getSyncContracts = asyncHandler(async (req, res) => {
  const contracts = await SyncContract.find({ user: req.user.id }).sort({ createdAt: -1 });
  res.json({
    success: true,
    count: contracts.length,
    data: contracts,
  });
});

// @desc    Create a new sync job (Internal/Diagnostic)
// @route   POST /api/sync/jobs
// @access  Private
exports.createSyncJob = asyncHandler(async (req, res) => {
  const job = await SyncJob.create({
    ...req.body,
    user: req.user.id,
  });
  res.status(201).json({ success: true, data: job });
});

// @desc    Create a new sync contract
// @route   POST /api/sync/contracts
// @access  Private
exports.createSyncContract = asyncHandler(async (req, res) => {
  const contract = await SyncContract.create({
    ...req.body,
    user: req.user.id,
  });
  res.status(201).json({ success: true, data: contract });
});
