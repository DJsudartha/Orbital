import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import MetronomeButton from '../../../Metronome/frontend/src/components/MetronomeButton'

const RhythmQuestion = (props) => {
  const { Title, Data } = props.data;
  /**
   * Data stores ["Int", "Int/Int"] and metronome needs [Int, Int]
   */

  return (
    <Container>
      <Row>
        <Col className='d-flex justify-content-center pb-1 px-5'>
          <h1>{Title}</h1>
        </Col>
      </Row>
      <Row>
        <Col className='d-flex justify-content-center pb-1 px-5'>
          <MetronomeButton Tempo={parseInt(Data[0])} 
          numericTimeSignature={[parseInt(Data[1][0]), parseInt(Data[1][2])]} />
        </Col>
      </Row>
    </Container>
  )
}

export default RhythmQuestion