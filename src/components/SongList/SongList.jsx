import React, { Component } from 'react';
import SongListItem from '../SongListItem/SongListItem.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import style from './SongList.css';

class SongList extends Component {


  // This function will create a PlayListItem for each song saved to the playlist database
  renderSongList() {
    return this.props.songList.map((song, i) =>
      <SongListItem
        // handleLikePuppy={this.props.handleLikePuppy}
        // handleAbandonment={this.props.handleAbandonment}
        name={song.trackName}
        album={song.collectionName}
        artist={song.artistName}
        preview={song.previewUrl}
        changeSongSelected={()=>this.props.changeSongSelected(i)}
        key={i}
      />
    );
  }

  render(){
    // console.log(this.props);
    // Add react transition animation to the list
    return (
      <article className="song-container">
<<<<<<< HEAD
      <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
=======
       <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
>>>>>>> 2f50f5c9fc2f81b052b11e2cdb5e9f23cd18dac2
        {this.renderSongList()}
      </ReactCSSTransitionGroup>
      </article>
    );
  }
}

export default SongList;
