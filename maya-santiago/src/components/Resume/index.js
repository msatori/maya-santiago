import React from 'react';
import mayaResume from '../../assets/resume.pdf'
const Resume = () => {
    return(
        <section className="resume">
            <div className="resume-container">
                <a href={mayaResume} taget="_blank" rel="nonreferrer" download="Maya Santiago">Download My Resume</a>
            </div>
            <div className="resume-text">
                <ul className="skill-list">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SASS</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>React.js</li>
                    <li>SQL</li>
                    <li>MongoDB</li>
                </ul>
            </div>
        </section>
    )
}

export default Resume;