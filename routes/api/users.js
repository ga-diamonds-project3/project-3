
const express = require('express');
const router = express.Router();
const { createUser } = require('../../models/user');

// handle all the routes

router.post('/', createUser, (req, res) => {
  console.log('in post')
  res.status(200).end();
});

module.exports = router;
