import React, { Component } from 'react';
import style from './SongListItem.css';

// create a React Component called _App_
class SongListItem extends Component {

  render(){
    return (
      <div className="songItem">

        <div className="getVideo"> &#9658;
          {/*onClick={() => this.props.handleAbandonment(this.props.id)}*/}
        </div>

        <div className="addSong">+
          {/*onClick={() => this.props.handleAbandonment(this.props.id)}*/}
        </div>

        <p className="songName">{this.props.name}</p>
        {/*<p className="songAlbum">Album: {this.props.album}</p>*/}
        {/*<p className="songArtist">Artist: {this.props.artist}</p>*/}


      </div>
    );
  }
}

export default SongListItem;
