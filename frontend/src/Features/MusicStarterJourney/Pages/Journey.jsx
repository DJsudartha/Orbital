import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap';
import NavFooter from '../../../components/MusicStarterJourney/NavFooter'
import WholePageSpinner from '../../../components/Utility/WholePageSpinner';
import Hearts from '../../../components/MusicStarterJourney/Hearts';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../../..';
import { useUser } from '../../../UserContext';
import { useUserJourney, useUserJourneyUpdate } from '../UserJourneyContext';

const Journey = () => {
  const userJourney = useUserJourney();
  const setUserJourney = useUserJourneyUpdate();

  const navigate = useNavigate();

  const Journey_id = useParams().id;

  const [isLoading1, setLoading1] = useState(false);
  const [isLoading2, setLoading2] = useState(false);

  const [journey, setJourney] = useState([]);

  const User_id = useUser();

  // get the current userProgressJourney, if not found create a new instance
  useEffect(() => {
    setLoading1(true)

    axios.get(`${baseURL}/userJourneyProgress`, { // this might not work
      params: {
        User_id: User_id
      }
    })
      .then((response) => {
        if (!User_id) {
          console.log("error: not logged in");
          setLoading1(false);
          return;
        }

        if (response.data.User_id == "missing") {
          const newUserJourney = {
            CurrJourney: Journey_id, // need to change implementation of this depending on how david does his profile page
            Progress: 1,
            Hearts: 3,
            LastLoggedTime: new Date(),
            User_id: User_id,
            Completed: [false, false, false, false]
          }
          axios.post(`${baseURL}/userJourneyProgress`, newUserJourney)
            .then(setUserJourney(newUserJourney));
          setLoading1(false);
        } else {
          if (response.data.CurrJourney == Journey_id) {
            console.log("obtained from database if same journey: " + response.data.Progress);
            setUserJourney(response.data);
            setLoading1(false);
          } else {
            console.log("different journey reached")
            const updateUserJourneyProgress = {
              ...response.data,
              CurrJourney: Journey_id,
              Progress: 1
            }
            axios.put(`${baseURL}/userJourneyProgress`, updateUserJourneyProgress,
              {
                params: {
                  User_id: User_id
                }
              }
            )
              .then(setLoading1(false)); // need to update the journey location only really
            setUserJourney(updateUserJourneyProgress);
          }
        }
      })
  }, []);


  /** need to change this so that it finds according to the journey ID, passed
   * down as props from MusicStarterHome*/
  useEffect(() => {
    setLoading2(true);
    axios.get(`${baseURL}/musicJourney`, {
      params: {
        Journey_id: Journey_id
      }
    })
      .then((response) => {
        setJourney(response.data);
        setLoading2(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading2(false);
      });
  }, []);

  // if journey complete (get rid of this if super iffy)
  useEffect(() => {
    if (userJourney.Progress >= journey.length + 1) {
      axios.get(`${baseURL}/musicJourneyCollection/${Journey_id}`)
        .then(response => {
          const ref = response.data.collection.Reference;
          console.log("ref obtained " + ref);

          axios.get(`${baseURL}/userJourneyProgress`, {
            params: {
              User_id: User_id
            }
          })
            .then(response => {
              const arrayCompleted = response.data.Completed;
              arrayCompleted[ref] = true;
              console.log("CHECK HERE: " + arrayCompleted[ref])

              const updateUserJourneyProgress = {
                ...response.data,
                Completed: arrayCompleted
              }
              axios.put(`${baseURL}/userJourneyProgress`, updateUserJourneyProgress,
                {
                  params: {
                    User_id: User_id
                  }
                }
              )

            });

        })
    }

  }, [])

  return (
    <Container className='h-100'>
      {isLoading1 || isLoading2 ? (
        <WholePageSpinner />
      ) : (
        <Container className='h-100'>
          <div style={{ height: "92%", overflowX: "hidden", overflowY: "auto" }}>
            <Row className='pt-2'>
              <Col>
                <Hearts />
              </Col>
            </Row>

            {
              journey.map((quiz) => (
                <Row className='py-5' key={quiz.QuizID}>
                  <Col className='d-flex justify-content-center'>
                    <Button size='lg'
                      onClick={quiz.QuizID <= userJourney.Progress ? () =>
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
                      disabled={quiz.QuizID > userJourney.Progress}>
                      {quiz.QuizID}
                    </Button>
                  </Col>
                </Row>
              ))
            }

            {userJourney.Progress >= (journey.length + 1) &&
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