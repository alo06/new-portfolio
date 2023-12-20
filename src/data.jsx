import { FaGithub, FaLinkedin, FaBluetooth } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

import collegeMap from "./assets/images/ProjectImages/collegemap.jpg";
import EzFit from "./assets/images/ProjectImages/EZ.jpg";
import imageEditor from "./assets/images/ProjectImages/imageEditor.jpg";
import jobify from "./assets/images/ProjectImages/jobfy.jpg";
import portfolio from "./assets/images/ProjectImages/portfolio.png";

import cpp from "./assets/images/Skills/Languages/cpp.png";
import c from "./assets/images/Skills/Languages/c.png";
import java from "./assets/images/Skills/Languages/java.png";
import js from "./assets/images/Skills/Languages/js.png";

import android from "./assets/images/Skills/TechStack/android.png";
import css from "./assets/images/Skills/TechStack/css.png";
import react from "./assets/images/Skills/TechStack/react.png";
import php from "./assets/images/Skills/TechStack/php.png";
import html from "./assets/images/Skills/TechStack/html.png";
import mysql from "./assets/images/Skills/TechStack/mysql.png";

export const social = [
  {
    id: 1,
    url: "https://www.linkedin.com/in/jeevottam-bhat-137a87246/",
    icon: <FaLinkedin size={30} />,
  },
  {
    id: 2,
    url: "https://github.com/alo06",
    icon: <FaGithub size={30} />,
  },
  {
    id: 3,
    url: "https://leetcode.com/jeevo06/",
    icon: <SiLeetcode size={30} />,
  },
  {
    id: 4,
    url: "https://auth.geeksforgeeks.org/user/bhatjeevu06",
    icon: <SiGeeksforgeeks size={30} />,
  },
];

export const educationData = [
  {
    institute: "NMAM Institute Of Technology",
    duration: "2020 - present",
    degree: "Computer Science and Engineering",
    cgpa: "8.8",
  },
  {
    institute: "Sharada Pre University",
    duration: "2018 - 2020",
    degree: "PCMS",
    cgpa: "90%",
  },
];

export const projectData = [
  {
    id: 1,
    name: "College Map",
    image: collegeMap,
    details:
      "Experience seamless navigation through NMAMIT Campus using the College Map- Classroom Finder project.",
    tech: "HTML,CSS,JavaScript,PHP,MySQL",
    link: "https://github.com/alo06/alo06.github.io",
    live: "https://alo06.github.io/",
  },
  {
    id: 2,
    name: "Jobify",
    image: jobify,
    details:
      "Unlock a world of job opportunities with Jobify, the job portal designed with MongoDB, ExpressJS, ReactJS, and NodeJS. Employers enjoy effortless job creation, editing, and deletion, while job seekers find their perfect match. ",
    tech: "MongoDB,ExpressJs,ReactJs,NodeJs",
    link: "https://github.com/alo06/Jobify",
    live: "https://github.com/alo06/Jobify",
  },
  {
    id: 3,
    name: "Ez Fit",
    image: EzFit,
    details:
      "Elevate your fitness journey with EzFit, the ultimate Android app powered by Java, XML, and SQLite. Stay fit on the go as it tracks your calories, offers meal suggestions, exercise routines, and features a handy step counter.",
    tech: "Android,Java,XML,SQLite",
    link: "https://github.com/alo06/fitnessApp",
    live: "https://github.com/alo06/fitnessApp",
  },
  {
    id: 4,
    name: "Image Editor",
    image: imageEditor,
    details:
      "Unleash your creativity with the Image Editor Website, a powerful online tool crafted using HTML, CSS, and JavaScript. Enhance your images with features like brightness, grayscale, and saturation adjustments. Plus, easily resize your images to fit your vision perfectly.",
    tech: "HTML,CSS,JavaScript",
    link: "https://github.com/alo06/Image-Editor",
    live: "https://image-editor-umber.vercel.app/",
  },
  {
    id: 5,
    name: "Portfolio",
    image: portfolio,
    details:
      "Welcome to my Windows XP-inspired portfolio website, crafted with ReactJS and CSS. Take a nostalgic journey through a showcase of my projects and skills, reminiscent of the classic Windows XP era. Explore my web development expertise as I invite you to navigate through this digital space.",
    tech: "ReactJS,CSS",
    link: "https://github.com/alo06/portfolio",
    live: "https://jeevottambhat.vercel.app/",
  },
];

export const languages = [
  {
    id: 1,
    image: cpp,
    name: "cplusplus",
  },
  {
    id: 2,
    image: c,
    name: "c",
  },
  {
    id: 3,
    image: java,
    name: "java",
  },
  {
    id: 4,
    image: js,
    name: "js",
  },
];

export const techStack = [
  {
    id: 5,
    image: html,
    name: "html",
  },
  {
    id: 6,
    image: css,
    name: "css",
  },
  {
    id: 7,
    image: react,
    name: "react",
  },
  {
    id: 8,
    image: php,
    name: "php",
  },
  {
    id: 9,
    image: mysql,
    name: "mysql",
  },
  {
    id: 10,
    image: android,
    name: "android",
  },
];
