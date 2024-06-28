import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import { click1, click2 } from '../assets/sounds';

const MetronomeButton = ({ Tempo, numericTimeSignature }) => {
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
        if (playOn) {
            click2.play(); // play instantly
            const intervalID = setInterval(keepTime, 60000 / Tempo);
            setTimerID(intervalID);
        } else {
            clearInterval(timerID);
            setTimerID(0);
        }

        return () => clearInterval(timerID);
    }, [playOn]);


    return (
        <Button variant='info' onClick={() => setPlayOn(!playOn)}>
            {playOn ?  <i class="bi bi-pause-circle-fill h1" />: <i class="bi bi-play-circle-fill h1" />}
        </Button>
    )
}

export default MetronomeButton