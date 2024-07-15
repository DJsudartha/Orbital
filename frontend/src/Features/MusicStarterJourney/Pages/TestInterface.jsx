import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import NavFooter from '../../../components/MusicStarterJourney/NavFooter'
import { useLocation, useNavigate } from 'react-router-dom'

// Question portion concrete module
import AudioQuestion from '../../../components/MusicStarterJourney/Questions/AudioQuestion'
import VisualQuestion from '../../../components/MusicStarterJourney/Questions/VisualQuestion'
import RhythmQuestion from '../../../components/MusicStarterJourney/Questions/RhythmQuestion'

// Answer Portion conrete module
import AudioAnswerCard from '../../../components/MusicStarterJourney/AnswerCollection/AudioAnswerCard'
import VisualAnswerCard from '../../../components/MusicStarterJourney/AnswerCollection/VisualAnswerCard'
import RhythmAnswerCard from '../../../components/MusicStarterJourney/AnswerCollection/RhythmAnswerCard'

/**
 * This could be accomplished well with a class/OOP based approach,
 * however I did not want to take the time to bother to learn how to do that
 * inside react modules and stuff. Therefore this is the result. 
 */

const TestInterface = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const props = location.state;
  const { Correct, Question, Answers, QuizID } = props;

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

  /**
   * Gets variant of answer from database and then maps the components according
   * to the type
   */
  let answerOutCards;
  if (answerType === "Audio") {
    answerOutCards = answerCollection.map((answer, index) =>
      <Col className='d-flex justify-content-center' key={index + 1}>
        <AudioAnswerCard data={answer} what={index + 1} foo={setSelected} />
      </Col>);
  } else if (answerType === "Visual") {
    answerOutCards = answerCollection.map((answer, index) =>
      <Col className='d-flex justify-content-center' key={index + 1}>
        <VisualAnswerCard data={answer} what={index + 1} foo={setSelected} />
      </Col>);
  } else if (answerType === "Rhythm") {
    answerOutCards = answerCollection.map((answer, index) =>
      <Col className='d-flex justify-content-center' key={index + 1}>
        <RhythmAnswerCard data={answer} what={index + 1} foo={setSelected} />
      </Col>);
  }

  const handleCheck = () => {
    // need to change correct into an array for more flexibility
    if (Correct === selected) {
      alert("Correct!");
      navigate("/MusicStarterJourney/Journey", { state: QuizID + 1 });
    } else {
      alert("Try again!");
    }
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
            <Button variant='info' onClick={handleCheck}>
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