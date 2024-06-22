import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'


const RhythmAnswerCard = () => {
const [hasImage, setImage] = useState(true);

  return (
    <button className='MusicJourney--Button'>
      <Card bg='info' className='my-2' style={{ width: '150px' }}>
        {hasImage && <Card.Img src='https://placebear.com/300/200' className='p-1'/>}
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