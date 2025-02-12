import React from "react";
import "../styles/home.css";
import "../styles/about.css";
//import Skills from "./Skills";
import mainphoto from "../assets/mainphoto.jpg";

function About() {
    return (
        <>
            <section id="about-me">
                <h1 className="aboutme-section">About Me</h1>
                <div className="about-me">
                    <img src={mainphoto} className="personal-img" alt="Mary Camara" />
                    <div className="about-me-paragraph">
                    
                        <p className="about-me-text">
                            I am a Software Engineer at the BBC, where I contribute to building innovative digital solutions that enhance user experiences. 
                            I work with cutting-edge technologies to develop scalable and high-performance applications that serve millions of users.
                        </p>
                        {/* Skills List */}
                          <p className="skill-text"> technologies i have worked with. </p>
                        <div className="skills-list">
                            <span className="skill">Python</span>
                            <span className="skill">Java</span>
                            <span className="skill">C++</span>
                            <span className="skill">JavaScript ES6</span>
                            <span className="skill">React.js</span>
                            <span className="skill">TypeScript</span>
                        </div>
                    </div>
                </div>
               
            </section>
        </>
    );
}

export default About;
