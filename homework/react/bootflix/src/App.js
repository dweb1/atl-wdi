import React, { Component } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';
import example from './omdbExample.json'

class App extends Component {
  constructor(){
    super();
    this.state = {
      movie: example
    }
  }

  //Update these methods to make axios calls to OMDB and update this.state.movie with the response from the server
  _searchByTitle = () => {
    const movieTitle = document.getElementById("title-search-box").value;
    axios.get("http://www.omdbapi.com/?t=" + movieTitle + "&apikey=d31f1a94")
        .then((res) =>{
          this.setState({
            movie: res.data
          })
          });
    }

  _searchById = () => {
    const movieId = document.getElementById("id-search-box").value;
    axios.get("http://www.omdbapi.com/?i=" + movieId + "&apikey=d31f1a94")
        .then((res) =>{
          this.setState({
            movie: res.data
          })
          });
    }

  //Pass _searchByTitle, _searchById, and this.state.movie to it's appropriate child components.
  render() {
    return (
      <div className="App">
        <Header />
        <Search getMovieId={this._searchById} getMovieTitle={this._searchByTitle}/>
        <Movie movie={this.state.movie} />
      </div>
    );
  }
  }

export default App;
