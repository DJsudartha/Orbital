import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login'
import Homepage from './Homepage'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = '/register' element = {<Signup />}></Route>
      <Route path = '/login' element = {<Login />}></Route>
      <Route path = '/home' element = {<Homepage />}></Route>
      <Route path='/' element={<Signup />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
