import React from 'react'

const SingleProject = ({project}) => {
  const {id,name,image,details,tech,link,live} = project
 
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={name} />
      </div>
      <div className="project-details">
        <h3>{name}</h3>
        <p>{details}</p>
        <p>
          <strong>Tech Stack:</strong> {tech}
        </p>
        <div className="project-links">
          <a href={link}>
            GitHub Link
          </a>
          <a href={live}>
            Live Page
          </a>
        </div>
      </div>
    </div>
  );
}

export default SingleProject