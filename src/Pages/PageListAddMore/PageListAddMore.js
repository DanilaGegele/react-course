import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'
import { RemoteDataProvider } from '@aic/react-remote-data-provider'
import { Button } from 'react-bootstrap'

const options = {
  request: {
    url: 'pageList.json'
  },
  reducerKey: 'PageList'
}

function PageListAddMore () {
  return (
    <>
      <h1>Список</h1>
      <ListGroup>
        <RemoteDataProvider {...options}>
          {({ response: { data } }) => {
            return (
              data.map(({ title, description, code }, key) => (
                <ListGroup.Item key={key} as={Link} to={`/list/${code}`}>
                  <h3>{title}</h3>
                  <div>{description}</div>
                </ListGroup.Item>
              ))
            )
          }}
        </RemoteDataProvider>
        <Button onClick={() => { console.log('загрузить еще') }}>
          Показать еще
        </Button>
      </ListGroup>
    </>
  )
}

export default PageListAddMore
