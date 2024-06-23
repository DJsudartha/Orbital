import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'

const VisualAnswerCard = () => { // need to pass down a generic function prop for use to be selected in questions and to navigate in journey
  const [hasImage, setImage] = useState(true);

  return (
    <button className='MusicJourney--Button'>
      <Card bg='info' className='my-2' style={{ width: '150px' }}>
        {hasImage && <Card.Img src='https://placebear.com/300/200' className='p-1'/>}
        <Card.Body style={{ backgroundColor: 'transparent' }}>
          <Card.Title style={{ backgroundColor: 'transparent' }}>
            Visual
          </Card.Title>
        </Card.Body>
      </Card>
    </button>

  )
}

export default VisualAnswerCard