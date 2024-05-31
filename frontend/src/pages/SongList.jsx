import React from 'react'
import SongListActual from '../components/SongListActual'

const SongList = () => {
  return (
    <div className='container border h-100'>

      <div className='row border h-75 d-flex align-items-start py-2'>
        <div className='col border d-flex justify-content-center px-5'>
          <SongListActual />
        </div>
      </div>

      <div className='row border'>
        <div className='col border d-flex justify-content-center'>
          <i className="bi bi-arrow-left-square-fill h1" />
        </div>
        <div className='col border d-flex justify-content-center'>
          <i className="bi bi-pencil-square h1" />
        </div>
        <div className='col border d-flex justify-content-center'>
          <i className="bi bi-trash3-fill h1" />
        </div>
      </div>

    </div>
  )
}

export default SongList