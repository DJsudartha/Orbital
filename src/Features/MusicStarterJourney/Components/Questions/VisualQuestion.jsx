import React, { useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'

const VisualQuestion = (props) => {
  const { Title, Data } = props.data;
  // for css: need to add a max width to the h1 and the image
  return (
    <Container>
      <Row>
        <Col className='d-flex justify-content-center pb-1 px-5'>
          <h1>{Title}</h1>
        </Col>
      </Row>
      <Row>
        <Col className='d-flex justify-content-center pb-3'>
          {Data !== null && <img src={Data[0]} />}
        </Col>
      </Row>
    </Container>
  )
}

export default VisualQuestion