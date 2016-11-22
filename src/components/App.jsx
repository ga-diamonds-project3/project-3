// import the libs we need
import React, { Component } from 'react';
import PlayList from './PlayList/PlayList.jsx';
import './normalize.css';
import style from './App.css';

handleYoutubeFetch () {
  fetch(`http://localhost:3000/api/youtube`)
  .then(r => r.json())
  .then((video) => {
    // Data pulled from Api, will be determined at a later time.
  })
  .catch(error) => console.log('You\'re looking at an Error: ', error)
}

// create a React Component called _App_
class App extends Component {
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

export default App;
