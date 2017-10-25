import React from 'react';
import s from './Other.css';
import UnderConstruction from '../../components/UnderConstruction';

class Other extends React.Component {
  render() {
    return (
      <div>
        <h2 className={s.title}>Otros</h2>
        <div>
          <UnderConstruction />
        </div>
      </div>
    );
  }
}

export default Other;
