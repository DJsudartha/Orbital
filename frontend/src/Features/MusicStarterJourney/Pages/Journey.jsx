import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap';
import NavFooter from '../../../components/MusicStarterJourney/NavFooter'
import WholePageSpinner from '../../../components/Utility/WholePageSpinner';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../../..';

const Journey = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoading, setLoading] = useState(false);

  const [journey, setJourney] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get(`${baseURL}/musicJourney`)
      .then((response) => {
        setJourney(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const [progress, setProgress] = useState(1);

  useEffect(() => {
    if (location.state !== null) {
      setProgress(location.state);
    }
  })

  return (
    <Container className='h-100'>
      {isLoading ? (
        <WholePageSpinner />
      ) : (
        <Container>
          <div style={{ height: "92%", overflowX: "hidden", overflowY: "auto" }}>
            <Row className='py-4'>
              <Col className='d-flex justify-content-center'>
                <h1>Journey</h1>
              </Col>
            </Row>

            {
              journey.map((quiz) => (
                <Row className='py-5' key={quiz.QuizID}>
                  <Col className='d-flex justify-content-center'>
                    <Button size='lg'
                      onClick={quiz.QuizID <= progress ? () =>
                        navigate(`/MusicStarterJourney/Journey/Unit/${quiz._id}`, {
                          state:
                          {
                            Correct: quiz.Correct,
                            Question: quiz.Question,
                            Answers: quiz.Answers,
                            QuizID: quiz.QuizID,
                          }
                        }) : null
                      }
                      disabled={quiz.QuizID > progress}>
                      {quiz.QuizID}
                    </Button>
                  </Col>
                </Row>
              ))
            }

            {progress >= (journey.length + 1) &&
              <Col className='d-flex justify-content-center pt-5'>
                <Row>
                  <h1>Journey Complete!</h1>
                </Row>
              </Col>
            }

          </div>

          <Row className='pt-3'>
            <NavFooter /> {/*nav footer back arrow goes to last visited, might not want */}
          </Row>
        </Container>
      )}

    </Container>
  )
}

export default Journey