import React from 'react';
import PropTypes from 'prop-types';
import s from './LoadMore.css';

const Paginate = ({loadMore}) => (
  <a className={s.button} onClick={loadMore}>Cargar Más</a>
);

Paginate.propTypes = {
  loadMore: PropTypes.func.isRequired,
};


export default Paginate;
