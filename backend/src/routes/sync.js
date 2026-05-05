const express = require('express');
const router = express.Router();
const { 
  getSyncJobs, 
  getSyncContracts, 
  createSyncJob, 
  createSyncContract 
} = require('../controllers/syncController');
const auth = require('../middleware/authMiddleware');

// All routes here are protected by the Sovereign Auth protocol
router.use(auth);

// @route   GET /api/sync/jobs
router.route('/jobs')
  .get(getSyncJobs)
  .post(createSyncJob);

// @route   GET /api/sync/contracts
router.route('/contracts')
  .get(getSyncContracts)
  .post(createSyncContract);

module.exports = router;
