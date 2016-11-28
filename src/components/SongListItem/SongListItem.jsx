import React, { Component } from 'react';
import MusicVideo from '../MusicVideo/MusicVideo.jsx';
import style from './SongListItem.css';

class SongListItem extends Component {

  render(){
    return (
      <div className="songItem">
        {/*<a target="_blank" href={this.props.preview}>*/}
          <div
            className="getVideo"
            onClick={
              ()=>{
                console.log(this.props),
                console.log(this.props.artist),
                console.log(this.props.getMusicVideo(this.props.artist, this.props.name)),
                // setTimeout(this.props.getMusicVideo(this.props.artist, this.props.name),0),
                // this.props.getMusicVideo(),
                document.querySelector('.modal').style.display = "block"
              }
            }
          > &#9658;
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
          <span
            className="close"
            onClick={()=>{document.querySelector('.modal').style.display = "none"}}
          >×
          </span>
          <div className="modal-content">
            <div className="music-video">
              <MusicVideo
                videoId={this.props.videoId}
              />
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default SongListItem;
