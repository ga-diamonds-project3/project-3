const router = require('express').Router();
const { getPlaylist, saveOneSongToPlaylist, deleteOneSongFromPlaylist } = require('../models/playlist.js');

// get all playlist from specific user
router.get('/:userid', getPlaylist, (req, res) => {
  res.json(res.results);
});
// insert one song to the user's playlist
/* need trackid, trackname, artistname, collectionid, and user_id to insert */
router.post('/', saveOneSongToPlaylist, (req, res) => {
  // use req.body to post song info
  res.json(res.results);
});
// remove one song from the user's playlist
/* need user_id and trackid to delete */
router.delete('/:trackid', deleteOneSongFromPlaylist, (req, res) => {
  res.json(res.results);
});

module.exports = router;
