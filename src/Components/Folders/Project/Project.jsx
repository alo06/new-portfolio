import React from 'react'
import './Project.css'
import TitleBar from '../TitleBar/TitleBar'

const Project = ({project,setProject}) => {
  return (
    <div className={project ? 'project':'close'}>
        <TitleBar title='Project' onToggle={()=>setProject(!project)}/>
    </div>
  )
}

export default Project