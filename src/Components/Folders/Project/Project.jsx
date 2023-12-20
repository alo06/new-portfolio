import React from 'react'
import './Project.css'
import TitleBar from '../TitleBar/TitleBar'
import { projectData } from '../../../data.jsx'
import SingleProject from './SingleProject'


const Project = ({project,setProject}) => {
  return (
    <div className={project ? "project" : "close"}>
      <TitleBar title="Project" onToggle={() => setProject(!project)} />
      <div className="project-card-container">
        {projectData.map((project) => {
          return <SingleProject key={project.id} project={project} />;
        })}
      </div>
    </div>
  );
}

export default Project