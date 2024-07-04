import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavFooter = () => {
    return (
        <Container>
            <Row>
                <Col className='d-flex justify-content-end px-5'>
                    <Link to="/MusicStarterJourney">
                        <i className="bi bi-house-fill h1" />
                    </Link>
                </Col>
                <Col className='d-flex justify-content-start px-5'>
                    <Link to={-1 /*Need to add a prompt */}>
                        <i className="bi bi-arrow-left-square-fill h1" />
                    </Link>

                </Col>
            </Row>
        </Container>
    )
}

export default NavFooter