import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import NavFooter from '../Components/NavFooter'
import { useLocation } from 'react-router-dom'

// Question portion concrete module
import AudioQuestion from '../Components/Questions/AudioQuestion'
import VisualQuestion from '../Components/Questions/VisualQuestion'
import RhythmQuestion from '../Components/Questions/RhythmQuestion'

// Answer Portion conrete module
import AudioAnswerCard from '../Components/AnswerCollection/AudioAnswerCard'
import VisualAnswerCard from '../Components/AnswerCollection/VisualAnswerCard'
import RhythmAnswerCard from '../Components/AnswerCollection/RhythmAnswerCard'

const TestInterface = () => {
  const location = useLocation();
  const props = location.state;
  const { Correct, Question, Answers } = props;

  const questionType = Question.Var;
  const answerType = Answers.Var;
  const answerCollection = Answers.Data;

  const [selected, setSelected] = useState(0); // pass setSelected down as props

  let questionOut;
  if (questionType === "Audio") {
    questionOut = <AudioQuestion data={Question} />;
  } else if (questionType === "Visual") {
    questionOut = <VisualQuestion data={Question} />;
  } else if (questionType === "Rhythm") {
    questionOut = <RhythmQuestion data={Question} />;
  }

  let answerOutCards;
  if (answerType === "Audio") {
    answerOutCards = answerCollection.map((answer) =>
      <Col className='d-flex justify-content-center'>
        <AudioAnswerCard data={answer} />
      </Col>);
  } else if (answerType === "Visual") {
    answerOutCards = answerCollection.map((answer) =>
      <Col className='d-flex justify-content-center'>
        <VisualAnswerCard data={answer} />
      </Col>);
  } else if (answerType === "Rhythm") {
    answerOutCards = answerCollection.map((answer) =>
      <Col className='d-flex justify-content-center'>
        <RhythmAnswerCard data={answer} />
      </Col>);
  }

  return (
    <Container className='h-100'>
      <div style={{ height: "92%", overflowY: 'auto', overflowX: 'hidden' }}>
        <Row className='pt-3'>
          <Col className='d-flex justify-content-center'>
            <h2>Journey</h2>
          </Col>
        </Row>
        <Row>
          {questionOut}
        </Row>
        <Row>
          {answerOutCards}
        </Row>
        <Row className='pt-3'>
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