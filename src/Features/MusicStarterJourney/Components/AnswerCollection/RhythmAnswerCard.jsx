import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import MetronomeButton from '../../../Metronome/frontend/src/components/MetronomeButton'


const RhythmAnswerCard = (props) => {
  const { Title, Data } = props.data;
  /**
     * Data stores ["Int", "Int/Int"] and metronome needs [Int, Int]
     */

  return (
    <button className='MusicJourney--Button'>
      <Card bg='info' className='my-2' style={{ width: '150px' }}>
        <MetronomeButton Tempo={parseInt(Data[0])} 
        numericTimeSignature={[parseInt(Data[1][0]), parseInt(Data[1][2])]} />
        <Card.Body style={{ backgroundColor: 'transparent' }}>
          <Card.Title style={{ backgroundColor: 'transparent' }}>
            {Title}
          </Card.Title>
        </Card.Body>
      </Card>
    </button>
  )
}

export default RhythmAnswerCard