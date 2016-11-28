import React, { Component } from 'react';
import MusicVideo from '../MusicVideo/MusicVideo.jsx';
// import YouTube from 'react-youtube'
import style from './SongListItem.css';

// const handleSubmit = (event) => {
//   event.preventDefault();

//   this.props.getMusicVideo(
//     event.target.name.value,
//     event.target.artist.value
//     );
//   return false;
//   };

class SongListItem extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     videoId : '',
  //   }
  // }

  // getMusicVideo(a, b) {
  //   // assuming that album is updated to state by click handler
  //   fetch(`/api/youtube/${a}-${b}`)
  //   .then(r => r.json())
  //   .then(data => {
  //     console.log('getMusicVideo retuns', data.items[0].id.videoId)
  //     // this.fetchYoutube(data.items[0].id.videoId);
  //     this.setState({
  //       videoId : data.items[0].id.videoId,
  //     })
  //   })
  //   .catch(err => console.log('musicvideo error', err));
  // }


  render(){
    return (
      <div className="songItem">
        <p className="songName">Track: {this.props.name}</p>
        <p className="songAlbum">Album: {this.props.album}</p>
        <p className="songArtist">Artist: {this.props.artist}</p>
        {/*<a target="_blank" href={this.props.preview}>*/}
        {/*<form onClick={this.props.getMusicVideo}>*/}
          <div
            className="getVideo"
            onClick={
              ()=>{
                console.log(this.props.name),
                console.log(this.props.artist),
                console.log(this.props.getMusicVideo(this.props.artist, this.props.name)),
                // setTimeout(this.props.getMusicVideo(this.props.artist, this.props.name),0),
                // this.props.getMusicVideo(),
                document.querySelector('.modal').style.display = "block"
              }
            }
          > &#9658;
            {/*onClick={() => this.props.handleAbandonment(this.props.id)}*/}
            {/* <input
              type="hidden"
              name="artist"
              value={this.props.artist}
              />
            <input
              type="hidden"
              name="name"
              value={this.props.name}
              />*/}
          </div>
         {/*</form>*/}
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
            {/*<h4 className="placeholder-text">YOUTUBE VIDEO GOES HERE</h4>*/}
            {/*<button
            onClick={this.props.getMusicVideo.bind(this)}
              >Play Music</button>*/}
              <div
                className="video"
                >
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
