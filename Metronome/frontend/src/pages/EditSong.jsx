import React from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const EditSong = () => {
  return (
  <div className="container h-100 px-3 py-1">

      <div className="row h-25" />

      <div className="row align-items-center py-3">
        <div className='col d-flex justify-content-center fs-4'>
          <Form>
            <Form.Group>
              <Form.Label>Edit Song Title</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form>
        </div>
      </div>

      <div className="row align-items-center py-3">
        <div className='col d-flex justify-content-center fs-5'>
          <Form>
            <Form.Group>
              <Form.Label>Edit Artist Name</Form.Label>
              <Form.Control placeholder='Optional'/>
            </Form.Group>
          </Form>
        </div>
      </div>

      <div className='row align-items-center py-3'>
        <div className='col d-flex justify-content-center'>
          <Button variant='success'>
            Edit
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

export default EditSong