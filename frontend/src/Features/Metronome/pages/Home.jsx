import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import FormRange from 'react-bootstrap/esm/FormRange'
import Metronome from '../../../components/Metronome/Metronome'
import { useUser } from '../../../UserContext'

const Home = () => {
  // I know this code is shit ;_;
  // get the userID to identif what songs belong to what user
  const User_id = useUser();
  console.log(User_id);

  /* checks if props are passed from other components, if there are props
      update, if not stay with the default, sort of shit and I think the only
      way for the data to persist (IIRC) is to keep on passing state around */
  const [songData, setSongData] = useState(useLocation().state === null
    ? { // default value
      Title: "",
      Artist: "",
      Tempo: 130,
      TimeSignature: "4/4",
      User_id: User_id
    }
    : useLocation().state
  );

  // can try using [name], but idk how to do that with react bootstrap
  const handleSongDataChange = (id, value) => {
    if (id === "tempoRange") {
      setSongData((previousSongData) => {
        return {
          ...previousSongData,
          Tempo: value
        }
      });
    } else if (id === "timeSignatureDropDown") {
      setSongData((previousSongData) => {
        return {
          ...previousSongData,
          TimeSignature: value
        }
      });
    } else if (id === "songTitleForm") {
      setSongData((previousSongData) => {
        return {
          ...previousSongData,
          Title: value
        }
      });
    } else if (id === "songArtistForm") {
      setSongData((previousSongData) => {
        return {
          ...previousSongData,
          Artist: value
        }
      });
    }
  }

  return (
    <div className="container h-100 w-100 px-3 py-1">

      <div style={{ height: "92%" }}>
        <div className="row align-items-center py-5">
          <div className='col d-flex justify-content-center fs-3'>
            {songData.Title}
          </div>
        </div>

        <div className='row h-75'>
          <Metronome songData={songData} handleSongDataChange={handleSongDataChange} />
        </div>
      </div>

      <div className='row pt-3'>
        <div className='col d-flex align-items-center justify-content-center'>
          <Link to='/'>
            <i className="bi bi-house-fill h1" />
          </Link>
        </div>
        <div className='col d-flex align-items-center justify-content-center'>
          <Link to='/metronome/addSong' state=
            {
              songData
              // I want to try to pass the function with params in object but cant
            }
          >
            <i className="bi bi-plus-square-fill h1" />
          </Link>
        </div>
        <div className='col d-flex align-items-center justify-content-center'>
          <Link to='/metronome/songList'>
            <i className="bi bi-list h1" />
          </Link>
        </div>
      </div>

    </div>

  )
}

export default Home