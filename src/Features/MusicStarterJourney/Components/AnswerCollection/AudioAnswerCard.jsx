import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import * as Tone from 'tone'

const AudioAnswerCard = () => {
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
    <button className='MusicJourney--Button' onClick={handlePlayback}>
      <Card bg='info' className='my-2' style={{ width: '150px' }}>
        <i className='bi bi-play-circle-fill h1 p-1' />
        <Card.Body style={{ backgroundColor: 'transparent' }}>
          <Card.Title style={{ backgroundColor: 'transparent' }}>
            Audio
          </Card.Title>
        </Card.Body>
      </Card>
    </button>
  )
}

export default AudioAnswerCard