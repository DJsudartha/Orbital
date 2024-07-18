import React from 'react'
import { Container, Col, Row, Button, Modal } from 'react-bootstrap'
import { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../UserContext';
import WholePageSpinner from '../Utility/WholePageSpinner';
import axios from 'axios'
import { baseURL } from '../..';

// modal to inform user u ran out of hearts
function MyVerticallyCenteredModal(props) {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    You ran out of hearts!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Wait to regenerate hearts</h4>
                <Col className='d-flex justify-content-center'>
                    <img src="/wrongAnswer.png" alt="out of hearts" />
                </Col>
            </Modal.Body>
            <Modal.Footer style={{ background: '#313338' }}>
                <Button onClick={props.onHide}>Continue</Button>
            </Modal.Footer>
        </Modal>
    );
}

const Hearts = (props, ref) => {
    // props: hearts and time.
    const { user } = props;
    const User_id = useUser();
    const navigate = useNavigate();

    const [modalShow, setModalShow] = React.useState(false);

    const [hearts, setHearts] = useState(user.Hearts); // axios.get in journey, pass it into testInterface, pass it here, testInterface calls the function here cus idw to clutter

    const [isLoading, setIsLoading] = useState(false);

    /** on umnount, use useEffect to axios.put() the new heart count, make it a 
     * "feature" that hearts will be shared throughout journeys so u can't spam
     * ways to earn bacck hearts? wait x minutes to get 1 heart, make it quick 
     * if the hearts is == 0, also automatically kick the user out*/

    /** onCheck in TestInterface, if wrong send props down so u need two props:
     * hearts for when ur passing down prop from parents (so perform the get at
     * at the parent, and setHearts() (since you need to update it onFail)
     * only POST here, do not GET. Get in testInterval only
    */

    // need to pass in hearts as a prop from journey to testInterval aswell 

    // i think can use a modal to say no more hearts, make that pop up and navigate with that
    // no need to use a testModal, just make a new one

    // I think can justify that if u get everything wrong, u have to start from the beginning again

    useImperativeHandle(ref, () => {
        return {
            // crementHearts should also handle if hearts is zero
            // this function can't see the updated hearts
            crementHearts: (crement) => {
                setHearts(previous => {
                    if (previous + crement <= 0) {
                        return 0;
                    } else {
                        return previous + crement;
                    }
                });
            }
        }
    }, []);


    /** I want to update the hearts whenever
     *      1. a user gets a question wrong, -1
     *          locally, you should update the hearts count as well as the database, 
     *          but u don't actually get the hearts remaining from the DB here
     *          so not "one true state"...  should be fine? what are the edge cases
     *          here?, the post fails... but ur checking if the hearts = 0 locally aswell,
     *          and if it does reach zero just force the db to update to zero to match the state
     *          
     *      2. x minutes have passed clientside +1/x mins
     *       (this requires user to be on the site when this component is rendered, wonky)
     *      3. what is eaier for now: component is unmounted/mounted, in the database
     *          if current time has surpassed however many minutes from the last time put on the database
     *          - this requires logging the time when the user logs in to a journey/ logs out of a journey
     *      4. if the user has no more hearts remaining locally, kick that user out to journey and then
     *          update the thing (should be done in test Interval or here?, I think heres better)
     */

    // maybe I have to seperate useEffects, one to update the DB and the other
    // to update hearts based on time..., will there be crossbreeding there?

    // updates hearts based on x amount of time difference from db with local time
    // for now only run this during first render (in journey), if that works u
    // can think of keeping a lastUpdated local state (confusing)
    useEffect(() => {
        const localDate = new Date();
        const lastLoggedDate = new Date(user.LastLoggedDate)
        if (localDate.getTime() - lastLoggedDate.getTime() >= 3 * 60 * 1000) {
            setHearts(3);
        } else if (localDate.getTime() - lastLoggedDate.getTime() >= 2 * 60 * 1000) {
            setHearts((prev) => prev + 2 >= 3 ? 3 : prev + 2);
        } else if (localDate.getTime() - lastLoggedDate.getTime() >= 1 * 60 * 1000) {
            setHearts((prev) => prev + 1 >= 3 ? 3 : prev + 1);
        }
    }, [])


    // updates the DB whenever hearts changes, update time and hearts
    useEffect(() => {
        const newDate = new Date();
        const updateUserJourneyProgress = {
            ...user,
            Hearts: hearts,
            LastLoggedTime: newDate
        }
        setIsLoading(true);
        axios.put(`${baseURL}/userJourneyProgress`, updateUserJourneyProgress,
            {
                params: {
                    User_id: User_id
                }
            }
        ).then(setIsLoading(false));

        if (hearts === 0) {
            setModalShow(true);
        }
    }, [hearts]);

    // when unmounted
    const onUnmount = useRef();

    onUnmount.current = () => {
        setIsLoading(true);
        const updateUserJourneyProgress = {
            ...user,
            Hearts: hearts,
        }
        console.log(updateUserJourneyProgress)
        axios.put(`${baseURL}/userJourneyProgress`, updateUserJourneyProgress,
            {
                params: {
                    User_id: User_id
                }
            }
        ).then(setIsLoading(false));
    };

    useEffect(() => {
        return () => onUnmount.current();
    }, [])

    {
        return isLoading ?
             (<Container className='vh-100'>
                <WholePageSpinner />
            </Container>) :
            (<Container ref={ref}>
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

                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => navigate(`/MusicStarterJourney/${user.CurrJourney}`)}
                />
            </Container>)
    }
}

export default forwardRef(Hearts)