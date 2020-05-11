import React, { useState } from 'react'
import data from './assets/data.js'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

function PageList () {
  const { list: dataList } = data
  const [list, setList] = useState(dataList)

  const renderButton = () => {
    if (list.length > 4) {
      return (
        <Button
          as={Link}
          to='/'
        >
          Посмотреть все новости
        </Button>
      )
    } else {
      return (
        <Button
          onClick={() => {
            setList([...list, ...dataList])
          }}
        >
          Показать еще
        </Button>
      )
    }
  }

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
      {renderButton()}
    </>
  )
}

export default PageList
