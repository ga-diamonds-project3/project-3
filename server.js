'use strict'
require('dotenv').config({ silent: true });
const express    = require('express');
const logger     = require('morgan');
const path       = require('path');
const bodyParser = require('body-parser');
const app        = express();
const PORT       = process.argv[2] || process.env.port || 3000;

// socket.io
const http       = require('http').Server(app);
const io         = require('socket.io')(http);

io.on('connection', socket => {
  console.log('a user connected');
  // receive msg from client through socket 'server-chat'
  socket.on('server-chat', msg => {
    console.log('chat: ' + msg);
    // broadcast msg received to all who are listening to socket 'chatroom'
    socket.broadcast.emit('chatroom', {msg : msg});
  });

  socket.on('disconnect', () => console.log('user disconnected'));
});

http.listen(PORT, () => console.log('listening on', PORT));

app.use(logger('dev'));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api/youtube', require('./routes/youtube.js'))
app.use('/playlist', require('./routes/playlist.js'));
app.use('/itunes', require('./routes/itunes.js'));

// error handling middleware
app.use((err, req, res, next) => {
  res.status(500).send('Something broke').end(next);
});

// app.listen(PORT, () => console.log('server here! listening on', PORT));
