import React, { useState } from 'react'
import folderIcon from '../../assets/images/folder.png'
import '../Folders/Folders.css'
import About from './About/About'


const Folders = () => {
  const [about,setAbout] = useState(false);
  const [project,setProject] = useState(false);

  return (
    <div className="folder">
      <div className="folder-container">
        <About about={about} setAbout={setAbout}/>
        <img
          src={folderIcon}
          alt=""
          id="about"
          onDoubleClick={() => {
            setAbout(!about);
          }}
        />
        <p>About</p>
      </div>
      <div className="folder-container">
        <img src={folderIcon} alt="" />
        <p>About</p>
      </div>
      <div className="folder-container">
        <img src={folderIcon} alt="" />
        <p>About</p>
      </div>
      <div className="folder-container">
        <img src={folderIcon} alt="" />
        <p>About</p>
      </div>
    </div>
  );
}

export default Folders