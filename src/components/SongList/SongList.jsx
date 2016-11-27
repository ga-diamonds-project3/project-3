import React, { Component } from 'react';
import SongListItem from '../SongListItem/SongListItem.jsx';
import MusicVideo from '../MusicVideo/MusicVideo.jsx';
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
          getMusicVideo={()=>this.props.getMusicVideo.bind(song)}
          key={i}
        />
    );
  }

  render(){
    // console.log(this.props);
    // Add react transition animation to the list
    return (
    <div>
      <article className="song-container">
       <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
        {this.renderSongList()}
      </ReactCSSTransitionGroup>
      </article>
      <MusicVideo
        musicVideo={this.props.musicVideo}
      />
    </div>

    );
  }
}


export default SongList;

