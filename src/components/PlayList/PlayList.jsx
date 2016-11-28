import React, { Component } from 'react';
import PlayListItem from '../PlayListItem/PlayListItem.jsx';
import style from './PlayList.css';

class PlayList extends Component {

  componentWillMount() {
    this.props.getPlayList();
  }


  // This function will create a PlayListItem for each song saved to the playlist database
  renderPlayList() {
    return this.props.playlist.map((song, i) =>
      <PlayListItem
        // handleLikePuppy={this.props.handleLikePuppy}
        // handleAbandonment={this.props.handleAbandonment}
        key={i}
        name={song.trackname}
        album={song.collectionname}
        artist={song.artistname}
        trackid={song.trackid}
        handleDelete={this.props.removeFromPlaylist}
        getMusicVideo={this.props.getMusicVideo}
        videoId={this.props.videoId}
      />
    );
  }

  render(){
    // console.log(this.props);
    return (
      <article className="fav-container">
        {this.renderPlayList()}
      </article>
    );
  }
}

export default PlayList;
