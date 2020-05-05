import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

function Header () {
  return (
    <Container>
      <Navbar bg='light'>
        <Navbar.Brand>Книга рецептов</Navbar.Brand>
      </Navbar>
    </Container>
  )
}

export default Header
