import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Button from 'react-bootstrap/esm/Button'
import Form from 'react-bootstrap/Form'

const Metronome = () => {
    return (
        <div className='container'>
            <div className='row border h-25 d-flex align-items-center justify-content-center'>
                BPM
            </div>
            <div className='row border h-25 d-flex align-items-center justify-content-center'>
                <Form.Range className='px-5'/>
            </div>
            <div className='row border h-25 d-flex align-items-center'>
                <DropdownButton id="dropdown-basic-button" title="Dropdown button"> 
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
            </div>
            <div className='row border h-25 d-flex align-items-center justify-content-center px-5'>
                <Button variant='primary'>Play</Button>
            </div>
        </div>
    )
}

export default Metronome