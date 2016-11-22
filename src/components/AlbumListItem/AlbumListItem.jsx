import React, { Component } from 'react';
import style from './AlbumListItem.css';

/*const AlbumListItem = props => {
  <div className={style["album-list-item"]}  key={props.index}>
    <img src={props.artworkUrl100} alt="Album Art" />
  </div>
};*/

// export default AlbumListItem;

export default class AlbumListItem extends Component {
  render() {
    return(
      <div className="album-list-item"  key={this.props.index}>
        <p>{this.props.artistName}</p>
        <p>{this.props.collectionName}</p>
        <p>{this.props.trackCount}</p>
        <img src={this.props.artworkUrl100} alt="Album Art" />
      </div>
    )
  }
}