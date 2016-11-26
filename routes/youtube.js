const express = require('express');
const router = express.Router();
const { findMusicVideo } = require('../services/youtube.js');

router.get('/:artist', findMusicVideo, (req, res) => {
    res.json(res.music);
  });

module.exports = router;
