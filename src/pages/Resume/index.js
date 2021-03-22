import React from 'react';
import mayaResume from '../../assets/resume.pdf'
const Resume = () => {
    return (
        <section className="my-resume">
            <div className="resume-container">
                <a href={mayaResume} taget="_blank" rel="nonreferrer" download="Maya Santiago">Download My Resume</a>
            </div>
            <div className="resume-text">
                <h3>Front-end Proficiencies</h3>
                <ul className="skills">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SASS</li>
                    <li>Anime.js</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
                <h3>Back-end Proficiencies</h3>
                <ul className="skills">
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>

            </div>
        </section>
    )
}

export default Resume;