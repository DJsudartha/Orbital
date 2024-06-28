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
                            <VisualAnswerCard 
                            data={{Title: "Journey", Data: 
                            ["https://www.musictheoryacademy.com/wp-content/uploads/2020/06/Treble-Clef-Symbol.jpg"]}}/>
                        </Link>
                    </Col>
                    <Col className='d-flex justify-content-start'>
                        <VisualAnswerCard 
                        data={{Title: "WIP", Data: 
                        ["https://www.musictheoryacademy.com/wp-content/uploads/2011/02/BassClef-Middle-C-e1297176615910.jpg"]}}/>
                    </Col>
                </Row>
            </div>

            <Row className='pt-3'>
                <Col className='d-flex justify-content-center'>
                    <Link to="/">
                        <i className='bi bi-house-fill h1' />
                    </Link>
                </Col>
            </Row>
        </Container >
    )
}

export default MusicStarterHome