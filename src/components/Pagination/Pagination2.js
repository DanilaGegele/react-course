import React from 'react'
import ReactPaginate from 'react-js-pagination'
import PropTypes from 'prop-types'

function Pagination2 ({ activePage, pageCount, handlePageClick, reactPaginateProps }) {
  return (
    <ReactPaginate
      activePage={activePage}
      itemsCountPerPage={2}
      totalItemsCount={pageCount * 2}
      pageRangeDisplayed={5}
      onChange={handlePageClick}
      itemClass='page-item'
      linkClass='page-link'
      {...reactPaginateProps}
    />
  )
}

Pagination2.propTypes = {
  activePage: PropTypes.number,
  pageCount: PropTypes.number,
  handlePageClick: PropTypes.func,
  reactPaginateProps: PropTypes.object
}

export default Pagination2
