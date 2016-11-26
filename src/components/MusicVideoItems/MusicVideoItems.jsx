import React from 'react';
import YouTube from 'react-youtube'
import './MusicVideoItems.css'

const opts = {
  height: '100',
  width: '200',
}

const MusicVideoItems = props => (
    <YouTube
      videoId={props.videoId}
      opts={opts}
    />
  );

export default MusicVideoItems;
