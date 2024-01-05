import React from 'react'
import './About.css'
import pfp from '../../../assets/images/pfp.jpg'
import Education from './Education'
import { educationData } from '../../../data.jsx'
import TitleBar from '../TitleBar/TitleBar.jsx'
import { useGlobalContext } from '../../../Context.jsx'
import Navigation from '../Navigation/Navigation.jsx'


const About = () => {
  const {about,setAbout} = useGlobalContext()
  return (
    <div className={about ? "about" : "close"}>
      <TitleBar title="About" onToggle={() => setAbout(!about)} />
      <div className="split">
        <Navigation/>
        <div className="about-content">
          <div className="about-content-para">
            Hello! My Name is Jeevottam Bhat. I am in my 4th year of Engineering
            in NMAM Institute of Technology, NITTE. My Interests are Web
            Development, watching football, playing games like Valorant ,CSGO
            with friends. Also love listening to Music with Rap,Hip Hop being my
            favorite genres.
            <Education educationData={educationData} />
          </div>
          <div className="about-content-img">
            <img src={pfp} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
