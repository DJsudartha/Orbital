import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'

const VisualAnswerCard = (props) => { // need to pass down a generic function prop for use to be selected in questions and to navigate in journey
  const what = props.what;
  const foo = props.foo;
  const { Title, Data } = props.data;

  const [on, setOn] = useState(false);

  const onStyle = on ? { backgroundColor: "green" } : {backgroundColor: "transparent"};

  // buggy, it says correct if the last thing clicked is the correct answer
  /**
   * a fix ish is to use an array and allow mutiple answers (better anyway) 
   * but that needs changing the Correct field to be an array and not a Number*/ 

  const handleClick = () => {
    setOn(previous => !previous);
    foo(what);
  }
  // need to figure out how to display or not display image
  return (
    <button className='MusicJourney--Button' style={onStyle} onClick={handleClick}>
      <Card bg='info' className='my-2' style={{ width: '150px' }}>
        {Data !== null && <Card.Img src={Data[0]} className='p-1' />}
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