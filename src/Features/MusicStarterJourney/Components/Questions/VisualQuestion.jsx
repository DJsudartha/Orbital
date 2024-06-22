import React, { useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'

const VisualQuestion = () => {
  // for css: need to add a max width to the h1 and the image
  const [hasImage, setHasImage] = useState(true);
  return (
    <Container>
      <Row>
        <Col className='d-flex justify-content-center pb-1 px-5'>
          <h1>Long long long long long long Visual</h1>
        </Col>
      </Row>
      <Row>
        <Col className='d-flex justify-content-center pb-3'>
          {hasImage && <img src='https://placebear.com/300/200' />}
        </Col>
      </Row>
    </Container>
  )
}

export default VisualQuestion