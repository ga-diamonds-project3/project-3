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
      albumSelected : '',
      songSelected  : '',
      albumList     : [],
      playlist      : [],
      songList      : [],
      musicVideo    : [],
      songForDB     : [],
    };
  }

  // udpate searchArtist state on every change at input search
  handleInputChange(e) {
    // console.log('input value:', e);
    this.setState({
      searchArtist: e.target.value,
    });

  }

  // get a list of albums by specific artist
  getAlbums(e) {
    // prevent form from redirecting to new page
    e.preventDefault();
    // clear input when user searches an artist
    e.target.reset();

    // assuming that artist name is updated to state by input handler
    fetch(`/itunes/${this.state.searchArtist}`)
    .then(r => r.json())
    .then(data => {
      const filterAlbums = data.results.filter( el => {
        return el.trackCount !== 1;
      })
      console.log('album list', filterAlbums);
      this.setState({
        albumList: filterAlbums,
      });
    })
    .catch(err => console.log('itunes fetch error', err));
  }

  // on album click the albumSelected state will update to the id of the album
  // selected the fire the getSongs function
  changeAlbumSelection(num) {
    // console.log('in changeAlbumSelection')
    this.setState({
      albumSelected: this.state.albumList[num].collectionId,
    });
    setTimeout(()=>{console.log('selected album id is', this.state.albumSelected)}, 0);
    // if (this.state.albumSelected !== '') {
    setTimeout(()=>{this.getSongs()}, 0);
    // }
  }


  // get a list of songs by album id
  getSongs() {
    // console.log('HIT')
    // assuming that album is updated to state by click handler
    fetch(`/itunes/songs/${this.state.albumSelected}`)
    .then(r => r.json())
    .then(data => {
      this.setState({
        songList: data.results,
      });
      console.log('song list for album', this.state.songList)
    })
    .catch(err => console.log('getsongs error', err));
  }


  getMusicVideo(a, b) {
    console.log('YouTube')
    // assuming that album is updated to state by click handler
    fetch(`/api/youtube/${this.state.artistSongs}`)
    .then(r => r.json())
    .then(data => {
      this.setState({
        musicVideo: data,
      });
      console.log(this.state.musicvideo)
    })
    .catch(err => console.log('musicvideo error', err));
  }

  // change songSelected stat to track id of song clicked
  // runs getSong function
  changeSongSelcted(num) {
    this.setState({
      songSelected: this.state.songList[num].trackId,
    });
    setTimeout(()=>{console.log('selected song id is', this.state.songSelected)}, 0);
    setTimeout(()=>{this.getSong()}, 0);
  }

  // retuns a json of the specific song selected
  getSong() {
    // console.log('HIT')
    // assuming that album is updated to state by click handler
    fetch(`/itunes/songs/${this.state.albumSelected}`)
    .then(r => r.json())
    .then(data => {
      const filterSongs = data.results.filter( el => {
        return el.trackId === this.state.songSelected ;
      })
      this.setState({
        songForDB: filterSongs,
      });
      console.log('song selected', this.state.songForDB)
    })
    .catch(err => console.log('getSong error', err));
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

// slideMenu = () => {
//   console.log('shits clicked');
//   $menuCont = document.querySelector('#content-wrapper');
//   $menuCont.classList.toggle('open');
// };

// document.addEventListener('DOMContentLoaded', () => {
//   $button = document.querySelector('#hamburger-button');
//   $button.addEventListener('click', slideMenu)
// }



  render(){
    return (
      <div id="app-container">
        <header>
          <h1>NSTD Playlist</h1>
          {/* SEARCH FORM COMPONENT GOES HERE (<SearchForm />)*/}
          <SearchForm
            handleInputChange={this.handleInputChange.bind(this)}
            handleClick={(event) => this.getAlbums(event)}
          />
          <div
            id="hamburger-button"
            onClick={() => {
                      console.log('shits clicked');
                      document.querySelector('#content-wrapper').classList.toggle('open');
                    }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </header>

        <main id="content-wrapper">
          <div className="titles">
            <h2>Albums</h2>
            <h2>Songs</h2>
          </div>

          <section className="main-content">
            {/* ALBUM LIST COMPONENT GOES HERE (<AlbumList />)*/}
            <AlbumList
              albumList={this.state.albumList}
              changeAlbumSelection={this.changeAlbumSelection.bind(this)}
              getSongs={this.getSongs.bind(this)}
            />

            {/* SONG LIST COMPONENT GOES HERE (<SongList />)*/}
            <SongList
              getMusicVideo={this.getMusicVideo.bind(this)}
              songList={this.state.songList}
              musicvideo={this.state.musicVideo}
              changeSongSelected={this.changeSongSelcted.bind(this)}
            />
          </section>

        </main>
        <aside className="pop-out">
        {/* PLAYLIST COMPONENT GOES HERE (<PlayList />)*/}
          <div className="playlist">
            <h2>PlayList</h2>
          </div>
          <PlayList
            getPlayList={this.getPlayList.bind(this)}
            playlist={this.state.playlist}
            // handleDelete={this.handleDelete.bind(this)}
           />
        </aside>

        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
