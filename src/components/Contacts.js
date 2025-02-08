import React from "react";
import "../styles/contacts.css";
import mailIcon from "../assets/mailIcon.png";
import linkedinIcon from "../assets/linkedinIcon.png";
import githubIcon from "../assets/githubIcon.png";

function Contacts() {
    return (
        <div className="contacts">
            {/* Social Media Links */}
            <ul id="social" className="clearfix">
                <li>
                    <a href="mailto:mary.camara@example.com" target="_blank" rel="noopener noreferrer">
                        <img src={mailIcon} alt="Email" width="50" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/marycamara" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="Github" width="50" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/mary-camara-9137b820a/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="LinkedIn" width="50" />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Contacts;
