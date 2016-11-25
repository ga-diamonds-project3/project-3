import React, { Component } from 'react';
import style from './AlbumList.css';
import AlbumListItem from '../AlbumListItem/AlbumListItem.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
export default class AlbumList extends Component {

 // componentWillMount() {
 //    this.props.getSongs();
 //  }

  // uses albumList props to send album and key to AlbumListItem component
  renderAlbums() {
    // use map on this.props.albumList to render
    return this.props.albumList.map((album, index) =>
      <article
        key={index}
        className="albums-item"
        onClick={()=>this.props.changeAlbumSelection(index)}
      >
        <AlbumListItem
          key={index}
          artistName={album.artistName}
          collectionName={album.collectionName}
          artworkUrl100={album.artworkUrl100}
          trackCount={album.trackCount}
        />
      </article>
    )
  }

  render() {
    return(
      // itunes album list contnainer
      // Add react transition animation to the list
      <div className="albums-container">
      <ReactCSSTransitionGroup transitionName="album" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
        {this.renderAlbums()}
      </ReactCSSTransitionGroup>
      </div>
    )
  }
}
