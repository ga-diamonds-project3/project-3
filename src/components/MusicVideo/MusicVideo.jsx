import React from 'react';
import MusicVideoItems from '../MusicVideoItems/MusicVideoItems.jsx';
import './MusicVideo.css';

const MusicVideo = props => {
  if (props.searchTerm) {
    return (
      <MusicVideoItems
        videoId={this.props.muvies.id.videoId}
      />
    );
  } else {
      return (
        <div></div>
        )
    }
}

export default MusicVideo;
