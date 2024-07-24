import React, { useContext } from 'react'
import Menu from '../components/MainMenu/Menu'
import NavBar from '../components/MainMenu/NavBar'
import './MainMenu.css'
import WholePageSpinner from '../components/Utility/WholePageSpinner'
import { useUser } from '../UserContext'

const MainMenu = () => {
  const user = useUser();
  console.log("useUser: " + user);
  return (
    <div className='h-100'>
      <NavBar />
      <Menu />
    </div>

  )
}

export default MainMenu