import React from 'react';
import style from './AlbumListItem.css';

const AlbumListItem = props => {
  <div className={style["album-list-item"]}  key={props.index}>
    <img src={props.artworkUrl100} alt="Album Art" />
  </div>
};

export default AlbumListItem;