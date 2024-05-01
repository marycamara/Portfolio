import React from 'react';

function NavBar() {
  return (
    <div>
      <div className="topnav">
        <div className="topnav-right">
          <a className="active" href="index.html">Home</a>
          <a href="#about-me">About Me</a>
          <a href="#projects">Projects</a>
          <a href="contact.html">Contact</a>
        </div>
      </div>
      <header>Mary Camara</header>
    </div>
  );
}

export default NavBar;
