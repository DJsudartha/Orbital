import {React, useEffect, useState} from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { useNavigate } from "react-router-dom";
import { useUser } from '../../UserContext'
import axios from 'axios'
import { baseURL } from '../..'


function GameEasy() {
  const id = useUser();
  const { unityProvider,unload } = useUnityContext({
    loaderUrl: "./EasyGameBuild/Reverb%20Game%20Easy.loader.js",
    dataUrl: "./EasyGameBuild/Reverb%20Game%20Easy.data.unityweb",
    frameworkUrl: "./EasyGameBuild/Reverb%20Game%20Easy.framework.js.unityweb",
    codeUrl: "./EasyGameBuild/Reverb%20Game%20Easy.wasm.unityweb",
  });

  const navigate = useNavigate();

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
  };

  const buttonStyle = {
    position: 'absolute',
    top: '10px',
    left: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#17a2b8',
    color: 'white'
  };

  useEffect(() => {
    return () => {
      unload();
    };
  }, [unload]);


  useEffect(() => {
    window.receiveMessageFromUnity = (msg) => {
      axios.post(`${baseURL}/verification/game-easy`, { msg, id })
            .catch(err => console.log(err))
    }
  },[])

  return (
    <div style={containerStyle}>
      <button style={buttonStyle} onClick={() => navigate('/main-menu')}>
        Back to Main Menu
      </button>
      <Unity unityProvider={unityProvider} style={{ width: 1000, height: 700 }} />
    </div>
  );
}

export default GameEasy;
