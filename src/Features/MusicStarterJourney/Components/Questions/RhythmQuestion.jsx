import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Metronome from '../../../Metronome/frontend/src/components/Metronome'

const RhythmQuestion = () => {
  const songData = {
    Title: "",
    Artist: "",
    Tempo: 130,
    TimeSignature: "4/4"
  }

  return (
    <Container>
      <Row>
        <Col className='d-flex justify-content-center pb-1 px-5'>
          <h1>Long long long long long long Ryhthm</h1>
        </Col>
      </Row>
      <Row>
        <Col className='d-flex justify-content-center pb-1 px-5'>
          <Metronome songData={songData}/>
        </Col>
      </Row>
    </Container>
  )
}

export default RhythmQuestion