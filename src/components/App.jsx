// import the libs we need
import React, { Component } from 'react';
import PlayList from './PlayList/PlayList.jsx';
import AlbumList from './AlbumList/AlbumList.jsx';
import './normalize.css';
import style from './App.css';


// create a React Component called _App_
class App extends Component {
  constructor() {
    super();

    this.state = {
      // states
      artistname : '',
      albumList  : [],
      playlist   : [],
    };
  }

  // get a list of albums by specific artist
  getAlbums() {
    // assuming that artist name is updated to state by input handler
    const itunesURL = 'https://itunes.apple.com/search?entity=album&term=${this.state.artistname}';

    fetch(itunesURL)
    .then(r => r.json())
    .then( data => {
      // console.log('getAlbums fetch', data);
      /* call render function */
    })
    .catch(err => console.log('getAlbums error', err));
  }

  // handleYoutubeFetch () {
  //   fetch(`http://localhost:3000/api/youtube`)
  //   .then(r => r.json())
  //   .then((video) => {
  //     // Data pulled from Api, will be determined at a later time.
  //   })
  //   .catch(error) => console.log('You\'re looking at an Error: ', error)
  // }

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

  render(){
    return (
      <div id="app-container">
        <header>
          <h1>Project 3</h1>
          {/* SEARCH FORM COMPONENT GOES HERE (<SearchForm />)*/}
        </header>

        <main>
          <div className="titles">
            <h2>Albums</h2>
            <h2 className="center-title">Songs</h2>
            <h2>Playlist</h2>
          </div>

          <section>
            {/* ALBUM LIST COMPONENT GOES HERE (<AlbumList />)*/}
            <AlbumList
              getAlbums={this.getAlbums.bind(this)}
              albumList={this.state.albumList}
            />

            {/* SONG LIST COMPONENT GOES HERE (<SongList />)*/}

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
