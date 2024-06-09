import axios from 'axios'
import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/esm/Button'
import { useNavigate } from 'react-router-dom'
import SongListActual from '../components/SongListActual'

const DeleteSong = (props) => {

  // // how do i get the id here?
  // const { id } = "placeholder";

  // const handleDeleteSong = () => {
  //   axios.delete(`http://localhost:1234/metronome/${id}`)
  //         .then(() => {
  //           props.onHide;
  //           useNavigate('/metronome/songList');
  //         })
  //         .catch((error) => {
  //           alert("Error occured, please check console");
  //           console.log(error);
  //         });
  // }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Delete Song?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='row'>
          <div className='col d-flex justify-content-center'>
            <Button onClick={props.onHide}>Delete</Button>
          </div>
          <div className='col d-flex justify-content-center'>
            <Button onClick={props.onHide}>Close</Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default DeleteSong