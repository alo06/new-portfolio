import React from 'react'
import './About.css'

const About = ({about,setAbout}) => {
  return (
    <div className={about ? 'about':'close'}>
      <h1>About</h1>
      <button onClick={()=>setAbout(!about)}>X</button>
    </div>
  )
}

export default About
