const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('../../lib/passportStrategy');

// initialize passport
router.use(passport.initialize());

// handle all the routes
router.post('/', passport.authenticate('local', { session: false }), (req, res) => {
  const token = jwt.sign(req.user, process.env.JWT_SECRET, {
    expiresIn: 86400 // expires in 24 hours
  });
  res.json({ token });
});

module.exports = router;
