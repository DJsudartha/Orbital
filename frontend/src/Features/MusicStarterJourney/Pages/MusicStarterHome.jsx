import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import WholePageSpinner from '../../../components/Utility/WholePageSpinner'
import axios from 'axios'
import { baseURL } from '../../..'

const MusicStarterHome = () => {
    // using visual answer card doesn't make sense here, just use a normal card
    const [isLoading, setIsLoading] = useState(false);

    const [collection, setCollection] = useState([]);

    // only map and get the available journeys here
    useEffect(() => {
        setIsLoading(true);
        axios.get(`${baseURL}/musicJourneyCollection`)
            .then((response) => {
                setCollection(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
            })
    }, []);

    return (
        <Container className='h-100'>
            {isLoading ? (
                <WholePageSpinner />
            ) : (
                <Container className='h-100'>
                    <div style={{ height: "92%", overflowX: "hidden", overflowY: "auto" }}>
                        <Row className='py-4'>
                            <Col className='d-flex justify-content-center'>
                                <h1>Journeys</h1>
                            </Col>
                        </Row>

                        {
                            collection.map((journey) => (
                                <Row>
                                    <Col className='d-flex justify-content-center'>
                                        <Link to={`/MusicStarterJourney/${journey._id}`}>
                                            <Card bg='info' className='my-2' style={{ width: '150px', height: '170px' }}>
                                                <Card.Img src={journey.Image} className='p-1' style={{ height: '100px', width: '147px' }} />
                                                <Card.Body style={{ backgroundColor: 'transparent' }}>
                                                    <Card.Title style={{ backgroundColor: 'transparent' }}>
                                                        {journey.Name}
                                                    </Card.Title>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Col>
                                </Row>
                            ))
                        }

                    </div>

                    <Row className='pt-3'>
                        <Col className='d-flex justify-content-center'>
                            <Link to="/">
                                <i className='bi bi-house-fill h1' />
                            </Link>
                        </Col>
                    </Row>
                </Container>
            )
            }
        </Container >
    )
}

export default MusicStarterHome