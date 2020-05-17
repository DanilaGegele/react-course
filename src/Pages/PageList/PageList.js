import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'
import { RemoteDataProvider } from '@aic/react-remote-data-provider'

const options = {
  request: {
    url: 'pageList.json'
  },
  reducerKey: 'PageList'
}

function PageList () {
  return (
    <>
      <h1>Список</h1>
      <ListGroup>
        <RemoteDataProvider {...options}>
          {({ response: { data } }) => {
            return (
              data.map(({ title, description }, key) => (
                <ListGroup.Item key={key} as={Link} to='/detail'>
                  <h3>{title}</h3>
                  <div>{description}</div>
                </ListGroup.Item>
              ))
            )
          }}
        </RemoteDataProvider>
      </ListGroup>
    </>

  )
}

export default PageList
