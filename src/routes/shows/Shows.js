import React from 'react';
import s from './Shows.css';
import UnderConstruction from '../../components/UnderConstruction';

class Movies extends React.Component {
  render() {
    return (
      <div>
        <h2 className={s.title}>Series</h2>
        <div>
          <UnderConstruction />
        </div>
      </div>
    );
  }
}

export default Movies;
