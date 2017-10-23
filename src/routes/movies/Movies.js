import React from 'react';
import Movie from './Movie';
import LoadingMovie from './LoadingMovie';
import s from './Movies.css';
import axios from 'axios';

class Movies extends React.Component {
  state = {
    movies: []
  }

  async componentWillMount() {
    const {data: {results: movies}} = await axios.get('/movies');
    this.setState({movies})
  }

  generateDelay = () => {
    return Math.random() * (7 - 0.10) + 0.10;
  }

  render() {
    const {movies} = this.state;

    if (!movies.length){
      return Array(12).fill({}).map((movie, i) => (<LoadingMovie key={i} delay={this.generateDelay()} />))
    }

    return (
      <div>
        <h2 className={s.title}>Peliculas</h2>
        <div>
          {movies.map(movie => <Movie key={movie.id} data={movie}/>)}
        </div>
      </div>
    );
  }
}

export default Movies;
