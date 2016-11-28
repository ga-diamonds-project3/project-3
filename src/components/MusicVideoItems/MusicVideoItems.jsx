import React, { Component } from 'react';
import YouTube from 'react-youtube'
import './MusicVideoItems.css'

const opts = {
  height: '350',
  width: '580',
}

class MusicVideoItems extends Component {
    render() {
        return(
          console.log('music video item loaded'),
          <YouTube
            videoId={props.videoId}
            opts={opts}
          />
        )
    }
}

export default MusicVideoItems;
