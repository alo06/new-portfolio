import React from 'react'
import './Skills.css'

const SingleSkills = ({category,skills}) => {
  return (
    <div className="skills-category">
      <h2>{category}</h2>
      {skills.map((skill, index) => (
        <div className="skill" key={index}>
          <img src={skill.image} alt={skill.name} />
        </div>
      ))}
    </div>
  );
}

export default SingleSkills
