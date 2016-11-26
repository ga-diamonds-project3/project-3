import React, { Component } from 'react';
import SongListItem from '../SongListItem/SongListItem.jsx';
import MusicVideo from '../MusicVideo/MusicVideo.jsx';
import style from './SongList.css';

class SongList extends Component {

  // This function will create a PlayListItem for each song saved to the playlist database

  renderSongList() {
    return this.props.songList.map((song, i) =>
      <SongListItem
        // handleLikePuppy={this.props.handleLikePuppy}
        // handleAbandonment={this.props.handleAbandonment}
        getMusicVideo={this.props.getMusicVideo}
        name={song.trackName}
        album={song.collectionName}
        artist={song.artistName}
        key={i}
      />
    );
  }

  render(){
    // console.log(this.props);
    return (
      <div>
        <article
        className="song-container"
        >
          {this.renderSongList()}
        </article>
        <div>

          {/*<SongListItem
            getMusicVideo={this.props.getMusicVideo}
           />*/}
        </div>
        <MusicVideo
          musicVideo={this.props.musicVideo}
        />
      </div>
    );
  }
}


export default SongList;

