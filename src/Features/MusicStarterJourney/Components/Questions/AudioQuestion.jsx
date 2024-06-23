import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import * as Tone from 'tone'

const AudioQuestion = () => {
  const synth = new Tone.PolySynth().toDestination();
  // get props here
  const seq = [[0, "C2"], ["1", "D2"], ["2", "E2"], ["3", "F2"],
  ["4", "G2"], ["5", "A2"], ["6", "B2"], ["7", "C3"]];

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