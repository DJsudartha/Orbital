// Buggy, I think all mapped audio questions might share a common tone that builds up

import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import * as Tone from 'tone'

const AudioQuestion = (props) => {
  const { Title, Data } = props.data;
  const synth = new Tone.PolySynth().toDestination();
  // get props here
  const seq = Data;

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
          <h1>{Title}</h1>
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