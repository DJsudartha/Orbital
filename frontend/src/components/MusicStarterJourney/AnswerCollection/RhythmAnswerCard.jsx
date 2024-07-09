import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import MetronomeButton from '../../Metronome/MetronomeButton'


const RhythmAnswerCard = (props) => {
  /**
       * Data stores ["Int", "Int/Int"] and metronome needs [Int, Int]
       */
  const token = props.token;
  const foo = props.foo;
  const currSelected = props.curr;
  const { Title, Data } = props.data;

  const [on, setOn] = useState(false);

  const onStyle = on ? { backgroundColor: "green" } : { backgroundColor: "transparent" };

  const handleClick = () => {
    foo(token);
  }

  // updates the state as soon as currSelectd changes
  useEffect(() => {
    setOn(token == currSelected)
  }, [currSelected])


  return (
    <button className='MusicJourney--Button' style={onStyle} onClick={handleClick}>
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