import React, { useState } from 'react'
import { RemoteDataProvider } from '@aic/react-remote-data-provider'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'
import Pagination from '../../components/Pagination/Pagination'

function PageListPagination () {
  const [page, setPage] = useState(0)

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
                initialPage={page}
                pageCount={totalPages}
                handlePageClick={({ selected }) => {
                  setPage(selected)
                }}
              />
            </>
          )
        }}
      </RemoteDataProvider>
    </>
  )
}

export default PageListPagination
