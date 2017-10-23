import React from 'react';
import s from './Movie.css';
import {Link} from 'react-router-dom'

class Movie extends React.Component {
  render() {
    const {id, title, release_date, poster_path, vote_average} = this.props.data;
    return (
      <Link to={`/peliculas/${id}`}>
        <div className={s.movieContainer}>
          <div className={s.movie} style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster_path})`
          }}>
            <div className={s.coverOverlay}></div>
            <span className={s.rating}>{vote_average}</span>
          </div>
          <ul className={s.movieDescription}>
            <li className={s.movieName}>{title}</li>
            <li className={s.movieYear}>{(release_date).split('-')[0]}</li>
          </ul>
        </div>
      </Link>
    );
  }
}

export default Movie;
