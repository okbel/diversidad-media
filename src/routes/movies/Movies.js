import React from 'react';
import Movie from './Movie';
import s from './Movies.css';

class Movies extends React.Component {
  render() {
    return (
      <div>
        <h2 className={s.title}>Peliculas</h2>
        <div>
          <Movie
            name="Pride"
            year="2007"
          />
        </div>
      </div>
    );
  }
}

export default Movies;
