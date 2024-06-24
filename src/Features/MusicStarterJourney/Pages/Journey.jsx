import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap';
import NavFooter from '../Components/NavFooter'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Journey = () => {
  const navigate = useNavigate();
  const [journey, setJourney] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1234/musicJourney')
      .then((response) => {
        setJourney(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [progress, setProgress] = useState(0);

  return (
    <Container className='h-100'>
      <div style={{ height: "92%", overflowX: "hidden", overflowY: "auto" }}>
        <Row className='py-4'>
          <Col className='d-flex justify-content-center'>
            <h1>Journey</h1>
          </Col>
        </Row>

        {
          journey.map((quiz, index) => (
            <Row className='py-5'>
              <Col className='d-flex justify-content-center'>
                <Button size='lg'
                  onClick={() =>
                    navigate(`/MusicStarterJourney/Journey/Unit/${quiz._id}`, {
                      state:
                      {
                        Correct: quiz.Correct,
                        Question: quiz.Question,
                        Answers: quiz.Answers
                      }
                    })}>
                  {index + 1}
                </Button>
              </Col>
            </Row>
          ))
        }

      </div>

      <Row className='pt-3'>
        <NavFooter />
      </Row>

    </Container>
  )
}

export default Journey