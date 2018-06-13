import React from 'react';
import s from './Shows.css';
import Resources from '../../modules/resource/Resources';

class Shows extends React.Component {
  render() {
    return (
      <div>
        <h2 className={s.title}>Series</h2>
        <div>
          <Resources
            type="show"
          />
        </div>
      </div>
    );
  }
}

export default Shows;
