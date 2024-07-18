import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap';
import NavFooter from '../../../components/MusicStarterJourney/NavFooter'
import WholePageSpinner from '../../../components/Utility/WholePageSpinner';
import Hearts from '../../../components/MusicStarterJourney/Hearts';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../../..';
import { useUser } from '../../../UserContext';

const Journey = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const Journey_id = useParams().id;

  const [isLoading, setLoading] = useState(false);

  const [journey, setJourney] = useState([]);

  const User_id = useUser();

  // get the current userProgressJourney, if not found create a new instance
  useEffect(() => {
    setLoading(true)
    axios.get(`${baseURL}/userJourneyProgress`, { // this might not work
      params: {
        User_id: User_id
      }
    })
      .then((response) => {
        if (!User_id) {
          console.log("error: not logged in");
          setLoading(false);
          return;
        }

        if (response.data.User_id != "missing") {
          axios.put(`${baseURL}/userJourneyProgress`, 
            {
              ...response.data,
              CurrJourney: Journey_id
            },
            {
              params: {
                User_id: User_id
              }
            }
          ); // need to update the journey location only really
          setLoading(false);
          return;
        }

        const newUserJourney = {
          CurrJourney: Journey_id, // need to change implementation of this depending on how david does his profile page
          Progress: 1,
          Hearts: 3,
          LastLoggedTime: new Date(),
          User_id: User_id
        }
        axios.post(`${baseURL}/userJourneyProgress`, newUserJourney)
          .then(setLoading(false));
      })
  }, []);

  /** need to change this so that it finds according to the journey ID, passed
   * down as props from MusicStarterHome*/
  useEffect(() => {
    setLoading(true);
    axios.get(`${baseURL}/musicJourney`, {
      params: {
        Journey_id: Journey_id
      }
    })
      .then((response) => {
        setJourney(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  /** need to change this to rely on the database to track progress instead */
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
        <Container className='h-100'>
          <div style={{ height: "92%", overflowX: "hidden", overflowY: "auto" }}>
            <Row className='pt-2 '>
              <Col className='d-flex justify-content-start'>
                <h1>Its better if this and hearts is sticky</h1>
              </Col>
              <Col>
                <Hearts />
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