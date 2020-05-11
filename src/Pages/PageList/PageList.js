import React, { useState } from 'react'
import data from './assets/data.js'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

function PageList () {
  const { list: dataList } = data
  const [list, setList] = useState(dataList)
  return (
    <>
      <h1>Список</h1>
      <ListGroup>
        {list.map(({ title, description }, key) => (
          <ListGroup.Item key={key} as={Link} to='/detail'>
            <h3>{title}</h3>
            <div>{description}</div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Button
        onClick={() => {
          setList([...list, ...data.list])
        }}
      >
        Показать еще
      </Button>
    </>
  )
}

export default PageList
