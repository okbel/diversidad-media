import React from 'react';
import s from './Movies.css';
import Resources from '../../modules/resource/Resources';

class Movies extends React.Component {
  render() {
    return (
      <div>
        <h2 className={s.title}>Peliculas</h2>
        <div>
          <Resources type="movie" />
        </div>
      </div>
    );
  }
}

export default Movies;
