import React from 'react'
import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import MainMenu from './mainMenuRil/MainMenu.jsx'

// from the metronome
import Home from './Features/Metronome/frontend/src/pages/Home.jsx'
import AddSong from './Features/Metronome/frontend/src/pages/AddSong.jsx'
import SongList from './Features/Metronome/frontend/src/pages/SongList.jsx'
import EditSong from './Features/Metronome/frontend/src/pages/EditSong.jsx'
import DeleteSong from './Features/Metronome/frontend/src/pages/DeleteSong.jsx'

// from music starter journey
import MusicStarterHome from './Features/MusicStarterJourney/Pages/MusicStarterHome.jsx'
import Journey from './Features/MusicStarterJourney/Pages/Journey.jsx'
import TestInterface from './Features/MusicStarterJourney/Pages/TestInterface.jsx'

// from Login Page
import Signup from './Features/LoginPage/src/Signup.jsx'
import Login from './Features/LoginPage/src/Login.jsx'
import Homepage from './Features/LoginPage/src/Homepage.jsx'
import ForgotPassword from './Features/LoginPage/src/ForgotPassword.jsx'
import ResetPassword from './Features/LoginPage/src/ResetPassword.jsx'

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainMenu />} />

      <Route path='/metronome' element={<Home />} />
      <Route path='/metronome/addSong' element={<AddSong />} />
      <Route path='/metronome/songList' element={<SongList />} />
      <Route path='/metronome/songList/editSong/:id' element={<EditSong />} />
      <Route path='/metronome/songList/deleteSong/:id' element={<DeleteSong />} />

      <Route path='/MusicStarterJourney' element={<MusicStarterHome />} />
      <Route path='/MusicStarterJourney/Journey' element={<Journey />}> </Route>
      <Route path='/MusicStarterJourney/Journey/Unit/:id' element={<TestInterface/>} />

      <Route path = '/register' element = {<Signup />}></Route>
      <Route path = '/login' element = {<Login />}></Route>
      <Route path = '/home' element = {<Homepage />}></Route>
      <Route path = '/forgot-password' element = {<ForgotPassword />}></Route>
      <Route path = '/reset-password/:id/:token' element = {<ResetPassword />}></Route>

    </Routes>
  )
}

export default App