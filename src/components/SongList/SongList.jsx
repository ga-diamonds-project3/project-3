import React, { Component } from 'react';
import SongListItem from '../SongListItem/SongListItem.jsx';
import style from './SongList.css';

class SongList extends Component {

  componentWillMount() {
    this.props.getSongs();
  }


  // This function will create a PlayListItem for each song saved to the playlist database
  renderSongList() {
    return this.props.songList.map((song, i) =>
      <SongListItem
        // handleLikePuppy={this.props.handleLikePuppy}
        // handleAbandonment={this.props.handleAbandonment}
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
      <article className="song-container">
        {this.renderSongList()}
      </article>
    );
  }
}

export default SongList;
