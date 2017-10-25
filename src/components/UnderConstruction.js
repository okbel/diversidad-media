import React from 'react';
import s from './UnderConstruction.css';
import {Link} from 'react-router-dom';

class UnderConstruction extends React.Component {
  render() {
    return (
      <div className={s.underConstructionContainer}>
        Auch, esta parte se encuentra en construcción. Lee más sobre esto <Link className={s.link} to="/sobre">acá</Link>. Gracias!
      </div>
    );
  }
}

export default UnderConstruction;
