import React, { useState } from 'react'
import { RemoteDataProvider } from '@aic/react-remote-data-provider'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'
import Pagination2 from '../../components/Pagination/Pagination2'

function PageListPagination2 () {
  const [page, setPage] = useState(1)

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
              <Pagination2
                activePage={page}
                pageCount={totalPages}
                handlePageClick={(page) => {
                  setPage(page)
                }}
              />
            </>
          )
        }}
      </RemoteDataProvider>
    </>
  )
}

export default PageListPagination2
