import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import "../styles/footer.css"; 

const Footer = () => {
  return (
    <div id="Footer" className="footer-container">
      <div>
        <h1 className="footer-header">Contact</h1>
        <h3 className="footer-subheader">Feel Free To reach out!</h3>
      </div>

      <ul className="footer-links">
        <li className="footer-link-item">
          <MdOutlineEmail size={20} />
          <a href="mailto:rawatmahima28@gmail.com" className="footer-link">
            rawatmahima28@gmail.com
          </a>
        </li>

        <li className="footer-link-item">
          <CiLinkedin />
          <a 
            href="https://www.linkedin.com/in/mahima-rawat-7a69b8290/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link"
          >
            linkedin.com/in/Mahima-Rawat
          </a>
        </li>

        <li className="footer-link-item">
          <FaGithub />
          <a 
            href="https://github.com/mahima9728" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link"
          >
            github.com/mahima9728
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
