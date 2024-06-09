import React from 'react'
import { Link } from 'react-router-dom'
import Metronome from '../components/Metronome'

const Home = () => {
  return (
    <div className="container h-100 w-100 px-3 py-1">

      <div className="row align-items-center py-5">
        <div className='col d-flex justify-content-center fs-3'>
          placeholder
        </div>
      </div>

      <div className='row h-75'>
        <Metronome />
      </div>

      <div className='row py-4'>
        <div className='col d-flex align-items-center justify-content-center'>
          <Link to='/'>
            <i className="bi bi-house-fill h1" />
          </Link>
        </div>
        <div className='col d-flex align-items-center justify-content-center'>
          <Link to='/metronome/addSong'>
            <i className="bi bi-plus-square-fill h1" />
          </Link>
        </div>
        <div className='col d-flex align-items-center justify-content-center'>
          <Link to='/metronome/editSong/:id'>
            <i className="bi bi-pencil-square h1" />
          </Link>
        </div>
        <div className='col d-flex align-items-center justify-content-center'>
          <Link to='/metronome/songList'>
            <i className="bi bi-list h1" />
          </Link>
        </div>
      </div>

    </div>

  )
}

export default Home