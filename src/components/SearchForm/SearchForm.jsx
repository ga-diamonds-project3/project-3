import React, { Component } from 'react';
import style from './SearchForm.css';

export default class SearchForm extends Component {

  render() {

    // clear text in the input field
    /*onClick={this.props.handleClick}*/

    return(
      <div className="search-form">
      <form onSubmit={this.props.handleClick}>
        <input
          type="text"
          placeholder="Artist"
          onChange={event => this.props.handleInputChange(event)}
        />
        <button className='search-button'>Search</button>
      </form>
      </div>
    )
  }
}
