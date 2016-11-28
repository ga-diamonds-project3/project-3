'use strict'
require('dotenv').config({ silent: true });
const express       = require('express');
const logger        = require('morgan');
const path          = require('path');
const cookieParser  = require('cookie-parser');
const bodyParser    = require('body-parser');
const usersRouter   = require('./routes/api/users');
const authRouter    = require('./routes/api/auth');
const jwt           = require('jsonwebtoken');

const app           = express();
const PORT          = process.argv[2] || process.env.port || 3000;

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'dist')));

// This is how we read the cookies sent over from the browser
app.use(cookieParser());

// This will parse our payload from fetch which is sent as a JSON object
app.use(bodyParser.json());

app.use('/api/youtube', require('./routes/youtube.js'))
app.use('/playlist', require('./routes/playlist.js'));
app.use('/itunes', require('./routes/itunes.js'));
app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter)

// error handling middleware
app.use((err, req, res, next) => {
  res.status(500).send('Something broke').end(next);
});

app.listen(PORT, () => console.log('server here! listening on', PORT));
