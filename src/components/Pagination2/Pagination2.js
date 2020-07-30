import React from 'react'
import Pagination from 'react-js-pagination'
import PropTypes from 'prop-types'

function Pagination2 ({ totalItemsCount, activePage, onChange, ...otherProps }) {
  // function handleChange () {
  //   console.log('changed')
  // }

  return (
    <div>
      <Pagination
        totalItemsCount={totalItemsCount}
        activePage={activePage}
        onChange={onChange}
        itemClass='page-item'
        linkClass='page-link'
        firstPageText='first page'
        lastPageText='last page'
      />
    </div>
  )
}

Pagination2.propTypes = {
  totalItemsCount: PropTypes.number,
  activePage: PropTypes.number,
  onChange: PropTypes.func
}

export default Pagination2
