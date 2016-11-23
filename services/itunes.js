const fetch = require('node-fetch');

function getAlbumByArtist(req, res, next) {
  // console.log(req.parms)
  // assuming that artist name is updated to state by input handler
  const itunesURL = `https://itunes.apple.com/search?entity=album&term=${req.params.artist}`;
  fetch(itunesURL)
  .then(r => r.json())
  .then(results => {
    res.albums = results;
    next();
  })
  .catch(err => next(err))
}

function getSongs(req, res, next) {
  const itunesSongsURL = `https://itunes.apple.com/lookup?id=${req.params.albumID}&entity=song`;
  // console.log('HIT', itunesSongsURL);
  fetch(itunesSongsURL)
  .then(r => r.json())
  .then(results => {
    res.songs = results;
    next();
  })
  .catch(err => next(err));
}

module.exports = {
  getAlbumByArtist,
  getSongs,
};