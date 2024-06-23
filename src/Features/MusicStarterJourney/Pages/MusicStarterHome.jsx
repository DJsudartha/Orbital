import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import VisualAnswerCard from '../Components/AnswerCollection/VisualAnswerCard'
import { Link } from 'react-router-dom'

const MusicStarterHome = () => {
    return (
        <Container className='h-100'>
            <div style={{ height: "92%", overflowX: "hidden", overflowY: "auto" }}>
                <Row className='py-4'>
                    <Col className='d-flex justify-content-center'>
                        <h1>Journeys</h1>
                    </Col>
                </Row>

                <Row>
                    <Col className='d-flex justify-content-end'>
                        <Link to="/MusicStarterJourney/Journey">
                            <VisualAnswerCard /> {/**need to map for this later */}
                        </Link>
                    </Col>
                    <Col className='d-flex justify-content-start'>
                        <VisualAnswerCard />
                    </Col>
                </Row>
            </div>

        </Container>
    )
}

export default MusicStarterHome