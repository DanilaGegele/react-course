import React from 'react'
import { RemoteDataProvider } from '@aic/react-remote-data-provider'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'
import Pagination from '../../components/Pagination/Pagination'
import PropTypes from 'prop-types'
import qs from 'qs'
import { Button } from 'react-bootstrap'

function PageListPagination (props) {
  const { location } = props
  const page = +qs.parse(location.search, { ignoreQueryPrefix: true }).page || 1

  function handlePageClick ({ selected }) {
    const { history, location } = props
    const params = { page: selected ? selected + 1 : null }
    const updateSearch = { ...qs.parse(location.search, { ignoreQueryPrefix: true }), ...params }
    history.push(`${location.pathname}${qs.stringify(updateSearch, { addQueryPrefix: true, skipNulls: true })}`)
  }

  function handleButtonClick () {
    const { history, location } = props
    const id = +qs.parse(location.search, { ignoreQueryPrefix: true }).id
    let params = { id: 1 }
    if (id === 1) {
      params = { id: null }
    }
    const updateSearch = { ...qs.parse(location.search, { ignoreQueryPrefix: true }), ...params }
    history.push(`${location.pathname}${qs.stringify(updateSearch, { addQueryPrefix: true, skipNulls: true })}`)
  }

  const options = {
    request: {
      url: 'pageList.json',
      params: {
        page
      }
    },
    reducerKey: 'PageListPaginationUrl'
  }

  return (
    <>
      <h1>Список с пагинцией</h1>
      <RemoteDataProvider {...options}>
        {({ response: { data, totalPages } }) => {
          return (
            <>
              <ListGroup>
                {data.map(({ title, description, code }, key) => (
                  <ListGroup.Item key={key} as={Link} to={`/list/${code}`}>
                    <h3>{title}</h3>
                    <div>{description}</div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <Pagination
                initialPage={page - 1}
                pageCount={totalPages}
                handlePageClick={handlePageClick}
              />
              <Button onClick={handleButtonClick}>Добавить id=1</Button>
            </>
          )
        }}
      </RemoteDataProvider>
    </>
  )
}

PageListPagination.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object
}

export default PageListPagination
