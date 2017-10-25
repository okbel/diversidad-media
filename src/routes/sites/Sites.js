import React from 'react';
import s from './Sites.css';
import UnderConstruction from '../../components/UnderConstruction';

class Sites extends React.Component {
  render() {
    return (
      <div>
        <h2 className={s.title}>Sitios</h2>
        <div>
          <UnderConstruction />
        </div>
      </div>
    );
  }
}

export default Sites;
