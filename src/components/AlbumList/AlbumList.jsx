import React, { Component } from 'react';
import style from './AlbumList.css';
// import AlbumListItem from '../AlbumListItem/AlbumListItem.jsx';

export default class AlbumList extends Component {

  componentWillMount() {
    this.props.getAlbums();
  }

  // uses albumList props to send album and key to AlbumListItem component
  renderAlbums() {
    // use map on this.props.albumList to render
    // <AlbumListItem />
  }

  render() {
    return(
      // itunes album list contnainer
      <div id={style["album-list-container"]}>
        {this.renderAlbums()}
      </div>
    )
  }
}
