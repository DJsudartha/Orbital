import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login'
import Homepage from './Homepage'
import ForgotPassword from './ForgotPassword'
import ResetPassword from './ResetPassword'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = '/register' element = {<Signup />}></Route>
      <Route path = '/login' element = {<Login />}></Route>
      <Route path = '/home' element = {<Homepage />}></Route>
      <Route path = '/' element={<Signup />} />
      <Route path = '/forgot-password' element = {<ForgotPassword />}></Route>
      <Route path = '/reset-password/:id/:token' element = {<ResetPassword />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
