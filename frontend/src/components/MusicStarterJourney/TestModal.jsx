import React from 'react'
import { Button, Modal, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './MusicStarterJourney.css';
import { baseURL } from '../..';
import { useUser } from '../../UserContext';

const TestModal = (props) => {
    const { result, quizID, user } = props;
    const navigate = useNavigate();
    const User_id = useUser();

    const updateUserJourneyProgress = {
        ...user,
        Progress: quizID + 1
    }
    axios.put(`${baseURL}/userJourneyProgress`, updateUserJourneyProgress,
        {
            params: {
                User_id: User_id
            }
        }
    )
    return (
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
                    <Button onClick={() => navigate(`/MusicStarterJourney/${user.CurrJourney}`)}>Continue</Button>
                </Col>}
            </Modal.Footer>
        </Modal>
    )
}

export default TestModal