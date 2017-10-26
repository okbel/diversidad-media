import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import s from './Paginate.css';

const Paginate = ({pageCount, onPageChange}) => (
  <ReactPaginate
    initialPage={0}
    pageCount={pageCount}
    pageRangeDisplayed={5}
    marginPagesDisplayed={2}
    onPageChange={onPageChange}
    breakClassName={s.break}
    containerClassName={s.container}
    pageClassName={s.page}
    pageLinkClassName={s.pageLink}
    activeClassName={s.active}
    previousLabel={<img src="/icons/ic_chevron_left_black_24px.svg" alt="Previous"/>}
    previousClassName={s.previous}
    previousLinkClassName={s.previousLink}
    nextLabel={<img src="/icons/ic_chevron_right_black_24px.svg" alt="Next"/>}
    nextClassName={s.next}
    nextLinkClassName={s.nextLink}
  />
);

Paginate.propTypes = {
  pageCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};


export default Paginate;
