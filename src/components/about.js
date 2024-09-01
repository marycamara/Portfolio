import React from "react";
import "../styles/about.css";  // Ensure the path is correct relative to this file

function About() {
    return (
        <section id="about-me">
            <div className="about-me"> 
                <h1 className="aboutme-section">About Me</h1>
                <img src="images/mainphoto.jpg" className="personal-img" alt="Mary Camara" />
                
                <div className="about-me-paragraph">
                    <p>I'm Mary Camara, a Computer Science student currently in the final year of my BSc in Computer Science at Coventry University. I bring a wealth of project-based experience to the table. With a solid foundation in programming logic and expertise in languages like Python and C++, I'm well-equipped to tackle complex challenges. I'm passionate about technology, especially full-stack development, Artificial Intelligence, and Deep Learning.</p>
                    <p>Beyond academics, I'm keen on staying updated with the latest scientific developments that shape our future.</p>
                </div>
            </div>
        </section>
    );
}

export default About;
