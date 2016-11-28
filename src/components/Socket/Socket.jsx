import React, { Component } from 'react';
import './Socket.css';

// initialize a new instance of io
const socket = io();
// import io from 'socket.io-client';
// import io from 'socket.io';

export default class Socket extends Component {
  componentWillMount() {
    // console.log('being mounted');
    this.socketFn();
  }

  socketFn() {
    // console.log('about to setup= socket')
    const socket = io();
    socket.on('server-says-hi', msg => {
      console.log('data on frontend', msg);
      const ul = document.getElementById('messages');
      const li = document.createElement('li');
      li.innerHTML = msg.msg;
      ul.appendChild(li);
    });

    // const i = document.getElementById('m');
    // send input values socket.emit, 2nd argument is the input value
    // socket.emit('chat', i.value);
  }

  handleSubmit(e) {
    // console.log('submit event', e.target);
    // console.log('submit event', e.target.firstChild);
    e.preventDefault();

    const i = document.getElementById('m');
    // li.innerHTML = i.value;
    // ul.appendChild(li);
    socket.emit('chat', i.value);
    i.value = '';
    // console.log('about to setup= socket')
    socket.on('chat', msg => {
      console.log('chat', msg);
      // const ul = document.getElementById('messages');
      // const li = document.createElement('li');
      // li.innerHTML = msg;
      // ul.appendChild(li);
    });
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
