import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { baseURL } from '../../../index'
import axios from 'axios'

const AddSong = () => {
  const navigate = useNavigate();
  const location = useLocation();

  /* for some reason I can't figure out how to pass a method with params into 
  an object, so for now I guess we use derived state*/
  const [songData, setSongData] = useState({ ...location.state });

  const handleAddSong = () => {
    axios
      .post(`${baseURL}/metronome`, songData)
      // .then(() => {
      //   navigate('/');
      // }) something fucking up in this then, idk why
      .catch((error) => {
        alert("Error occured, please check console");
        console.log(error);
      });

    // IDT I need to make this immutable cus im just passing it arnd?
    navigate("/metronome", { state: songData });
  };

  return (
    <div className="container h-100 px-3 py-1">

      <div style={{ height: "92%" }}>
        <div className="row h-25" />

        <div className="row align-items-center py-3">
          <div className='col d-flex justify-content-center fs-4'>
            <Form>
              <Form.Group>
                <Form.Label>Enter Song Title</Form.Label>
                <Form.Control type='text'
                  defaultValue={songData.Title}
                  onChange={(event) => {
                    setSongData(previousSongData => {
                      return {
                        ...previousSongData,
                        Title: event.target.value
                      }
                    })
                  }} />
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
                  defaultValue={songData.Artist}
                  onChange={(event) => {
                    setSongData(previousData => {
                      return {
                        ...previousData,
                        Artist: event.target.value
                      }
                    })
                  }} />
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
      </div>

      <div className='row align-items-center pt-3'>
        <div className='col d-flex justify-content-center'>
          <Link to={-1}>
            <i className="bi bi-arrow-left-square-fill h1" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AddSong