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
      <div className="albumItem"  key={this.props.index}>
        <img className="album-img" src={this.props.artworkUrl100} alt="Album Art" />
        <div className="albumInfo">
          <p className="alb">{this.props.collectionName}</p>
          <p className="art">{this.props.artistName}</p>
        </div>
      </div>
    )
  }
}
