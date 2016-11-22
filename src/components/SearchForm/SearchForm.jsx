import React, { Component } from 'react';
import style from './SearchForm.css';

export default class SearchForm extends Component {

  render() {

    // clear text in the input field

    return(
      <div className="search-form">
        <input 
          type="text" 
          placeholder="Artist" 
          onChange={event => this.props.handleInputChange(event)}
        />
        <button onClick={this.props.handleClick}>Search</button>
      </div>
    )
  }
}