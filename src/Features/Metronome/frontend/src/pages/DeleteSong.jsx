import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/esm/Button'
import { useNavigate, useParams, Link } from 'react-router-dom'

const DeleteSong = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [songTitle, setSongTitle] = useState("loading");

  useEffect(() => {
    axios.get(`http://localhost:1234/metronome/${id}`)
      .then((response) => {
        // gets rid of _id and __v which we don't wanna pass inside (for now)
        const { Title, Artist } = response.data.song;
        setSongTitle(Title + " by " + Artist);
      })
  }, []);

  const handleDeleteSong = () => {
    axios
      .delete(`http://localhost:1234/metronome/${id}`)
      .then(navigate("/metronome"))
      .catch(error => {
        alert("there was an error, check console");
        console.log(error);
      });
  }

  return (
    <div className="container h-100 px-3 py-1">

      <div className='row h-25'></div>

      <div className='row py-5 fs-1 d-flex justify-content-center' >Delete {songTitle}?</div>

      <div className="row align-items-center py-3">
        <div className='col d-flex justify-content-center fs-5'>
          <Link to={-1}>
            <Button size='lg'>Cancel</Button>
          </Link>
        </div>
        <div className='col d-flex justify-content-center fs-5'>
          <Button size='lg' onClick={handleDeleteSong}>Delete</Button>
        </div>
      </div>

    </div>
  )
}

export default DeleteSong