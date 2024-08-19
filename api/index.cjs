const express = require('express');
const router = express.Router();

router.use('/players', require('./players.cjs'));

router.use('/chess-clubs', require('./chess-clubs.cjs'));

router.use('/venues', require('./venues.cjs'));

module.exports = router;