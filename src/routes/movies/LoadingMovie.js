import React from 'react';
import s from './LoadingMovie.css';

class Movie extends React.Component {
  render() {
    const {delay} = this.props;

    return (
      <div className={s.loadingMovie} style={{
        animationDelay: `${delay}s`
      }}>
      </div>
    );
  }
}

export default Movie;
