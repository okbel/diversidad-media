import React from 'react';
import s from './Music.css';
import UnderConstruction from '../../components/UnderConstruction';

class Music extends React.Component {
  render() {
    return (
      <div>
        <h2 className={s.title}>Musica</h2>
        <div>
          <UnderConstruction />
        </div>
      </div>
    );
  }
}

export default Music;
