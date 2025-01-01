import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import "../styles/navbar.css";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);

  return (
    <nav className="navbar">
      <span className="navbar-logo">Portfolio</span>

      <ul
        className={`navbar-links ${menu ? "show" : ""}`}
      >
        <a href="#About">
          <li>About</li>
        </a>
        <a href="#Experience">
          <li>Experience</li>
        </a>
        <a href="#Projects">
          <li>Projects</li>
        </a>
        <a href="#Footer">
          <li>Contact</li>
        </a>
      </ul>

      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="hamburger-menu"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="hamburger-menu-close"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
