import React from 'react';
import "../styles/project.css";  // Assuming you have a CSS file for styles

function Projects() {
  return (
    <div>
      <h1 className="project-title">Projects</h1>
      <section className="project-creation-navigation">
        <div className="tech-creation"></div>

        <div className="grid-wrapper">
          <div className="grid-item">
            <img src="images/BeaBot.png" alt="Bea Bot" className="profile-img" />
            <h2 className="name">Bea Bot</h2>
            <p className="description">
              A bot alien bot that has come to earth will help you keep track of your daily tasks in exchange for human knowledge.
            </p>
            <h3 className="programming-language">Python</h3>
            <a href="https://github.com/marycamara/Bea-Bot" target="_blank" rel="noopener noreferrer">
              <img src="images/github-icon.png" alt="GitHub" className="github-icon" />
            </a>
          </div>

          <div className="grid-item">
            <img src="images/personal-webiste2.png" alt="Personal Website" className="profile-img" />
            <h2 className="name">Personal Website</h2>
            <p className="description">My personal website which you are currently on.</p>
            <h3 className="programming-language">HTML & CSS</h3>
            <a href="https://github.com/marycamara/Bea-Bot" target="_blank" rel="noopener noreferrer">
              <img src="images/github-icon.png" alt="GitHub" className="github-icon" />
            </a>
          </div>

          <div className="grid-item">
            <img src="images/snake-crush2.png" alt="Snake Crush" className="profile-img" />
            <h2 className="name">Snake Crush</h2>
            <p className="description">A snake game that allows users to write a message to their crush.</p>
            <h3 className="programming-language">Python</h3>
            <a href="https://github.com/marycamara/Bea-Bot" target="_blank" rel="noopener noreferrer">
              <img src="images/github-icon.png" alt="GitHub" className="github-icon" />
            </a>
          </div>

          <div className="grid-item">
            <img src="images/Lilac_Books.png" alt="Little Lilac Books" className="profile-img" />
            <h2 className="name">Little Lilac Books</h2>
            <p className="description">A mail service that sends details of new books to readers who are subscribed every week.</p>
            <h3 className="programming-language">Python</h3>
            <a href="https://github.com/marycamara/Bea-Bot" target="_blank" rel="noopener noreferrer">
              <img src="images/github-icon.png" alt="GitHub" className="github-icon" />
            </a>
          </div>

          <div className="grid-item">
            <img src="images/pick-me2.png" alt="Pick Me" className="profile-img" />
            <h2 className="name">Pick Me</h2>
            <p className="description">An automating decision-making tool that helps you decide on what book you want to currently read.</p>
            <h3 className="programming-language">Python</h3>
            <a href="https://github.com/marycamara/Bea-Bot" target="_blank" rel="noopener noreferrer">
              <img src="images/github-icon.png" alt="GitHub" className="github-icon" />
            </a>
          </div>

          <div className="grid-item">
            <img src="images/innerdivide-2.png" alt="Inner Divide" className="profile-img" />
            <h2 className="name">Inner Divide</h2>
            <p className="description">A text-based game that is determined by the user's choice of direction.</p>
            <h3 className="programming-language">C++</h3>
            <a href="https://github.com/marycamara/Bea-Bot" target="_blank" rel="noopener noreferrer">
              <img src="images/github-icon.png" alt="GitHub" className="github-icon" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
