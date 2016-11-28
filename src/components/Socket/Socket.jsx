import React, { Component } from 'react';
import './Socket.css';
// import io from 'socket.io-client';
// import io from 'socket.io';

export default class Socket extends Component {
  componentWillMount() {
    // console.log('being mounted');
    this.socketFn();
  }

  socketFn() {
    // console.log('about to setup= socket')
    const socket = io('http://localhost:3000');
    // console.log(socket)
    socket.on('server-says-hi', socket => {
      console.log('a user connected on frontend');
      // socket.emit('msg', {msg: 'tacos at 12!'});
    });

  }

  render() {
    return(
      <div>
        <ul id="messages"></ul>
        
        <form type="submit">
          <input id="m"/>
          <button onClick={event => this.handleSubmit(event)}>Send</button>
        </form>
      </div>
    )
  }
}