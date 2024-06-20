import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Metronome from '../components/Metronome'

const EditSong = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [songData, setSongData] = useState({
    /* this acts as the default until the get actually gets it and updates
    needs to be fixed cus if slow internet metronome doesn't wanna load
    NEEDS TO BE FIXED, if I try to put default value on EditSong it also puts
    Not working and Not working for Title and Artist*/
    Title: "Not Working",
    Artist: "Not Working",
    Tempo: 140,
    TimeSignature: "4/4"
  });

  useEffect(() => {
    axios.get(`http://localhost:1234/metronome/${id}`)
      .then((response) => {
        // gets rid of _id and __v which we don't wanna pass inside (for now)
        const { _id, __v, ...rest } = response.data.song;
        setSongData({ ...rest });
      })
  }, []);

  // can try using [name], but idk how to do that with react bootstrap
  const handleSongDataChange = (id, value) => {
    if (id === "tempoRange") {
      setSongData((previousSongData) => {
        return {
          ...previousSongData,
          Tempo: value
        }
      });
    } else if (id === "timeSignatureDropDown") {
      setSongData((previousSongData) => {
        return {
          ...previousSongData,
          TimeSignature: value
        }
      });
    } else if (id === "songTitleForm") {
      setSongData((previousSongData) => {
        return {
          ...previousSongData,
          Title: value
        }
      });
    } else if (id === "songArtistForm") {
      setSongData((previousSongData) => {
        return {
          ...previousSongData,
          Artist: value
        }
      });
    }
  }

  const handleEditSong = () => {
    axios
      .put(`http://localhost:1234/metronome/${id}`, songData)
      // .then(() => {
      //   navigate('/');
      // }) something fucking up in this then, idk why
      .catch((error) => {
        alert("Error occured, please check console");
        console.log(error);
      });

    // IDT I need to make this immutable cus im just passing it arnd?
    navigate("/", { state: songData });
  }

  return (
    <div className="container h-100 px-3 py-1">

      <div className="row align-items-center py-3">
        <div className='col d-flex justify-content-center fs-5'>
          <Form>
            <Form.Group>
              <Form.Label>Edit Song Title</Form.Label>
              <Form.Control 
              onChange={
                (event) => {
                  handleSongDataChange("songTitleForm", event.target.value);
                }
              } />
            </Form.Group>
          </Form>
        </div>
      </div>

      <div className="row align-items-center py-3">
        <div className='col d-flex justify-content-center fs-5'>
          <Form>
            <Form.Group>
              <Form.Label>Edit Artist Name</Form.Label>
              <Form.Control placeholder='Optional' onChange={
                (event) => {
                  handleSongDataChange("songArtistForm", event.target.value);
                }
              } />
            </Form.Group>
          </Form>
        </div>
      </div>

      <div className='row h-50'>
        <Metronome songData={songData} handleSongDataChange={handleSongDataChange} />
      </div>

      <div className='row align-items-center py-3'>
        <div className='col d-flex justify-content-center'>
          <Button variant='success' onClick={handleEditSong}>
            Edit
          </Button>
        </div>
      </div>

      <div className='row align-items-center py-3'>
        <div className='col d-flex justify-content-center'>
          <Link to={-1}>
            <i className="bi bi-arrow-left-square-fill h1" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default EditSong