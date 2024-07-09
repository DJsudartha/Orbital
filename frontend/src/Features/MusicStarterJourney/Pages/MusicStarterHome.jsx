import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MusicStarterHome = () => {
    // using visual answer card doesn't make sense here, just use a normal card
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
                            <Card bg='info' className='my-2' style={{ width: '150px', height: '170px' }}>
                                <Card.Img src="bear" className='p-1' style={{ height: '100px', width: '147px' }} />
                                <Card.Body style={{ backgroundColor: 'transparent' }}>
                                    <Card.Title style={{ backgroundColor: 'transparent' }}>
                                        Journey 1
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col className='d-flex justify-content-start'>
                        <Card bg='info' className='my-2' style={{ width: '150px', height: '170px' }}>
                            <Card.Img src="bear" className='p-1' style={{ height: '100px', width: '147px' }} />
                            <Card.Body style={{ backgroundColor: 'transparent' }}>
                                <Card.Title style={{ backgroundColor: 'transparent' }}>
                                    WIP
                                </Card.Title>
                            </Card.Body>
                        </Card>
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