import React, { Component } from 'react';
import MusicVideo from '../MusicVideo/MusicVideo.jsx';
import style from './PlayListItem.css';

// create a React Component called _App_
class PlayListItem extends Component {

  render(){
    return (
      <div className="favItem">
        <a target="_blank" href={this.props.preview}>
          <div
            className="getVideo"
            onClick={
              ()=>{
                console.log(this.props.name),
                console.log(this.props.artist),
                console.log(this.props.getMusicVideo(this.props.artist, this.props.name)),
                // setTimeout(this.props.getMusicVideo(this.props.artist, this.props.name),0),
                // this.props.getMusicVideo(),
                document.querySelector('.modalPL').style.display = "block"
              }
            }
          >&#9658;
          </div>
        </a>
         <div className="deleteSong"
           data-trackid={this.props.trackid}
          // onClick={this.props.changeSongSelected}
          onClick={this.props.handleDelete}
        >&#215;
        </div>

        <p className="favTrack">{this.props.name}</p>
        <p className="favAlbum">{this.props.album}</p>
        <p className="favArtist">by: {this.props.artist}</p>

        <div className="modalPL">
          <span
            className="closePL"
            onClick={()=>{document.querySelector('.modalPL').style.display = "none"}}
          >×
          </span>
          <div className="modal-contentPL">
            <div className="music-videoPL">
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

export default PlayListItem;
