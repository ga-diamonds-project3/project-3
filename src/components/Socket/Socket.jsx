import React, { Component } from 'react';
import './Socket.css';
// import io from 'socket.io-client';
// import io from 'socket.io';

export default class Socket extends Component {
  constructor() {
    super();

    this.state = {
      msg : '',
    }
  }

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

  handleSubmit(e) {
    console.log('submit event', e.target);
    console.log('submit event', e.target.firstChild);
    e.preventDefault();
  }

  handleInputChange(e) {
    // console.log('input value:', e);
    console.log(e.target.value)
    this.setState({
      msg: e.target.value,
    });
  }

  render() {
    return(
      <div>
        <ul id="messages"></ul>

        <form onSubmit={event => this.handleSubmit(event)}>
          <input id="m" onChange={event => this.handleInputChange(event)}/>
          <button>Send</button>
        </form>
      </div>
    )
  }
}
