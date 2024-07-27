import {React, useEffect} from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { useNavigate } from "react-router-dom";

function GameEasy() {
  const { unityProvider,unload } = useUnityContext({
    loaderUrl: "./Game%20Unity%20Stuff/ReVerb%20Game.loader.js",
    dataUrl: "./Game%20Unity%20Stuff/ReVerb%20Game.data.unityweb",
    frameworkUrl: "./Game%20Unity%20Stuff/ReVerb%20Game.framework.js.unityweb",
    codeUrl: "./Game%20Unity%20Stuff/ReVerb%20Game.wasm.unityweb",
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
