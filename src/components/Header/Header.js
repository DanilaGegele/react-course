import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <Container>
      <Navbar bg='light'>
        <Navbar.Brand><Link to='/'>Книга рецептов</Link></Navbar.Brand>
      </Navbar>
    </Container>
  )
}

export default Header
