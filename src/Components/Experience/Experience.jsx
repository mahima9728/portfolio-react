import React from "react";
import { FaCss3,  FaHtml5, FaJs, FaReact, FaGoogle, FaAmazon } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import "../styles/experience.css"; 

const Experience = () => {
  return (
    <div id="Experience" className="experience-container">
      <h1 className="experience-header">Experience</h1>
      <div className="experience-wrapper">
        <div className="skill-container">
      
          <span className="skill-icon">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="skill-icon">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="skill-icon">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="skill-icon">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="skill-icon">
            <FaCss3 color="#1572B6" size={50} />
          </span>
        </div>
        <br/>
        <div className="company-container">
          <div className="company-item">
          
            <span className="company-info">
              <h2 className="company-title">Full Stack Developer, Inviolate Technologies</h2>
              <p className="company-duration">January 2023 - Present</p>
              <ul className="company-description">
                <li>Learned both front-end and back-end</li>
              </ul>
            </span>
          </div>
          {/* <div className="company-item">
            <RiNetflixFill className="company-icon" color="#E50914" />
            <span className="company-info">
              <h2 className="company-title">Software Engineer, Netflix</h2>
              <p className="company-duration">Sept 2023 - Present</p>
              <ul className="company-description">
                <li>- Work as software developer.</li>
                <li>- Senior SDE-developer</li>
              </ul>
            </span>
          </div> */}

          <br/>
          <div className="company-item">
            <span className="company-info">
              <h2 className="company-title">Full Stack Developer, JobSequel.in</h2>
              <p className="company-duration">August 2022 - December 2023</p>
              <ul className="company-description">
                <li>Worked as Full Stack inter and then received fulltime as a developer.</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
