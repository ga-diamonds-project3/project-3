// const db = require('../db/db');
const pg       = require('pg-promise')({});

const pgConfig = {  host:     process.env.PG_HOST,
                    port:     process.env.PG_PORT,
                    database: process.env.PG_DATABASE,
                    user:     process.env.PG_USER,
                    password: process.env.PG_PASSWORD };

const db       = pg(pgConfig);

// get all playlist (get)
function getPlaylist(req, res, next) {
  // console.log('getting playlist ** server');
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

// save to playlist (post)
function saveOneSongToPlaylist(req, res, next) {
  console.log('req.body: ', req.body)
  db.none(`INSERT INTO playlist (trackid, trackname, artistid, artistname, collectionid, collectionname, youtube, user_id)
           VALUES ($/trackid/, $/trackname/, $/artistid/, $/artistname/, $/collectionid/, $/collectionname/, $/youtube/, $/user_id/);`,
          req.body)
  .then(results => {
    // returns nothing
    res.results = results;
    next();
  })
  .catch(err => next(err));
}

// delete a song in the playlist(delete)
function deleteOneSongFromPlaylist(req, res, next) {
  console.log('HIT ***')
  // db.result(`DELETE FROM playlist
  //            WHERE user_id = $1 AND trackid = $2`,
  db.result(`DELETE FROM playlist
             WHERE trackid = $1`,
             [req.params.trackid] )
  .then(results => {
    // returns null
    res.results = results;
    next();
  })
  .catch(err => next(err));
}

module.exports = {
  getPlaylist,
  saveOneSongToPlaylist,
  deleteOneSongFromPlaylist,
};
