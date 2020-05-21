import React from 'react'
import ReactPaginate from 'react-paginate'
import PropTypes from 'prop-types'

function Pagination ({ pageCount, handlePageClick, ...reactPaginateProps }) {
  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={5}
      marginPagesDisplayed={2}
      onPageChange={handlePageClick}
      previousLabel='previous'
      nextLabel='next'
      breakLabel='...'
      containerClassName='pagination'
      activeClassName='active'
      pageClassName='page-item'
      previousClassName='page-item'
      nextClassName='page-item'
      breakClassName='page-item'
      pageLinkClassName='page-link'
      previousLinkClassName='page-link'
      nextLinkClassName='page-link'
      breakLinkClassName='page-link'
      disabledClassName='disabled'
      {...reactPaginateProps}
    />
  )
}

Pagination.propTypes = {
  pageCount: PropTypes.number,
  handlePageClick: PropTypes.func,
  reactPaginateProps: PropTypes.object
}

export default Pagination
