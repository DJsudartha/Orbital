import React, { useState, useRef } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import NavFooter from '../../../components/MusicStarterJourney/NavFooter'
import Hearts from '../../../components/MusicStarterJourney/Hearts'
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
  const heartsRef = useRef();
  const props = location.state;
  const { Correct, Question, Answers, QuizID, user } = props;

  const questionType = Question.Var;
  const answerType = Answers.Var;
  const answerCollection = Answers.Data;

  const [selected, setSelected] = useState(0); // default = 0 
  /* pass the number selected down as props, perform a check inside the card
  if that number matches its token, if it does, setOn inside the card on, if 
  it doesn't, off. Therefore the onClick should be in here and not in the card*/

  /** if i was smarter this would be handled in the answer collection class */

  /** This section is resonsible for figuring out what type of components to show */
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

  /** This section is reponsible for handling checks */
  const [showModal, setShowModal] = useState(false);

  const handleCheck = () => {
    // need to change correct into an array for more flexibility
    if (Correct === selected) {
      setShowModal(true);
    } else {
      setShowModal(true); // might be a bit weird, will it just nav or show then nav, test 
      heartsRef.current.crementHearts(-1); // the potential problem i can think of here is the user crementing the hearts too fast
    }
  }

  return (
    <Container className='h-100'>
      <div style={{ height: "92%", overflowY: 'auto', overflowX: 'hidden' }}>
        <Row className='pt-2'>
          <Col className='d-flex justify-content-start'>
            <h2>Journey</h2>
          </Col>
          <Col>
            <Hearts ref={heartsRef} user={user} />
          </Col>
        </Row>
        <Row className='pt-3'>
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

      <TestModal show={showModal} onHide={() => setShowModal(false)}
        result={Correct == selected} quizID={QuizID}
        user={user} />

    </Container >
  )
}

export default TestInterface 