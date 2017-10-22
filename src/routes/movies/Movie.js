import React from 'react';
import s from './Movie.css';

class Movie extends React.Component {
  render() {
    return (
      <div className={s.movieContainer}>
        <div className={s.movie}></div>
        <ul className={s.movieDescription}>
          <li className={s.movieName}>{this.props.name}</li>
          <li className={s.movieYear}>{this.props.year}</li>
        </ul>
      </div>
    );
  }
}

export default Movie;
