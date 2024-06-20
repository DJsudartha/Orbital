import React from 'react'
import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import MainMenu from './mainMenuRil/MainMenu.jsx'

function App() {

  return (
      <Routes> 
        <Route path='/' element={<MainMenu />}/>
      </Routes>
  )
}

export default App