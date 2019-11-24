const express = require('express');
const Job = require('../models/Job');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    next(error);
  }
});

router.get('/:jobId', async (req, res, next) => {
  const { jobId } = req.params;
  try {
    const job = await Job.findById(jobId);
    if (job) {
      res.json(job);
    } else {
      res.json({});
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
