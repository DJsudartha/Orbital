import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'

const Menu = () => {
    return (
        <Container fluid  style={{ height: '80vh' }}>
            <Col className='h-25 d-flex align-items-center justify-content-center'>
                <Button variant='info' size='lg' style={{color:'white'}}>
                    Log In
                </Button>
            </Col>
            <Col className='h-25 d-flex align-items-center justify-content-center'>
                <Button variant='info' size='lg' style={{color:'white'}}>
                    Sign Up
                </Button>
            </Col>
            <Col className='h-25 d-flex align-items-center justify-content-center'>
                <Button variant='info' size='lg' style={{color:'white'}}>
                    Metronome
                </Button>
            </Col>
            <Col className='h-25 d-flex align-items-center justify-content-center'>
                <Button variant='info' size='lg' style={{color:'white'}}>
                    Tuner
                </Button>
            </Col>
        </Container>
    )
}

export default Menu