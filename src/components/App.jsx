// import the libs we need
import React, { Component } from 'react';
import './normalize.css';
import style from './App.css';

// create a React Component called _App_
export default class App extends Component {
  constructor() {
    super();

    this.state = {
      // states
      artistname : '',
    };
  } 

  // get a list of albums by specific artist
  function getAlbums() {
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

  handleYoutubeFetch () {
    fetch(`http://localhost:3000/api/youtube`)
    .then(r => r.json())
    .then((video) => {
      // Data pulled from Api, will be determined at a later time.
    })
    .catch(error) => console.log('You\'re looking at an Error: ', error)
  }

  render(){
    return (
      <div id="app-container">
        <header>
          <h1>Project 3</h1>
          {/* SEARCH FORM COMPONENT GOES HERE (<SearchForm />)*/}
        </header>

        <main>
          <div class="titles">
            <h2>Albums</h2>
            <h2 class="center-title">Songs</h2>
            <h2>PlayList</h2>
          </div>

          <section>
            {/* ALBUM LIST COMPONENT GOES HERE (<AlbumList />)*/}

            {/* SONG LIST COMPONENT GOES HERE (<SongList />)*/}

            {/* PLAYLIST COMPONENT GOES HERE (<PlayList />)*/}
          </section>
        </main>

        <footer>

        </footer>
      <div>
    );
  }
}
