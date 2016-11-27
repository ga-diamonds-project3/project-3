import React, { Component } from 'react';
import style from './SongListItem.css';

// create a React Component called _App_
class SongListItem extends Component {

  render(){
    return (
      <div className="songItem">
        {/*<a target="_blank" href={this.props.preview}>*/}
          <div
            className="getVideo"
            onClick={()=>{document.querySelector('.modal').style.display = "block"}}
          > &#9658;
            {/*onClick={() => this.props.handleAbandonment(this.props.id)}*/}
          </div>
        {/*</a>*/}
        <div className="addSong"
          onClick={this.props.changeSongSelected}
        >+
        </div>

        <p className="songName">{this.props.name}</p>
        {/*<p className="songAlbum">Album: {this.props.album}</p>*/}
        {/*<p className="songArtist">Artist: {this.props.artist}</p>*/}

        <div className="modal">
          <div className="modal-content">
          <span
            className="close"
            onClick={()=>{document.querySelector('.modal').style.display = "none"}}
          >×</span>
          </div>
        </div>
      </div>
    );
  }
}

export default SongListItem;
