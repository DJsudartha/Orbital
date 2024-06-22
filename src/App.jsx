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
      <Route path='/MusicStarterJourney/Journey' element={<Journey />} />
      {/*Mayhaps use the above line as a parennt to the rest of the routes below
      and then wrap necessary components in a div that has the navbar so 
      theres no need to copy it around */}
      <Route path='/MusicStarterJourney/Journey/Unit/:id' element={<TestInterface/>} />

    </Routes>
  )
}

export default App