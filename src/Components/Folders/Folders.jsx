import React, { useState } from 'react'
import folderIcon from "../../assets/images/FolderImages/folder.png";
import '../Folders/Folders.css'
import About from './About/About'
import Project from './Project/Project'
import questionMark from '../../assets/images/FolderImages/questionMark.png'
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import mail from "../../assets/images/FolderImages/mail.png";
import { useGlobalContext } from '../../Context';

const Folders = () => {
  const {about,setAbout,project,setProject,skills,setSkills,contact,setContact} = useGlobalContext()
  return (
    <div className="folder">
      <div className="folder-container">
        <About/>
        <img
          src={questionMark}
          alt=""
          id="about"
          onDoubleClick={() => {
            setAbout(!about);
          }}
        />
        <p>About</p>
      </div>
      <div className="folder-container">
        <Project />
        <img
          src={folderIcon}
          alt=""
          onDoubleClick={() => {
            setProject(!project);
          }}
        />
        <p>Project</p>
      </div>
      <div className="folder-container">
        <Skills/>
        <img src={folderIcon} alt="" onDoubleClick={() => setSkills(!skills)} />
        <p>Skills</p>
      </div>
      <div className="folder-container">
        <Contact/>
        <img
          src={mail}
          alt=""
          onDoubleClick={() => {
            setContact(!contact);
          }}
        />
        <p>Contact</p>
      </div>
    </div>
  );
}

export default Folders