import React from 'react';
import s from './LoadingResource.css';

class Movie extends React.Component {
  render() {
    const {delay} = this.props;

    return (
      <div className={s.loadingMovie} style={{
        animationDelay: `${delay}s`
      }}/>
    );
  }
}

export default Movie;
