import React from "react";
import TitleBar from "../TitleBar/TitleBar";
import "./Skills.css";

const Skills = ({ skills, setSkills }) => {
  return (
    <div className={skills ? "skills" : "close"}>
      <TitleBar
        title="Skills"
        onToggle={() => {
          setSkills(false);
        }}
      />
    </div>
  );
};

export default Skills;
