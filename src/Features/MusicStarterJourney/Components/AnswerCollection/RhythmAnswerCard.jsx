import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import MetronomeButton from '../../../Metronome/frontend/src/components/MetronomeButton'


const RhythmAnswerCard = () => {
  return (
    <button className='MusicJourney--Button'>
      <Card bg='info' className='my-2' style={{ width: '150px' }}>
        <MetronomeButton Tempo={130} numericTimeSignature={[4, 4]}/>
        <Card.Body style={{ backgroundColor: 'transparent' }}>
          <Card.Title style={{ backgroundColor: 'transparent' }}>
            Rhythm
          </Card.Title>
        </Card.Body>
      </Card>
    </button>
  )
}

export default RhythmAnswerCard