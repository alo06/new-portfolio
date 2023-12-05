import React from 'react'
import './About.css'

const About = ({about,setAbout}) => {
  return (
    <div className={about ? "about" : "close"}>
      <div className="windows-titlebar">
        <div className="windows-title">About</div>
        <div className="windows-buttons">
          <div class="windows-button" style={{ backgroundColor: "#BABABA" }}>
            _
          </div>
          <div class="windows-button" style={{ backgroundColor: "red" }} onClick={()=>{setAbout(false)}}>
            X
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
