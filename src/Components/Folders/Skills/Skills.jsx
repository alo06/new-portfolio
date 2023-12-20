import React from "react";
import TitleBar from "../TitleBar/TitleBar";
import "./Skills.css";
import SingleSkills from "./SingleSkills";
import { languages } from "../../../data";
import { techStack } from "../../../data";

const Skills = ({ skills, setSkills }) => {
  return (
    <div className={skills ? "skills" : "close"}>
      <TitleBar
        title="Skills"
        onToggle={() => {
          setSkills(false);
        }}
      />
      <SingleSkills category="Languages" skills={languages}/>
      <SingleSkills category="Tech Stack" skills={techStack}/>
    </div>
  );
};

export default Skills;
