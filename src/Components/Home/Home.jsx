import React from "react";
import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChange from "../TextChange";
import "../styles/home.css"; 

const Home = () => {
  const scrollToFooter = () => {
    const footerElement = document.getElementById("Footer");
    window.scrollTo({
      top: footerElement.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="home-container">
      <div className="home-left">
        <h1 className="home-title">
          <TextChange />
        </h1>
        <p className="home-description">
         A passionate Full Stack Developer with experience in creating dynamic and responsive web applications. With a strong foundation in JavaScript, React.js, and backend technologies, I strive to deliver intuitive user experiences and impactful solutions.
        </p>
        <button className="home-button" onClick={scrollToFooter}>
          Contact Me
        </button>
      </div>
      <div>
        <img src={avatarImg} alt="Avatar" />
      </div>
    </div>
  );
};

export default Home;
