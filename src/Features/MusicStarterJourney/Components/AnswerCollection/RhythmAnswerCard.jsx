import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import MetronomeButton from '../../../Metronome/frontend/src/components/MetronomeButton'


const RhythmAnswerCard = (props) => {
  /**
       * Data stores ["Int", "Int/Int"] and metronome needs [Int, Int]
       */
  const what = props.what;
  const foo = props.foo;
  const { Title, Data } = props.data;

  const [on, setOn] = useState(false);

  const onStyle = on ? { backgroundColor: "green" } : { backgroundColor: "transparent"};

  const handleClick = () => {
    setOn(previous => !previous);
    foo(what);
  }
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