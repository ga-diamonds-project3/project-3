import React, { Component } from 'react';
import './Socket.css';

export default class Socket extends Component {
  componentWillMount() {
    this.props.socket();
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