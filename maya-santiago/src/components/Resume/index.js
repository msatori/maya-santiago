import React from 'react';

const Resume = () => {
    return(
        <section className="resume">
            <div className="resume-container">
                <a src="../../assets/resume.pdf" download="Maya Santiago">Download My Resume</a>
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
                    <li>MongooseDB</li>
                </ul>
            </div>
        </section>
    )
}

export default Resume;