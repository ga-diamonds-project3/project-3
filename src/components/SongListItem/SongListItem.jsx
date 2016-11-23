import React, { Component } from 'react';
import style from './SongListItem.css';

// create a React Component called _App_
class SongListItem extends Component {

  render(){
    return (
      <div className="songItem">

        <p className="songName">Track: {this.props.name}</p>
        <p className="songAlbum">Album: {this.props.album}</p>
        <p className="songArtist">Artist: {this.props.artist}</p>

        <button
          className="addToPlaylist"
          // onClick={() => this.props.handleAbandonment(this.props.id)}
          >Add to playlist
        </button>

      </div>
    );
  }
}

export default SongListItem;
