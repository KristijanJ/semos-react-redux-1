import React, { Component } from 'react';
import { connect } from "react-redux";
import { getMovies, getMovie } from '../actions/moviesAction'


class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movieInputValue: '',
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  getMovie = () => {
    this.props.getMovie(parseInt((this.state.movieInputValue)));
  }

  getMovies = () => {
    this.props.getMovies();
  }

  render() {
    return (
      <div>
        <h2>Movies</h2>
        <ol>
          {
            this.props.movies.map(movie => <li key={movie.id}>{movie.title}</li>)
          }
        </ol>
        <button onClick={this.getMovies}>Console Log all movies in a Table</button>
        <div>
          <input type="number" name="movieInputValue" value={this.state.movieInputValue} onChange={this.handleChange} />
          <button onClick={this.getMovie}>Get Movie</button>
          {
            this.props.movie ? <p>{this.props.movie.title}</p> : null
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.moviesReducer.movies,
    movie: state.moviesReducer.movie
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovie: (id) => {
      dispatch(getMovie(id));
    },
    getMovies: () => {
      dispatch(getMovies());
    }
  };
};

export default Movies = connect(mapStateToProps, mapDispatchToProps)(Movies);