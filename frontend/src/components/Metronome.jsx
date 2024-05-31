import React from 'react'
import { useState, useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Button from 'react-bootstrap/esm/Button'
import FormRange from 'react-bootstrap/esm/FormRange'
import Form from 'react-bootstrap/Form'
import Timer from '../assets/timer'

const Metronome = () => {

    // slider movement
    const [sliderValue, setSliderValue] = useState(130);

    // button on/off
    const [playOn, setPlay] = useState(false);
    const click = new Audio("//daveceddia.com/freebies/react-metronome/click1.wav");

    // use effect to update metronome run or not
    useEffect(() => {
        const metronome = new Timer(() => click.play(), 60000/sliderValue, {immediate: true});
        if (playOn) {
            metronome.start();
        } else {
            // why doesn't this want to stop!!!!!!
            metronome.stop();
        }
    }, [playOn]);

    let test = "";

    // change to assets folder later
    const click1 = new Audio("//daveceddia.com/freebies/react-metronome/click1.wav");

    return (
        <div className='container'>
            <div className='row border h-25 d-flex align-items-center'>
                <div className='d-flex justify-content-center fs-1'>
                    BPM: {sliderValue}, test: {test}
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
                        <Dropdown.Item href="#/action-1">4/4</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">3/4</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">2/4</Dropdown.Item>
                    </DropdownButton>
                </div>
                <div className='col-6 d-flex justify-content-start fs-5'>
                    Time Signature display
                </div>
            </div>
            <div className='row border h-25 d-flex align-items-center'>
                <div className='col d-flex justify-content-center'>
                    <Button variant='success'
                        onClick={() => {setPlay(true);}}>
                        Play
                    </Button>
                </div>
                <div className='col d-flex justify-content-center'>
                    <Button variant='success'
                        onClick={() => {setPlay(false);}}>
                        Stop
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Metronome