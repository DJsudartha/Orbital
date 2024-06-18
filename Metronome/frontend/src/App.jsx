import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import AddSong from './pages/AddSong'
import SongList from './pages/SongList'
import EditSong from './pages/EditSong'
import DeleteSong from './pages/DeleteSong'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/metronome/addSong' element={<AddSong />} />
      <Route path='/metronome/songList' element={<SongList />} />
      <Route path='/metronome/songList/editSong/:id' element={<EditSong />} />
      <Route path='/metronome/songList/deleteSong/:id' element={<DeleteSong />} />
    </Routes>
  )
}

export default App