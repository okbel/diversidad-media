import React from 'react';
import s from './Books.css';
import Resources from '../../modules/resource/Resources';

class Books extends React.Component {
  render() {
    return (
      <div>
        <h2 className={s.title}>Libros</h2>
        <div>
          <Resources type="book" />
        </div>
      </div>
    );
  }
}

export default Books;
