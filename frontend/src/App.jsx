import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Metronome from './components/Metronome'

const App = () => {
  return (
    <div className="container-fluid h-100 w-100 border px-3 py-1">

      <div className="row border">
        <div className='col-10 border d-flex align-items-center justify-content-center'>
          Song Name Component
        </div>
        <div className='col-2 border d-flex align-items-center justify-content-center'>
          <i className="bi bi-list h1" />
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
          <i className="bi bi-pencil-square h1" />
        </div>
        <div className='col border d-flex align-items-center justify-content-center'>
          <i className="bi bi-trash3-fill h1" />
        </div>
      </div>
    </div>
  )
}

export default App