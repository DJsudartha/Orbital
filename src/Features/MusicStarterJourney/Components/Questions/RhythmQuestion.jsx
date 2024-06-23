import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import MetronomeButton from '../../../Metronome/frontend/src/components/MetronomeButton'

const RhythmQuestion = () => {
  // props here

  return (
    <Container>
      <Row>
        <Col className='d-flex justify-content-center pb-1 px-5'>
          <h1>Long long long long long long Ryhthm</h1>
        </Col>
      </Row>
      <Row>
        <Col className='d-flex justify-content-center pb-1 px-5'>
          <MetronomeButton Tempo={130} numericTimeSignature={[4, 4]} />
        </Col>
      </Row>
    </Container>
  )
}

export default RhythmQuestion