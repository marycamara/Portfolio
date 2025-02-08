import React from "react";
import "../styles/skills.css";
import { FaPython, FaJs, FaReact, FaJava } from "react-icons/fa"; // Importing icons


const Skills = () => {
    return (
        <div className="skills-container">
            <div className="skill-list">
                <ul>
                    <li><FaPython /> Python </li>
                    <li><FaJava /> Java </li>
                    <li>C++</li>
                </ul>
            </div>
            <div className="skill-list">
                <ul>
                    <li><FaJs /> JavaScript ES6 </li>
                    <li><FaReact /> React.js </li>
                    <li>TypeScript</li>
                </ul>
            </div>
        </div>
    );
};

export default Skills;
