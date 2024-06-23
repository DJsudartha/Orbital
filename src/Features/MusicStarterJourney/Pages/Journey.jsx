import React, { useState } from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap';
import NavFooter from '../Components/NavFooter'
import { useNavigate } from 'react-router-dom';

const Journey = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  return (
    <Container className='h-100'>
      <div style={{ height: "92%", overflowX: "hidden", overflowY: "auto" }}>
        <Row className='py-4'>
          <Col className='d-flex justify-content-center'>
            <h1>Journeys</h1>
          </Col>
        </Row>

        <Row className='py-5'>
          <Col className='d-flex justify-content-center'>
            <Button size='lg' onClick={() => navigate("/MusicStarterJourney/Journey/Unit/id")}/>
          </Col>
        </Row>

        <Row className='py-5'>
          <Col className='d-flex justify-content-center'>
            <Button size='lg' disabled/>
          </Col>
        </Row>
      </div>

      <NavFooter />

    </Container>
  )
}

export default Journey