import React, { useState } from 'react';




const Projects = ({ }) => {

    const [projects] = useState([

        {
            name: "Santa's Helper",
            role: "UI/Frontend Developer",
            description: "A collaborative project with Jessica Smith and Joanna Grosshans.",
            deployUrl: "https://stark-thicket-72427.herokuapp.com/",
            gitUrl: "https://github.com/jess-smith49/santas-helper"
        },
        {
            name: "Budgie the Tracker",
            role: "Backend Developer",
            description: "A simple expense tracking PWA that allows for online and offline usage. Frontend design provided by UW Madison Extended Bootcamp",
            deployUrl: "https://stark-bayou-63490.herokuapp.com/",
            gitUrl: "https://github.com/msatori/budgie-the-tracker"
        },
        {
            name: "The Menu",
            role: "UI/Fronend Developer",
            description: "A collaborative project with Jessica Smith and Mai Yia Xiong",
            deployUrl: "https://jess-smith49.github.io/the-menu/",
            gitUrl: "https://github.com/jess-smith49/the-menu"
        },
        {
            name: "HEX Regex Tutorial",
            role: "Author",
            description: "A simple tutorial explaining the use of Regular Expressions in web development, and an example of how to create a Regex for a HEX number.",
            gitUrl: "https://gist.github.com/msatori/d0016cbeb8a57e206fed98e874389656",
            deployUrl: " https://gist.github.com/msatori/d0016cbeb8a57e206fed98e874389656"
        },
    ]);

    const currentProjects = projects.filter((project) => project.name === name );
    const [currentProject, setCurrentProject] = useState();

    return (
        {
            currentPhotos.map((work, i) => (
                <div className="card">
                    < a href={work.deployUrl}>
                        <h3 className="card-title">{work.name}</h3>
                        <img className="card-img"
                            src={require(`../../assets/images/${i}`).default}
                        ></img>
                        <div className="card-text">{work.description}</div>
                        <div className="card-link">{work.deployUrl}</div>
                    </ a>
                </div>
            ))
        }
    );
};

export default Projects