import React from 'react';
import s from './Videos.css';
import Resources from '../../modules/resource/Resources';

class Videos extends React.Component {
  render() {
    return (
      <div>
        <h2 className={s.title}>Videos</h2>
        <div>
          <Resources
            type="video"
          />
        </div>
      </div>
    );
  }
}

export default Videos;
