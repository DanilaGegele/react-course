import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'
import { RemoteDataProviderCollector } from '@aic/react-remote-data-provider/extensions/collector'
import { Button } from 'react-bootstrap'

const options = {
  request: {
    url: 'pageList.json'
  },
  changeableRequest: { // will be merged with request
    params: {
      page: 1
    }
  },
  path: 'data',
  reducerKey: 'PageListAddMore'
}

function PageListAddMore () {
  return (
    <>
      <h1>Список</h1>
      <ListGroup>
        <RemoteDataProviderCollector {...options}>
          {({ response: { data }, request: { params: { page } } }, { setChangeableRequest }) => {
            const onClick = () => {
              setChangeableRequest({
                params: {
                  page: page + 1
                }
              })
            }
            return (
              <>
                {data.map(({ title, description, code }, key) => (
                  <ListGroup.Item key={key} as={Link} to={`/list/${code}`}>
                    <h3>{title}</h3>
                    <div>{description}</div>
                  </ListGroup.Item>
                ))}
                <Button onClick={onClick}>
                  Показать еще
                </Button>
              </>
            )
          }}
        </RemoteDataProviderCollector>
      </ListGroup>
    </>
  )
}

export default PageListAddMore
