import React from 'react'
import { Link } from 'react-router-dom'
import SongListActual from '../components/SongListActual'


const SongList = () => {
  return (
      <div className='container h-100'>

        <div className='row h-75 d-flex align-items-start py-2'>
          <div className='col d-flex justify-content-center px-3'>
            <SongListActual />
          </div>
        </div>

        <div className='row '>
          <div className='col d-flex justify-content-center'>
            <Link to={-1}>
              <i className="bi bi-arrow-left-square-fill h1" />
            </Link>
          </div>
        </div>

      </div>
  )
}

export default SongList