import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Metronome from '../components/Metronome'

const Home = () => {
  // I know this code is shit ;_;

  // get props from other routes
  let location = useLocation();
  // default route
  let songData = {
    Title: "",
    Artist: "",
    Tempo: 130,
    TimeSignature: "4/4"
  }

  /* checks if props are passed from other components, if there are props
  update, if not stay with the default, sort of shit and I think the only
  way for the data to persist (AFAIK) is to keep on passing state around */
  if (location.state !== null) {
    songData = location.state;
  } 

  return (
    <div className="container h-100 w-100 px-3 py-1">

      <div className="row align-items-center py-5">
        <div className='col d-flex justify-content-center fs-3'>
          {songData.Title}
        </div>
      </div>

      <div className='row h-75'>
        <Metronome songData={songData}/>
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