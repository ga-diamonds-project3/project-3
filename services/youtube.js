const fetch = require('node-fetch');
const API_URL = 'https://www.googleapis.com/youtube/v3/search?';
const API_KEY = process.env.YT_API_KEY;

function findMusicVideo(req, res, next) {
  fetch(`${API_URL}q=${req.params.artist}&part=snippet&maxResults=1&key=${API_KEY}`)
  .then(r => r.json())
  .then((video) => {
    console.log(video);
    res.music = video;
    next();
  })
  .catch((err) => {
    console.log(err);
    res.err = err;
    next();
  });
}

module.exports = { findMusicVideo };
