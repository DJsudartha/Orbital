import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'

const VisualAnswerCard = (props) => { // need to pass down a generic function prop for use to be selected in questions and to navigate in journey
  const { Title, Data } = props.data;

  // need to figure out how to display or not display image
  return (
    <button className='MusicJourney--Button'>
      <Card bg='info' className='my-2' style={{ width: '150px' }}>
        {Data !== null && <Card.Img src={Data[0]} className='p-1'/>}
        <Card.Body style={{ backgroundColor: 'transparent' }}>
          <Card.Title style={{ backgroundColor: 'transparent' }}>
            {Title}
          </Card.Title>
        </Card.Body>
      </Card>
    </button>

  )
}

export default VisualAnswerCard