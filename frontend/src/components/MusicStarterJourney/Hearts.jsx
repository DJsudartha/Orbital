import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { useState, useEffect, useImperativeHandle, forwardRef } from 'react'
import axios from 'axios'

const Hearts = (props, ref) => {
    const [hearts, setHearts] = useState(3); // axios.get in journey, pass it into testInterface, pass it here, testInterface calls the function here cus idw to clutter

    /** const lastLoggedTime = props.whatever // passed down from journey 
     * const hearts = props.hearts // passed down from journey
    */


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

    useImperativeHandle(ref, () => {
        return {
            crementHearts: (crement) => setHearts(previous => previous + crement)
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

        /**if (localDate.getTime() - lastLoggedDate > x) {
         * regenerate 3 hearts 
        }  else if (localDate - lastLoggedDate > x - y) {
          regenerate 2 hearts
          } else if (localDate - lastLoggedDate > x - y) {
           regenerate 1 heart
           }

           at the very end update the lastLoggedDate to when this was called
        */
    }, [])

    // updates the DB whenever hearts changes, update time and hearts
    useEffect(() => {
        /** if (hearts === 0) {
         *  navigate to journey (hopefully this also unmounts and runs cleanup function)
         * }
         * if (local time >= some interval of time in DB passed down from journey) {
         *      setHearts(prev => prev + 1) // I cant do this because then it would be infinite
         *      axios.put(setHearts)
         * }
        */
        return () => {
            // update the DB
            console.log("DB updated!");
        }
    }, [hearts]);

    return (
        <Container ref={ref}>
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

export default forwardRef(Hearts)