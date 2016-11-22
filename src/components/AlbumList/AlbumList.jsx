import React, { Component } from 'react';
import style from './AlbumList.css';
import AlbumListItem from '../AlbumListItem/AlbumListItem.jsx';

export default class AlbumList extends Component {

  // componentWillMount() {
  //   this.props.getAlbums();
  // }

  // uses albumList props to send album and key to AlbumListItem component
  renderAlbums() {
    // use map on this.props.albumList to render
    return this.props.albumList.map((album, index) => 
      <AlbumListItem 
        key={index}
        artistName={album.artistName}
        collectionName={album.collectionName}
        artworkUrl100={album.artworkUrl100}
        trackCount={album.trackCount}
      />
    )
  }

  render() {
    return(
      // itunes album list contnainer
      <div id="album-list-container">
        {this.renderAlbums()}
      </div>
    )
  }
}
