import React, { useState } from 'react'
import folderIcon from "../../assets/images/FolderImages/folder.png";
import '../Folders/Folders.css'
import About from './About/About'
import Project from './Project/Project'
import questionMark from '../../assets/images/FolderImages/questionMark.png'
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';

const Folders = () => {
  const [about,setAbout] = useState(false);
  const [project,setProject] = useState(false);
  const [skills,setSkills] = useState(false);
  const [contact,setContact] = useState(false);

  return (
    <div className="folder">
      <div className="folder-container">
        <About about={about} setAbout={setAbout}/>
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
        <Project project={project} setProject={setProject}/>
        {console.log(project)}
        <img src={folderIcon} alt="" onDoubleClick={()=>{setProject(!project)}}/>
        <p>Project</p>
      </div>
      <div className="folder-container">
        <Skills skills={skills} setSkills={setSkills}/>
        <img src={folderIcon} alt="" onDoubleClick={()=>setSkills(!skills)}/>
        <p>Skills</p>
      </div>
      <div className="folder-container">
        <Contact contact={contact} setContact={setContact}/>
        <img src={folderIcon} alt="" onDoubleClick={()=>{setContact(!contact)}}/>
        <p>Contact</p>
      </div>
    </div>
  );
}

export default Folders