const db = require('../db/db');

// get all playlist (get)
function getPlaylist(req, res, next) {
  console.log('getting playlist ** server');
  db.any(`SELECT *
          FROM playlist
          WHERE user_id = $1;`,
          [req.params.userid]
          )
  .then(results => {
    res.results = results;
    next();
  })
  .catch(err => next(err));
}

save to playlist (post)
function saveOneSongToPlaylist(req, res, next) {
  db.none(`INSERT INTO playlist (trackid, trackname, artistname, collectionid, user_id)
           VALUES ($1, $2, $3, $4, $5)`,
          [/* either req.body or req.params */])
  .then(results => {
    // returns nothing
    res.results = results;
    next();
  })
  .catch(err => next(err));
}

delete a song in the playlist(delete)
function deleteOneSongFromPlaylist(req, res, next) {
  db.result(`DELETE FROM playlist
             WHERE user_id = $1 AND trackid = $2`,
             [/* req.body or req.params */] )
  .then(results => {
    // returns null
    res.results = results;
    next();
  })
  .catch(err => next(err);
}

module.exports = {
  getPlaylist,
  // saveOneSongToPlaylist,
  // deleteOneSongFromPlaylist,
};
