// Buggy, I think all mapped audio questions might share a common tone that builds up

import React, { useEffect } from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import * as Tone from 'tone'

const AudioQuestion = (props) => {
  const { Title, Data } = props.data;
  const synth = new Tone.Synth().toDestination();
  // get props here
  const seq = Data;

  /**
   * Notes play an eigth note apart, since im using polysynth if i make this any
   * longer notes overlay eachother. I want to keep polysynth for chords later
   */

  /**
   * Sequences get "carried forward". seqyebce.dispose() seems ok
   * but how would you know when to dispose? Possible figure this out with
   * promises or something, this is above my IQ, for now everytime u press the 
   * play button u need to press the garbage
   *
   * POSSIBLE SOLUTION BELOW 
   * let index = 0
const noteSeq = ['C4', 'G5', 'A2', 'B3']
const sequence = new Tone.Sequence((note, time) => {
  index++
  if (index === noteSeq.length){
    console.log('sequence ended')
  }
}, noteSeq)
Or im going to experiment with writing END at the database level
   */

  const handlePlayback = () => {
    const sequence = new Tone.Sequence((time, note) => {
      if (note === "END") {
        sequence.dispose();
      } else {
        synth.triggerAttackRelease(note, "8n", time)
      };
    }, seq);

    sequence.loop = false;

    Tone.getTransport().start();
    sequence.start();
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