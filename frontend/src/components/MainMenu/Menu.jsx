import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <Container fluid style={{ height: '80vh' }}>
            <Col className='h-25 d-flex align-items-center justify-content-center'>
                <Link to="/login">
                    <Button variant='info' size='lg' style={{ color: 'white' }}>
                        Log In
                    </Button>
                </Link>
            </Col>
            <Col className='h-25 d-flex align-items-center justify-content-center'>
                <Link to="/register">
                    <Button variant='info' size='lg' style={{ color: 'white' }}>
                        Sign Up
                    </Button>
                </Link>
            </Col>
            <Col className='h-25 d-flex align-items-center justify-content-center'>
                <Link to="/metronome">
                    <Button variant='info' size='lg' style={{ color: 'white' }}>
                        Metronome
                    </Button>
                </Link>
            </Col>
            <Col className='h-25 d-flex align-items-center justify-content-center'>
                <Button variant='info' size='lg' style={{ color: 'white' }}>
                    Tuner
                </Button>
            </Col>
            <Col className='h-25 d-flex align-items-center justify-content-center'>
                <Link to="/MusicStarterJourney">
                    <Button variant='info' size='lg' style={{ color: 'white' }}>
                        Music Journey
                    </Button>
                </Link>
            </Col>
        </Container>
    )
}

export default Menu