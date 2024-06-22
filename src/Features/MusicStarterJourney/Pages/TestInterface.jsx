import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import NavFooter from '../Components/NavFooter'

// Question portion concrete module
import AudioQuestion from '../Components/Questions/AudioQuestion'
import VisualQuestion from '../Components/Questions/VisualQuestion'
import RhythmQuestion from '../Components/Questions/RhythmQuestion'

// Answer Portion conrete module
import AudioAnswerCard from '../Components/AnswerCollection/AudioAnswerCard'
import VisualAnswerCard from '../Components/AnswerCollection/VisualAnswerCard'
import RhythmAnswerCard from '../Components/AnswerCollection/RhythmAnswerCard'

const TestInterface = () => {
  const QuestionType = "Visual";
  const AnswerType = "Rhythm";

  let questionOut;
  if (QuestionType === "Audio") {
    questionOut = <AudioQuestion />;
  } else if (QuestionType === "Visual") {
    questionOut = <VisualQuestion />;
  } else if (QuestionType === "Rhythm") {
    questionOut = <RhythmQuestion />;
  }

  let answerOutCard;
  if (AnswerType === "Audio") {
    answerOutCard = <AudioAnswerCard />;
  } else if (AnswerType === "Visual") {
    answerOutCard = <VisualAnswerCard />;
  } else if (AnswerType === "Rhythm") {
    answerOutCard = <RhythmAnswerCard />;
  }

  return (
    <Container className='h-100'>
      <div style={{ height: "92%", overflowY:'auto', overflowX:'hidden'}}>
        <Row className='pt-3'>
          <Col className='d-flex justify-content-center'>
            <h2>Journey</h2>
          </Col>
        </Row>
        <Row>
          {questionOut}
        </Row>

        <Row>
          <Col className='d-flex justify-content-end'>
            {answerOutCard /*Once back end done replace this with a map */}
          </Col>
          <Col className='d-flex justify-content-start'>
            {answerOutCard}
          </Col>
        </Row>
        <Row>
          <Col className='d-flex justify-content-end'>
            {answerOutCard}
          </Col>
          <Col className='d-flex justify-content-Start'>
            {answerOutCard}
          </Col>
        </Row>

        <Row className='pt-2'>
            <Col className='d-flex justify-content-center'>
            <Button variant='info'>
              Check
            </Button>
            </Col>
        </Row>
      </div>

      <Row className='pt-3'>
        <NavFooter />
      </Row>
    </Container>

  )
}

export default TestInterface 