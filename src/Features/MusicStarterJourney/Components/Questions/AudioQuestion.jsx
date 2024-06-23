import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import { Synth } from 'tone';

const AudioQuestion = () => {
  // get props here
  const synth = new Synth().toDestination();

  const handlePlayback = () => {
    synth.triggerAttackRelease("C4", 2);
  }

  return (
    <Container>
      <Row>
        <Col className='d-flex justify-content-center pb-1 px-5'>
          <h1>Long long long long long long Audio</h1>
        </Col>
      </Row>
      <Row className='pt-2'>
        <Col className='d-flex justify-content-center pb-3'>
        <Button onClick={handlePlayback} size='lg'>
          <i className="bi bi-play-circle-fill h1" />
        </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default AudioQuestion