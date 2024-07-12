import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { useState, useEffect } from 'react'

const Hearts = () => {
    const [hearts, setHearts] = useState(3); // replace the default with the axios.get

   /** on umnount, use useEffect to axios.put() the new heart count, make it a 
    * "feature" that hearts will be shared throughout journeys so u can't spam
    * ways to earn bacck hearts? wait x minutes to get 1 heart, make it quick 
    * if the hearts is == 0, also automatically kick the user out*/ 

   /** onCheck in TestInterface, if wrong send props down so u need two props:
    * hearts for when ur passing down prop from parents (so perform the get at
    * at the parent, and setHearts() (since you need to update it onFail)
    * only POST here, do not GET. Get in testInterval only
   */

    return (
        <Container>
            <Row className='d-flex justify-content-end pt-1'>
                <Col className='d-flex justify-content-center' xs={3}>
                    {hearts <= 2 ?
                        <i className='bi bi-heart-fill h1' style={{ color: 'gray' }} /> :
                        <i className='bi bi-heart-fill h1' style={{ color: 'red' }} />}
                </Col>
                <Col className='d-flex justify-content-center' xs={3}>
                    {hearts <= 1 ?
                        <i className='bi bi-heart-fill h1' style={{ color: 'gray' }} /> :
                        <i className='bi bi-heart-fill h1' style={{ color: 'red' }} />}
                </Col>
                <Col className='d-flex justify-content-center' xs={3}>
                    {hearts <= 0 ?
                        <i className='bi bi-heart-fill h1' style={{ color: 'gray' }} /> :
                        <i className='bi bi-heart-fill h1' style={{ color: 'red' }} />}
                </Col>
            </Row>
        </Container>
    )
}

export default Hearts