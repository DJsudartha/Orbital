import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'

const VisualAnswerCard = () => {
  const [hasImage, setImage] = useState(true);
  return (
    <Card bg='info' className='my-2' style={{width:'150px'}}>
      {hasImage && <Card.Img src='https://placebear.com/300/200'/>}
      <Card.Body style={{backgroundColor:'transparent'}}>
        <Card.Title style={{backgroundColor:'transparent'}}>
          Bear
        </Card.Title>
      </Card.Body>
    </Card>
  )
}

export default VisualAnswerCard