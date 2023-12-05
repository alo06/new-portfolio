import { useEffect, useState } from 'react'
import Message from './Components/Message/Message'
import Taskbar from './Components/Taskbar/Taskbar'
import Folders from './Components/Folders/Folders';
import ReactAudioPlayer from "react-audio-player";
import startupImage from './assets/images/startupImage.png'
import windowsMp3 from './assets/images/windows.mp3'


function App() {
  const [isLoading,setIsLoading] = useState(false);

  useEffect(()=>{
    setIsLoading(true);
    setTimeout(()=>{
      setIsLoading(false)
    },4000)
  },[])

  return isLoading ? (
    <div className="landing">
      <audio src={windowsMp3} autoPlay/>
      <img src={startupImage} alt="" />
    </div>
  ) : (
    <div className="main-container">
      <Message />
      <Folders />
      <Taskbar />
    </div>
  );
}

export default App
