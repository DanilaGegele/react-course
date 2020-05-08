import React from 'react'
import Header from './components/Header/Header'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Menu from './components/Menu/Menu'
// import PageDetail from './Pages/PageDetail/PageDetail'
import CssModulePage from './Pages/CssModulePage/CssModulePage'

function App () {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col lg={2}><Menu /></Col>
          <Col lg={10}>
            <CssModulePage />
            {/* <PageDetail /> */}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
