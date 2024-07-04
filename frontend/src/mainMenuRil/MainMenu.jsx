import React from 'react'
import Menu from '../components/MainMenu/Menu'
import NavBar from '../components/MainMenu/NavBar'
import './MainMenu.css'

const MainMenu = () => {
  return (
    <div className='h-100'>
      <NavBar />
      <Menu />
    </div>

  )
}

export default MainMenu