import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import * as Tone from 'tone'

const AudioQuestion = () => {
  const synth = new Tone.PolySynth().toDestination();
  // get props here
  const seq = ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"];

  /**
   * Notes play an eigth note apart, since im using polysynth if i make this any
   * longer notes overlay eachother. I want to keep polysynth for chords later
   */
  const sequence = new Tone.Sequence((time, note) => {
    synth.triggerAttackRelease(note, "8n", time);
  }, seq).start(0);

  sequence.loop = false;

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