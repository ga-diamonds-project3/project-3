const router = require('express').Router();
const itunes = require('../services/itunes');


router.get('/songs/:albumID', itunes.getSongs, (req, res) => {
  res.json(res.songs);
});

router.get('/:artist', itunes.getAlbumByArtist, (req,res) => {
  res.json(res.albums);
});

module.exports = router;