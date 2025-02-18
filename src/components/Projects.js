import React from 'react';
import "../styles/project.css";  
import innerDivide from "../assets/innerDivide.png";
import beaBot from "../assets/beaBot.png";
import mcamara from "../assets/mcamara.png";
import launchIcon from "../assets/launchIcon.png";
import githubIcon from "../assets/githubIcon.png";

function Projects() {
  return (
    <section id="projects">
      <h1 className="project-section">Projects</h1>
      <section className="project-creation-navigation">
        <div className="tech-creation"></div>
        <div className="grid-wrapper">

          {/* Portfolio Website Project */}
          <div className="grid-item">
            <img src={mcamara} alt="Portfolio Website" className="profile-img" />
            <h2 className="name">Portfolio Website</h2>
            <p className="description">Explore my personal website, where you are currently visiting!</p>
            <h3 className="programming-language"> HTML | CSS | JS | React.js </h3>

            <div className="project-link">
              <a href="https://your-live-project-link.com" target="_blank">
                <img src={launchIcon} alt="Launch" className="launch-icon"/>
              </a>
              <a href="https://github.com/marycamara/Bea-Bot" target="_blank">
                <img src={githubIcon} alt="GitHub" className="github-icon" />
              </a>
            </div>
          </div>

          {/* Blackjack Project */}
          <div className="grid-item">
            <img src={beaBot} alt="Blackjack Game" className="profile-img" />
            <h2 className="name">Blackjack</h2>
            <p className="description">A Blackjack game featuring card dealing, hit/stand mechanics, and win conditions.</p>
            <h3 className="programming-language"> Python | React.js | Flask </h3>

            <div className="project-link">
              <a href="https://your-live-project-link.com" target="_blank">
                <img src={launchIcon} alt="Launch" className="launch-icon"/>
              </a>
              <a href="https://github.com/marycamara/Bea-Bot" target="_blank">
                <img src={githubIcon} alt="GitHub" className="github-icon" />
              </a>
            </div>
          </div>

          {/* Inner Divide Project */}
          <div className="grid-item">
            <img src={innerDivide} alt="Inner Divide" className="profile-img" />
            <h2 className="name">Inner Divide</h2>
            <p className="description">A text-based game that is determined by the user's choice of direction.</p>
            <h3 className="programming-language">C++</h3>

            <div className="project-link">
              <a href="https://your-live-project-link.com" target="_blank">
                <img src={launchIcon} alt="Launch" className="launch-icon"/>
              </a>
              <a href="https://github.com/marycamara/Bea-Bot" target="_blank">
                <img src={githubIcon} alt="GitHub" className="github-icon" />
              </a>
            </div>
          </div>

           {/* Pending project */}
          <div className="grid-item">
            <img src={innerDivide} alt="Inner Divide" className="profile-img" />
            <h2 className="name"> Book AI project </h2>
            <p className="description"> pending description when the project starts </p>
            <h3 className="programming-language">C++</h3>

            <div className="project-link">
              <a href="https://your-live-project-link.com" target="_blank">
                <img src={launchIcon} alt="Launch" className="launch-icon"/>
              </a>
              <a href="https://github.com/marycamara/Bea-Bot" target="_blank">
                <img src={githubIcon} alt="GitHub" className="github-icon" />
              </a>
            </div>
          </div>

        </div>
      </section>
    </section>
  );
}

export default Projects;
