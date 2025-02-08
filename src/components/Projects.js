import React from 'react';
import "../styles/project.css";  // Assuming you have a CSS file for styles
import innerDivide from "../assets/innerDivide.png";
import beaBot from "../assets/beaBot.png";
import mcamara from "../assets/mcamara.png";

// this is the github link icon for all of the project
import githubIcon from "../assets/githubIcon.png";


function Projects() {
  return (
    <section id="projects">
      <h1 className="project-section">Projects</h1>
      <section className="project-creation-navigation">
        <div className="tech-creation"></div>
        <div className="grid-wrapper">

          <div className="grid-item">
            <img src={mcamara} alt="Portfolio Website" className="profile-img" />
            <h2 className="name">Portfolio Website</h2>
            <p className="description">Explore my personal website, where you are currently visiting!</p>
            <h3 className="programming-language">Built with HTML & CSS</h3>
            <a href="https://github.com/marycamara/Bea-Bot" target="_blank">
              <img src={githubIcon} alt="GitHub" className="github-icon" />
            </a>
          </div>

          <div className="grid-item">
            <img src={beaBot} alt="Bea Bot" className="profile-img" />
            <h2 className="name">Bea Bot</h2>
            <p className="description">
              Bea Bot is an alien bot that has come to Earth to help you keep track of your daily tasks in exchange for human knowledge.
            </p>
            <h3 className="programming-language">Python</h3>
            <a href="https://github.com/marycamara/Bea-Bot" target="_blank">
              <img src={githubIcon} alt="GitHub" className="github-icon" />
            </a>
          </div>

          <div className="grid-item">
            <img src={innerDivide} alt="Inner Divide" className="profile-img" />
            <h2 className="name">Inner Divide</h2>
            <p className="description">A text-based game that is determined by the user's choice of direction.</p>
            <h3 className="programming-language">C++</h3>
            <a href="https://github.com/marycamara/Bea-Bot" target="_blank">
              <img src={githubIcon } alt="GitHub" className="github-icon" />
            </a>
          </div>

         

        </div>
      </section>
    </section>
  );
}

export default Projects;
