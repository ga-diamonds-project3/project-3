import React from 'react';
import MusicVideoItems from '../MusicVideoItems/MusicVideoItems.jsx';
import './MusicVideo.css';

const MusicVideo = props => {
  if (props.songList) {
    return (
      <MusicVideoItems
        videoId={this.props.musicVideo.id.videoId}
      />
    );
  } else {
      return (
        <div></div>
        )
    }
}

export default MusicVideo;
