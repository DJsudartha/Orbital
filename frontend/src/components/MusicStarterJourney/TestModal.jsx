import React, { useEffect, useState } from 'react'
import { Button, Modal, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './MusicStarterJourney.css';
import { baseURL } from '../..';
import { useUser } from '../../UserContext';
import WholePageSpinner from '../Utility/WholePageSpinner';

import { useUserJourney, useUserJourneyUpdate } from '../../Features/MusicStarterJourney/UserJourneyContext';

const TestModal = (props) => {

    const userJourney = useUserJourney();
    const setUserJourney = useUserJourneyUpdate();

    const { result, quizID } = props;
    const navigate = useNavigate();
    const User_id = useUser();

    const [isLoading, setIsLoading] = useState(false);

    const onClick = () => {
        setIsLoading(true);
        const updated = quizID + 1;
        const updateUserJourneyProgress = {
            ...userJourney,
            Progress: updated
        }
        // theres some async bullshit going on here regarding the update and the navigate
        axios.put(`${baseURL}/userJourneyProgress`, updateUserJourneyProgress,
            {
                params: {
                    User_id: User_id
                }
            })
            .then((response) => console.log("progress updated " + (response.data.Progress + 1)))
            .then(setUserJourney(updateUserJourneyProgress))
            .then(setIsLoading(false))
            .then(navigate(`/MusicStarterJourney/${userJourney.CurrJourney}`))
            .catch(error => console.log(error));
    }

    {
        return isLoading ?
            (
                <Container className="vh-100">
                    <WholePageSpinner />
                </Container>
            ) : (
                <Modal
                    {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        {result ?
                            <Modal.Title id="contained-modal-title-vcenter"> Correct! Good job!
                            </Modal.Title> :
                            <Modal.Title id="contained-modal-title-vcenter"> Oops, try again!
                            </Modal.Title>}
                    </Modal.Header>
                    <Modal.Body>
                        <Col className='d-flex justify-content-center'>
                            {result ?
                                <img src='/rightAnswer.png' alt="right answer" /> :
                                <i className='bi bi-heartbreak-fill h1' style={{ color: 'red' }} />}
                        </Col>
                    </Modal.Body>
                    <Modal.Footer style={{ background: '#313338' }}>
                        <Col className='d-flex justify-content-center'>
                            <Button onClick={props.onHide}>Return</Button>
                        </Col>
                        {result && <Col className='d-flex justify-content-center'>
                            <Button onClick={onClick}>Continue</Button>
                        </Col>}
                    </Modal.Footer>
                </Modal>
            )
    }
}

export default TestModal