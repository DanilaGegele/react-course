import React, { useState } from 'react'
import { RemoteDataProvider } from '@aic/react-remote-data-provider'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'
import Pagination from '../../components/Pagination2/Pagination2'

function PageListPagination2 () {
  const [page, setPage] = useState(2)

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
      <h1>Список с пагинaцией</h1>
      <RemoteDataProvider {...options}>
        {({ response: { data, totalPages, totalItems } }) => {
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
                activePage={page}
                totalItemsCount={totalItems}
                onChange={(page) => {
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
