import React from 'react'
import { Container, Col, Row, Spinner } from 'react-bootstrap'

const WholePageSpinner = () => {
    return (
        <Container className='h-100 d-flex align-items-center justify-content-center'>
            <Row>
                <Col>
                    <Spinner animation="border" role="status" variant='info'>
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Col>
            </Row>
        </Container>
    )
}

export default WholePageSpinner