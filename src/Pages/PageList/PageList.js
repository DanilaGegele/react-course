import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'
import { RemoteDataProvider } from '@aic/react-remote-data-provider'

const options = {
  request: {
    url: 'pageList.json'
  },
  reducerKey: 'PageListRDP'
}

function PageList () {
  return (
    <RemoteDataProvider {...options}>
      {({ response: { list } }) => (list).map(({ title, description }, index) => {
        return (
          <React.Fragment key={index}>
            <ListGroup.Item key={index} as={Link} to='/detail'>
              <h3>{title}</h3>
              <div>{description}</div>
            </ListGroup.Item>
          </React.Fragment>
        )
      })}
    </RemoteDataProvider>
  )
}

export default PageList
