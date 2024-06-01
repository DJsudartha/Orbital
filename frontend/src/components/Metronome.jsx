import React from 'react'
import { useState, useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Button from 'react-bootstrap/esm/Button'
import FormRange from 'react-bootstrap/esm/FormRange'
import { click1, click2 } from '../assets/sounds'
import Timer from '../assets/timer'

const Metronome = () => {

    // slider movement
    const [sliderValue, setSliderValue] = useState(130);

    // metronome on/off
    const [playOn, setPlayOn] = useState(false);

    // pick the time signature
    const [timeChosen, setTimeChosen] = useState(4);

    // update state to use setInterval
    const [timerID, setTimerID] = useState(0);

    useEffect(() => { // can try make this more accurate using the timer function
        if (playOn) {
            const intervalID = setInterval(() => click1.play(), 60000 / sliderValue);
            setTimerID(intervalID);
        } else {
            clearInterval(timerID);
            setTimerID(0);
        }

        return () => clearInterval(timerID);
    }, [playOn]);



    return (
        <div className='container'>
            <div className='row border h-25 d-flex align-items-center'>
                <div className='d-flex justify-content-center fs-1'>
                    BPM: {sliderValue}
                </div>
            </div>
            <div className='row border h-25 d-flex align-items-center justify-content-center'>
                <div className='col-8 d-flex justify-content-center'>
                    <FormRange min={60} max={200}
                        value={sliderValue}
                        onChange={(event) => {
                            setSliderValue(event.target.value);
                        }}
                    />
                </div>
            </div>
            <div className='row border h-25 d-flex align-items-center'>
                <div className='col-6 d-flex justify-content-end'>
                    <DropdownButton id="dropdown-basic-button" variant='success' title="Time Signature">
                        <Dropdown.Item onClick={() => setTimeChosen(4)}>4/4</Dropdown.Item>
                        <Dropdown.Item onClick={() => setTimeChosen(3)}>3/4</Dropdown.Item>
                        <Dropdown.Item onClick={() => setTimeChosen(2)}>2/4</Dropdown.Item>
                    </DropdownButton>
                </div>
                <div className='col-6 d-flex justify-content-start fs-5'>
                    {timeChosen}/4
                </div>
            </div>
            <div className='row border h-25 d-flex align-items-center'>
                <div className='col d-flex justify-content-center'>
                    <Button variant='success' onClick={() => setPlayOn(true)}>
                        Play
                    </Button>
                </div>
                <div className='col d-flex justify-content-center'>
                    <Button variant='success' onClick={() => setPlayOn(false)}>
                        Stop
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Metronome