import React from "react";
import "../styles/projectcard.css";
const ProjectCard = ({ title, main , image, link }) => {
  return (
    <a href={link} className="project-card-link"  target="_blank" rel="noopener noreferrer">
    <div className="project-card">
      <img className="project-image" src={image} alt={title} />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{main}</p>
      {/* <div className="project-buttons">
        <button className="project-card-btn">Demo</button>
        <button className="project-card-btn">Source Code</button>
      </div> */}
    </div>
    </a>
  );
};

export default ProjectCard;
