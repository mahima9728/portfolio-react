import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
import "../styles/about.css"; 

const About = () => {
  return (
    <div id="About" className="about-container">
      <div>
        <h2 className="about-header">About Me</h2>
        <div className="about-wrapper">
          <img className="about-image" src={AboutImg} alt="About img" />
          <ul className="about-content">
            <div className="about-item">
              <span className="about-item-text">
                <h1 className="about-item-title">Full Stack developer</h1>
                <p className="about-item-description">
                 I’m a self-taught developer who kicked off my coding journey in mid-2022 and haven’t looked back since.
                 <br/>
                 <br/>
                 Favourite language: Javascript || Favourite stack: MERN (Node, React and Mongo Express)
                </p>
                <p className="about-item-description">
                  I’m all about creating stuff that lives on the web. Whether that’s a sleek website, an intuitive application, or anything in between. My goal? To craft seamless, pixel-perfect experiences that don’t just look good but perform like a charm.
                </p>
              
                <p className="about-item-description">
                 The best part about what I do? It’s a constant learning curve. I’m always hunting for new ways to make my code cleaner, more efficient, and scalable. And I’m a huge believer in the power of collaboration & working with others who can teach me as much as I can learn from them. At the end of the day, my mission is simple: build something beautiful with amazing people who push me to be my best.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
