import React from 'react';
import "../styles/navbar.css";
import Contacts from "./Contacts";
import HeaderTitle from './HeaderTitle';

function NavBar() {
  return (
    <>
      <div className="topnav">
        {/* Header Title Component */}
        <div className="HeaderTitle">
          <HeaderTitle />
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <a className="active" href="index.html">Home</a>
          <a href="#about-me">About Me</a>
          <a href="#projects">Projects</a>
          <a href="contact.html">Contact</a>
        </div>

        {/* Contact Component */}
        <div className="contact-links">
          <Contacts />
        </div>
      </div>
    </>
  );
}

export default NavBar;
