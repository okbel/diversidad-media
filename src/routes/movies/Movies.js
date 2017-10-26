import React from 'react';
import Movie from './Movie';
import LoadingMovie from './LoadingMovie';
import s from './Movies.css';
import axios from 'axios';
import Paginate from '../../components/Paginate';
import queryString from 'query-string';

class Movies extends React.Component {
  state = {
    movies: [],
    totalPages: 0
  }

  componentWillMount() {
    this.fetchMovies();
  }

  generateDelay = () => {
    return Math.random() * (7 - 0.10) + 0.10;
  }

  fetchMovies = async (query = {}) => {
    const {data: {results: movies, total_pages}} = await axios.get(`/movies?${queryString.stringify(query)}`);
    this.setState({
      movies,
      totalPages: total_pages
    })
  }

  pageClick = ({selected}) => {
    const page = selected + 1;
    this.fetchMovies({page});
  }

  render() {
    const {movies, totalPages} = this.state;

    if (!movies.length){
      return Array(12).fill({}).map((movie, i) => (<LoadingMovie key={i} delay={this.generateDelay()} />))
    }

    return (
      <div>
        <h2 className={s.title}>Peliculas</h2>
        <div>
          {movies.map(movie => <Movie key={movie.id} data={movie}/>)}
          <Paginate 
            pageCount={totalPages}
            onPageChange={this.pageClick}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
