import React from 'react'
import Menu from './Components/Menu'
import NavBar from './Components/NavBar'
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