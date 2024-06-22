import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

const VisualQuestion = () => {
  // for css: need to add a max width to the h1 and the image
  return (
    <Container> 
      <Row>
        <Col className='d-flex justify-content-center pb-1 px-5'>
          <h1>Long Long Long Long Long Long Question</h1>
        </Col>
      </Row>
      <Row>
        <Col className='d-flex justify-content-center pb-3'>
          <img src='https://placebear.com/300/200'/>
        </Col>
      </Row>
    </Container>
  )
}

export default VisualQuestion