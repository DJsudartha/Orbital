import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import * as Tone from 'tone'

const AudioQuestion = () => {
  const synth = new Tone.PolySynth().toDestination();
  // get props here
  const seq = [[0, "C4"], ["1", "D4"], ["2", "E4"], ["3", "F4"],
  ["4", "G4"], ["5", "A4"], ["6", "B4"], ["7", "C5"]];

  const part = new Tone.Part((time, note) => {
    synth.triggerAttackRelease(note, "4n", time);
  }, seq).start(0);

  const handlePlayback = () => {
    Tone.getTransport().stop();
    Tone.getTransport().start();
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
          <Button onClick={handlePlayback} size='lg' variant='info'>
            <i className="bi bi-play-circle-fill h1" />
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default AudioQuestion