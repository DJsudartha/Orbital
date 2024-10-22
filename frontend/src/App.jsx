import React from 'react'
import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import MainMenu from './mainMenuRil/MainMenu.jsx'
import { UserProvider } from './UserContext.jsx'
import { UserJourneyProvider } from './Features/MusicStarterJourney/UserJourneyContext.jsx'

// from the metronome
import Home from './Features/Metronome/pages/Home.jsx'
import AddSong from './Features/Metronome/pages/AddSong.jsx'
import SongList from './Features/Metronome/pages/SongList.jsx'
import EditSong from './Features/Metronome/pages/EditSong.jsx'
import DeleteSong from './Features/Metronome/pages/DeleteSong.jsx'

// from music starter journey
import MusicStarterHome from './Features/MusicStarterJourney/Pages/MusicStarterHome.jsx'
import Journey from './Features/MusicStarterJourney/Pages/Journey.jsx'
import TestInterface from './Features/MusicStarterJourney/Pages/TestInterface.jsx'

// from Login Page
import Signup from './Features/LoginPage/Signup.jsx'
import Login from './Features/LoginPage/Login.jsx'
import ForgotPassword from './Features/LoginPage/ForgotPassword.jsx'
import ResetPassword from './Features/LoginPage/ResetPassword.jsx'
import ProfileMaker from './Features/LoginPage/ProfileMaker.jsx'
import ProfilePage from './Features/LoginPage/ProfilePage.jsx'

// editing the loading spinner
import WholePageSpinner from './components/Utility/WholePageSpinner.jsx'

// from Game
import GameEasy from './Features/rhythmGame/GameEasy.jsx'
import GameMedium from './Features/rhythmGame/GameMedium.jsx'
import GameHard from './Features/rhythmGame/GameHard.jsx'
import GameMenu from './Features/rhythmGame/GameMenu.jsx'

function App() {
  return (
    <UserProvider>
      <UserJourneyProvider>
        <Routes>
          <Route path='/main-menu' element={<MainMenu />} />
          <Route path= '/' element={<Signup />} />

          <Route path='/metronome' element={<Home />} />
          <Route path='/metronome/addSong' element={<AddSong />} />
          <Route path='/metronome/songList' element={<SongList />} />
          <Route path='/metronome/songList/editSong/:id' element={<EditSong />} />
          <Route path='/metronome/songList/deleteSong/:id' element={<DeleteSong />} />

          <Route path='/MusicStarterJourney' element={<MusicStarterHome />} />
          <Route path='/MusicStarterJourney/:id' element={<Journey />}> </Route>
          <Route path='/MusicStarterJourney/Journey/Unit/:id' element={<TestInterface />} />

          <Route path='/register' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/forgot-password' element={<ForgotPassword />}></Route>
          <Route path='/reset-password/:id/:token' element={<ResetPassword />}></Route>
          <Route path='/profile-maker/:id' element={<ProfileMaker />}></Route>
          <Route path='/profile-page/:id' element={<ProfilePage />}></Route>

          <Route path='/game-easy' element={<GameEasy />}></Route>
          <Route path='/game-medium' element={<GameMedium />}></Route>
          <Route path='/game-hard' element={<GameHard />}></Route>
          <Route path='/game-menu' element={<GameMenu />}></Route>

          <Route path='/dev' element={<WholePageSpinner />}></Route>

        </Routes>
      </UserJourneyProvider>
    </UserProvider>
  )
}

export default App