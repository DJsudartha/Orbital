import React from 'react'
import Metronome from '../components/Metronome'

const Home = () => {
  return (
    <div className="container h-100 w-100 border px-3 py-1">

      <div className="row border align-items-center ">
        <div className='col border d-flex justify-content-center fs-3'>
          Song Name Component
        </div>
      </div>

      <div className='row border h-75'>
        <Metronome />
      </div>

      <div className='row border'>
        <div className='col border d-flex align-items-center justify-content-center'>
          <i className="bi bi-plus-square-fill h1" />
        </div>
        <div className='col border d-flex align-items-center justify-content-center'>
          <i className="bi bi-list h1" />
        </div>
      </div>

    </div>

  )
}

export default Home