// Buggy, I think all the mapped AudioAnswerCards share a common tone

import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import * as Tone from 'tone'

const AudioAnswerCard = (props) => {
  const { Title, Data } = props.data;
  const synth = new Tone.Synth().toDestination();
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
    <button className='MusicJourney--Button' onClick={handlePlayback}>
      <Card bg='info' className='my-2' style={{ width: '150px' }}>
        <i className='bi bi-play-circle-fill h1 p-1' />
        <Card.Body style={{ backgroundColor: 'transparent' }}>
          <Card.Title style={{ backgroundColor: 'transparent' }}>
            {Title}
          </Card.Title>
        </Card.Body>
      </Card>
    </button>
  )
}

export default AudioAnswerCard