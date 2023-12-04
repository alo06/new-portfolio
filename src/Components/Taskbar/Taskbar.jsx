import React, { useEffect, useState } from 'react'
import './Taskbar.css'
import { social } from '../../data.jsx'
import { SiWindows95 } from "react-icons/si";
import { GiSpeakerOff, GiSpeaker } from "react-icons/gi";
import ReactAudioPlayer from "react-audio-player";
import pinball from '../../assets/images/pinball.mp3'

const Taskbar = () => {
  const [time,setTime] = useState(new Date());
  const [sound,setSound] = useState(true);

  useEffect(()=>{
    setInterval(()=>{
        setTime(new Date())
    },1000)
  },[])

  return (
    <div className="taskbar">
      {sound && <ReactAudioPlayer src={pinball} autoPlay={true} volume={0.1} />}
      <div className="taskbar-first">
        <button
          onClick={() => {
            window.location.reload(true);
          }}
        >
          <SiWindows95 size={30} />
          <p>Start</p>
        </button>
        {social.map((socio) => {
          const { id, url, icon } = socio;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </div>

      <div className="taskbar-second">
        <div className="taskbar-second-icons">
          {sound ? (
            <GiSpeaker
              size={30}
              onClick={() => {
                setSound(!sound);
              }}
            />
          ) : (
            <GiSpeakerOff
              size={30}
              onClick={() => {
                setSound(!sound);
              }}
            />
          )}
        </div>
        <div className="taskbar-second-date">
          <h4>{time.toLocaleDateString()}</h4>
          <h4>{time.toLocaleTimeString()}</h4>
        </div>
      </div>
    </div>
  );
}

export default Taskbar