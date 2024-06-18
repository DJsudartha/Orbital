import React from 'react'
import { useState, useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Button from 'react-bootstrap/esm/Button'
import FormRange from 'react-bootstrap/esm/FormRange'
import { click1, click2 } from '../assets/sounds'
import Timer from '../assets/timer'

const Metronome = ({ songData, handleSongDataChange }) => {
    const { Tempo, TimeSignature } = songData;

    /* NOTE: TimeSignature is a STRING, but we need it to be an INTEGER
    for calculation purposes, thus */
    const numericTimeSignature = [parseInt(TimeSignature[0]),
    parseInt(TimeSignature[2])];

    // metronome on/off
    const [playOn, setPlayOn] = useState(false);

    // update state to use setInterval
    const [timerID, setTimerID] = useState(0);

    useEffect(() => { // can try make this more accurate using the timer function
        if (playOn) {
            const intervalID = setInterval(() => click1.play(), 60000 / Tempo);
            setTimerID(intervalID);
        } else {
            clearInterval(timerID);
            setTimerID(0);
        }

        return () => clearInterval(timerID);
    }, [playOn]);

    return (
        <div className='container'>
            <div className='row h-25 d-flex align-items-center'>
                <div className='d-flex justify-content-center fs-1'>
                    BPM: {Tempo}
                </div>
            </div>
            <div className='row h-25 d-flex align-items-center justify-content-center'>
                <div className='col-8 d-flex justify-content-center'>
                    <FormRange min={60} max={200}
                        value={Tempo}
                        onChange={(event) => {
                            handleSongDataChange("tempoRange",
                                event.target.value);
                        }} />
                </div>
            </div>
            <div className='row h-25 d-flex align-items-center'>
                <div className='col-6 d-flex justify-content-end'>
                    <DropdownButton id="dropdown-basic-button" variant='info' title="Time Signature">
                        <Dropdown.Item onClick={() =>
                            handleSongDataChange("timeSignatureDropDown", "4/4")}>
                            4/4</Dropdown.Item>
                        <Dropdown.Item onClick={() =>
                            handleSongDataChange("timeSignatureDropDown", "3/4")}>
                            3/4</Dropdown.Item>
                        <Dropdown.Item onClick={() =>
                            handleSongDataChange("timeSignatureDropDown", "2/4")}>
                            2/4</Dropdown.Item>
                    </DropdownButton>
                </div>
                <div className='col-6 d-flex justify-content-start fs-5'>
                    {numericTimeSignature[0]}/{numericTimeSignature[1]}
                </div>
            </div>
            <div className='row h-25 d-flex align-items-center'>
                <div className='col d-flex justify-content-center'>
                    <Button variant='info' onClick={() => setPlayOn(!playOn)}>
                        Play
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Metronome