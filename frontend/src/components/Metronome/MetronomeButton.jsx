import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const MetronomeButton = ({ Tempo, numericTimeSignature }) => {
    const click1 = new Audio("//daveceddia.com/freebies/react-metronome/click1.wav");
    const click2 = new Audio("//daveceddia.com/freebies/react-metronome/click2.wav");

    const location = useLocation();

    // metronome on/off
    const [playOn, setPlayOn] = useState(false);

    // keeps track of the time signature
    let beatCountTracker = 1;

    const keepTime = () => {
        const beatCount = beatCountTracker;

        if (beatCount % numericTimeSignature[0] === 0) {
            click2.play();
        } else {
            click1.play();
        }

        beatCountTracker = (beatCount + 1) % numericTimeSignature[0];
    }

    // update state to use setInterval
    const [timerID, setTimerID] = useState(0);
    // FIX: if switch page metronome still plays
    useEffect(() => { // can try make this more accurate using the timer function
        let intervalID = 0;
        if (playOn) {
            click2.play(); // play instantly
            intervalID = setInterval(keepTime, 60000 / Tempo);
            setTimerID(intervalID);
            console.log("true " + timerID + intervalID);
        } else {
            clearInterval(timerID);
            console.log("false " + timerID);
            setTimerID(0);
        }

        return () => {
            console.log("cleanup " + intervalID)
            clearInterval(intervalID);
        }
    }, [playOn, location]);


    return (
        <Button variant='info' onClick={() => setPlayOn(!playOn)}>
            {playOn ? <i class="bi bi-pause-circle-fill h1" /> : <i class="bi bi-play-circle-fill h1" />}
        </Button>
    )
}

export default MetronomeButton