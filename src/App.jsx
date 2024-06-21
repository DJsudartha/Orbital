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
import Tester from './Features/MusicStarterJourney/Tester.jsx'
import MusicStarterHome from './Features/MusicStarterJourney/Pages/MusicStarterHome.jsx'
import Journey from './Features/MusicStarterJourney/Pages/Journey.jsx'
import AudioTest from './Features/MusicStarterJourney/Pages/AudioTest.jsx'
import VisualTest from './Features/MusicStarterJourney/Pages/VisualTest.jsx'
import RhythmTest from './Features/MusicStarterJourney/Pages/RhythmTest.jsx'

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
      <Route path='/MusicStarterJourney/Journey/AudioTest/:id' element={<AudioTest />} />
      <Route path='/MusicStarterJourney/Journey/VisualTest/:id' element={<VisualTest />} />
      <Route path='/MusicStarterJourney/Journey/RhythmTest/:id' element={<RhythmTest />} />

    </Routes>
  )
}

export default App