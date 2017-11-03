import React from 'react';
import s from './Books.css';
import UnderConstruction from '../../components/UnderConstruction';
import withQuery from 'hocs/withQuery';

class Books extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <h2 className={s.title}>Libros</h2>
        <div>
          <UnderConstruction />
        </div>
      </div>
    );
  }
}

export default withQuery(`
  query Books {
    test
  }
`)(Books);
