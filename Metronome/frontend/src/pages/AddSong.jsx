import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

const AddSong = () => {

  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const navigate = useNavigate();


  const handleAddSong = () => {
    const data = {
      Title: title,
      Artist: artist,
      Tempo: 140, // replace with an inherited prop later
      TimeSignature: "4/4" //replace with an inherited prop later 
    }

    axios
      .post('http://localhost:1234/metronome', data)
      // .then(() => {
      //   navigate('/');
      // }) something fucking up in this then, idk why
      .catch((error) => {
        alert("Error occured, please check console");
        console.log(error);
      });
  };

  return (
    <div className="container h-100 px-3 py-1">

      <div className="row h-25" />

      <div className="row align-items-center py-3">
        <div className='col d-flex justify-content-center fs-4'>
          <Form>
            <Form.Group>
              <Form.Label>Enter Song Title</Form.Label>
              <Form.Control type='text' 
              defaultValue={title} 
              onChange={(x) => setTitle(x.target.value)}/>
            </Form.Group>
          </Form>
        </div>
      </div>

      <div className="row align-items-center py-3">
        <div className='col d-flex justify-content-center fs-5'>
          <Form>
            <Form.Group>
              <Form.Label>Enter Artist Name</Form.Label>
              <Form.Control placeholder='Optional' 
              type='text' 
              defaultValue={artist} 
              onChange={(x) => setArtist(x.target.value)}/>
            </Form.Group>
          </Form>
        </div>
      </div>

      <div className='row align-items-center py-3'>
        <div className='col d-flex justify-content-center'>
          <Button variant='success' onClick={handleAddSong}>
            Add
          </Button>
        </div>
      </div>

      <div className='row align-items-center py-3'>
        <div className='col d-flex justify-content-center'>
          <Link to='/'>
            <i className="bi bi-arrow-left-square-fill h1" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AddSong