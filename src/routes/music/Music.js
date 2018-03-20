import React from 'react';
import s from './Music.css';
import Resources from '../../modules/resource/Resources';

class Music extends React.Component {
  render() {
    return (
      <div>
        <h2 className={s.title}>Musica</h2>
        <div>
          <Resources
            type="music"
          />
        </div>
      </div>
    );
  }
}

export default Music;
