import React from 'react'
import { Button } from 'react-bootstrap'
import { Synth } from 'tone'

const Tester = () => {
    const synth = new Synth().toDestination();

    const handleStart = () => {
        synth.triggerAttackRelease("C4", "1n");
    }

    return (
        <Button onClick={handleStart}>
            Start
        </Button>
    )
}

export default Tester