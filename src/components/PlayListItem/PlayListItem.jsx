import React, { Component } from 'react';
import style from './PlayListItem.css';

// create a React Component called _App_
class PlayListItem extends Component {

  render(){
    return (
      <div className="favItem">

        <p className="favName">Track: {this.props.name}</p>
        <p className="favAlbum">Album: {this.props.album}</p>
        <p className="favArtist">Artist: {this.props.artist}</p>

        <button
          className="favDelete"
          // onClick={() => this.props.handleAbandonment(this.props.id)}
          >Delete Song
        </button>

      </div>
    );
  }
}

export default PlayListItem;
