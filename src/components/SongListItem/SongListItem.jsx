import React, { Component } from 'react';
import style from './SongListItem.css';


const handleSubmit = (event) => {
  event.preventDefault();

  this.props.getMusicVideo(
    event.target.name.value,
    event.target.artist.value
    );
  return false;
  };

class SongListItem extends Component {

  render(){
    console.log(this.props.artist)
    console.log(this.props.name)
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
        <form onSubmit={handleSubmit}>
            <input
              type="hidden"
              name="artist"
              value={this.props.artist}
              />
            <input
              type="hidden"
               name="name"
              value={this.props.name}
              />
            <button
              onClick={this.props.getMusicVideo()}
            >Play Song</button>
          </form>
      </div>
    );
  }
}

export default SongListItem;
