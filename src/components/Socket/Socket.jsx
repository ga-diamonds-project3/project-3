import React, { Component } from 'react';
import './Socket.css';

export default class Socket extends Component {
  constructor() {
    super();

    this.state = {
      msg : '',
    }
  }

  componentWillMount() {
    this.props.socket();
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
