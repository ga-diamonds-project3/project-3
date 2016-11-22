const router = require('express').Router();
const db     = require('../models/playlist');

// get all playlist from specific user
router.get('/:userid', (req, res) => {
  res.send('GET method');
});
// insert one song to the user's playlist
/* need trackid, trackname, artistname, collectionid, and user_id to insert */
router.post('/', (req, res) => {
  // use req.body to post song info
  res.send('POST method');
} );
// remove one song from the user's playlist
/* need user_id and trackid to delete */
router.delete('/:trackid', (req, res) => {
  res.send('DELETE method');
});