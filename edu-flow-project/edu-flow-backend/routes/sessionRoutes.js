const express = require('express');
const Session = require('../models/Session');
const router = express.Router();

router.post('/log', async (req, res) => {
  try {
    const session = await Session.create(req.body);
    res.status(201).json(session);
  } catch {
    res.status(400).json({ error: 'Session log failed' });
  }
});

router.get('/user/:userId', async (req, res) => {
  try {
    const sessions = await Session.find({ userId: req.params.userId });
    res.json(sessions);
  } catch {
    res.status(500).json({ error: 'Fetch failed' });
  }
});

module.exports = router;