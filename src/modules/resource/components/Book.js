import React from 'react';
import s from './styles.css';
import {Link} from 'react-router-dom';

class Book extends React.Component {
  render() {
    const {id, volumeInfo: {authors}} = this.props.data;
    console.log(this.props.data)
    return (
      <Link to={`/book/${id}`} className={s.movieContainer}>
        <div className={s.movie} style={{
          backgroundImage: `url(https://images.gr-assets.com/books/1479863624l/1618.jpg)`
        }}>
          <div className={s.coverOverlay}></div>
          {/* <span className={s.rating}>{vote_average}</span> */}
        </div>
        <ul className={s.movieDescription}>
          <li className={s.movieName}>
            
          </li>
          <li className={s.movieYear}>
            {authors.map(a => `${a},`)}
          </li>
        </ul>
      </Link>
    );
  }
}

export default Book;
