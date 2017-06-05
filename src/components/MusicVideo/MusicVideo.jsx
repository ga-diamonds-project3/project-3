



import React from 'react';
import YouTube from 'react-youtube'
import './MusicVideo.css';

const opts = {
  height: '100%',
  width: '100%',
}

const MusicVideo = props => (
    <YouTube
      videoId={props.videoId}
      opts={opts}
    />
  );

export default MusicVideo;


// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import './MusicVideo.css';

// class MusicVideo extends Component {

// showVideo() {
//   // console.log(`http://www.youtube.com/embed/${this.props.videoId}?autoplay=0&rel=&modestbranding=1`)
//   let videoSrc = `http://www.youtube.com/embed/${this.props.videoId}?autoplay=0&rel=&modestbranding=1`
//   return(
//     <iframe
//     className="player"
//     allowFullScreen="allowfullscreen"
//     type="text/html"
//     width="800px;"
//     height="420px;"
//     src={videoSrc}
//     frameBorder="0"
//     />
//   )
// }

// render() {
//   return(
//   <div id="video-container">
//     {this.showVideo()}
//   </div>
//     )
//   }
// }

// export default MusicVideo;
