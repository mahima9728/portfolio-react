import React from "react";
import ProjectCard from "./ProjectCard";
import "../styles/projects.css"; 

import rpsImg from "../../assets/rps.webp"
import youtubeImg from "../../assets/youtube.webp";
import digitalclock from "../../assets/digitalclock.webp"

const Projects = () => {
  return (
    <div id="Projects" className="projects-container">
    <h1 className="projects-header">Projects</h1>
      <div className="projects-wrapper">
        <ProjectCard
          image={digitalclock}
          title="React-mini-projects"
          main="These are some beginner projects for react. Using Hooks, Routing."
          link={'https://mahima9728.github.io/React-mini-projects/'}
        />
        <br/>
        <ProjectCard
          image={rpsImg}
          title="Rock-Paper-Scissors Game"
          main="This is a Rock-Paper-Scissors Game created using JavaScript."
          link={'https://mahima9728.github.io/Rock_Paper_Scissor_JS/'}
        />
        <br/>
        <ProjectCard
          image={youtubeImg}
          title="YouTube Clone"
          main="This is a static YouTube home created using HTML and CSS."
          link={'https://mahima9728.github.io/html_css_youtube/'}
        />
        <br/>
        
      </div>
    </div>
  );
};

export default Projects;
