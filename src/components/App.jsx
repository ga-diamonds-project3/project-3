// import the libs we need
import React, { Component } from 'react';
import PlayList from './PlayList/PlayList.jsx';
import AlbumList from './AlbumList/AlbumList.jsx';
import SongList from './SongList/SongList.jsx';
import SearchForm from './SearchForm/SearchForm.jsx';

import './normalize.css';
import style from './App.css';

// create a React Component called _App_
class App extends Component {
  constructor() {
    super();

    this.state = {
      // states
      artistname    : '',
      searchArtist  : '',
      albumList     : [],
      playlist      : [],
      songList      : [],

    };
  }

  // get a list of albums by specific artist
  getAlbums() {

    // assuming that artist name is updated to state by input handler
    fetch(`/itunes/${this.state.searchArtist}`)
    .then(r => r.json())
    .then(data => {
      const filterAlbums = data.results.filter( el => {
        return el.trackCount !== 1;
      })
      // console.log('after filtered', filterAlbums.length);
      this.setState({
        albumList: filterAlbums,
      });
    })
    .catch(err => console.log('itunes fetch error', err));
  }
  // udpate searchArtist state on every change at input search
  handleInputChange(e) {
    // console.log('input value:', e);
    this.setState({
      searchArtist: e.target.value,
    });

  }

  changeAlbumSelection(num) {
    this.setState({
      albumSelected: this.state.albumList[num].collectionId,
    });
    console.log(this.state.albumSelected)
  }

  // get a list of songs by specific album
  getSongs() {
    console.log('HIT')
    // assuming that album is updated to state by click handler
    fetch(`/itunes/songs/${this.state.albumSelected}`)
    .then(r => r.json())
    .then(data => {
      // console.log(this.state.searchArtist);
      // console.log(data.results.length);
      // console.log('before filtered ', data.results.length);
      // const filterSongs = data.results.filter( el => {
      //   return el.collectionId === 363542298;
      // })
      // console.log('after filtered', filterSongs.length);
      this.setState({
        songList: data.results,
      });
      console.log(this.state.songList)
    })
    .catch(err => console.log('getsongs error', err));
  }
  // function that will hit our database API and set an array of data to the playlist state
  getPlayList() {
    fetch('/playlist/1')
    .then(r => r.json())
    .then((songs) => {
      this.setState({

        playlist: songs
      });
    })
    .catch(err => console.log(err));
  }

  // handleDelete(trackid) {
  //   fetch(`/api/puppies/${id}`, {
  //     method: 'DELETE'
  //   })
  //   .then(() => {
  //     const playlist = this.state.playlist.filter((track) => {
  //       return track.trackid !== trackid;
  //     })
  //     this.setState({ playlist: playlist })
  //   })
  //   .catch(err => console.log(err));
  // }

  // handleYoutubeFetch () {
  //   fetch(`http://localhost:3000/api/youtube`)
  //   .then(r => r.json())
  //   .then((video) => {
  //     // Data pulled from Api, will be determined at a later time.
  //   })
  //   .catch(error) => console.log('You\'re looking at an Error: ', error)
  // }


  render(){
    return (
      <div id="app-container">
        <header>
          <h1>Project 3</h1>
          {/* SEARCH FORM COMPONENT GOES HERE (<SearchForm />)*/}
          <SearchForm
            handleInputChange={this.handleInputChange.bind(this)}
            handleClick={() => this.getAlbums()}
          />
        </header>

        <main>
          <div className="titles">
            <h2>Albums</h2>
            <h2 className="center-title">Songs</h2>
            <h2>PlayList</h2>
          </div>

          <section>
            {/* ALBUM LIST COMPONENT GOES HERE (<AlbumList />)*/}
            <AlbumList
              albumList={this.state.albumList}
              changeAlbumSelection={this.changeAlbumSelection.bind(this)}
              getSongs={this.getSongs.bind(this)}
            />

            {/* SONG LIST COMPONENT GOES HERE (<SongList />)*/}
            <SongList
              songList={this.state.songList}
            />

          {/* PLAYLIST COMPONENT GOES HERE (<PlayList />)*/}
            <PlayList
              getPlayList={this.getPlayList.bind(this)}
              playlist={this.state.playlist}
              // handleDelete={this.handleDelete.bind(this)}
             />
          </section>
        </main>

        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
