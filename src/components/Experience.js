import React, { useState } from "react";
import "../styles/experience.css";

function Experience() {
    const [currentExperience, setCurrentExperience] = useState(0);

    const experiences = [
        {
            title: (
                <>
                    Software Engineer @{" "}
                    <a href="https://www.bbc.co.uk/careers" target="_blank" rel="noopener noreferrer" className="bbc-link">
                        BBC
                    </a>
                </>
            ),
            sideTitle: "Software Engineer - BBC", // Side title for list
            date: "2025 - Present",
            description: [
                "Developing innovative digital solutions to enhance user experiences.",
                "Working with modern technologies to build scalable applications.",
                "Collaborating with cross-functional teams to deliver high-quality software."
            ]
        },
        {
            title: "Student Mentoring",
            sideTitle: "Mentorship & Guidance", // Side title for list
            date: "2021 - Present",
            description: [
                "Guiding students to excel academically and in personal development.",
                "Providing advice on career progression and technical skills.",
                "Offering mentorship on university projects and software development."
            ]
        },
        {
            title: "Coventry University",
            sideTitle: "University Projects", // Side title for list
            date: "2020 - 2021",
            description: [
                "Developed a text-based game that challenges users based on their decisions.",
                "Implemented object-oriented programming concepts for game mechanics.",
                "Designed an interactive user experience using Python."
            ]
        }
    ];

    return (
        <div className="experience-container">
            {/* Main Section Title */}
            <h1 className="experience-title-main">Experience</h1>

            <div className="experience-content">
                {/* Experience List with Side Titles */}
                <div className="experience-list">
                    {experiences.map((experience, index) => (
                        <div
                            key={index}
                            className={`experience-item ${index === currentExperience ? 'active' : ''}`}
                            onClick={() => setCurrentExperience(index)}
                        >
                            {experience.sideTitle} {/* Updated: Now using sideTitle */}
                        </div>
                    ))}
                </div>

                {/* Experience Details */}
                <div className="experience-details">
                    <h2>{experiences[currentExperience].title}</h2>
                    <p className="experience-date">{experiences[currentExperience].date}</p>
                    <ul className="experience-description">
                        {experiences[currentExperience].description.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Experience;
