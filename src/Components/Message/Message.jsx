import React, { useState } from 'react'
import './Message.css'
import mouseClick from "../../assets/images/MouseClick.mp3";
import computer from '../../assets/images/computer.png'


const Message = () => {
  const [close,setClose] = useState(false);
  return (
    <div className={close ? "close" : "message-container"}>
      {close && <audio src={mouseClick} autoPlay className='audio'/>}
      <div className="message-container-top">
        <p>message</p>
        <button className="message-btn" onClick={() => setClose(!close)}>
          X
        </button>
      </div>
      <div className="message-container-bottom">
        <img src={computer} alt="" />
        <div className="message-container-bottom-content">
          <p>Welcome to my portfolio</p>
          <button onClick={() => setClose(!close)}>Proceed</button>
        </div>
      </div>
    </div>
  );
}

export default Message