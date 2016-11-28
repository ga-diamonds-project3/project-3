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
    // this.socketFn();
  }

  socketFn() {
    // console.log('about to setup= socket')
    const socket = io();
    // console.log(socket)
    socket.on('server-says-hi', socket => {
      console.log('a user connected on frontend');
    });

    const i = document.getElementById('m');
    // send input values socket.emit, 2nd argument is the input value
    socket.emit('chat', i.value);

  }

  handleSubmit(e) {
    console.log('submit event', e.target);
    // console.log('submit event', e.target.firstChild);
    e.preventDefault();

    // console.log('about to setup= socket')
    const socket = io();
    // console.log(socket)
    socket.on('server-says-hi', msg => {
      console.log('data on frontend', msg);
    });
    const i = document.getElementById('m');
    socket.emit('chat', i.value);
  }

  handleInputChange(e) {
    // console.log('input value:', e);
    // console.log(e.target.value)
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
