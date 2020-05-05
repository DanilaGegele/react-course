import React from 'react'
import Header from './components/Header/Header'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Menu from './components/Menu/Menu'

function App () {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col lg={2}><Menu /></Col>
          <Col lg={10}>
            <h2>Основной контент</h2>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
