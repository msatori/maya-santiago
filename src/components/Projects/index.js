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
            name: "Dev Learn",
            role: "UI/Frontend",
            description: "Web developer quiz app",
            gitUrl: "https://github.com/jess-smith49/dev-tools",
            deployUrl: " https://murmuring-scrubland-26245.herokuapp.com/"
        },
    ]);

    // const currentProjects = projects.filter((project) => project.name === name );
    // const [currentProject, setCurrentProject] = useState();

    return (
        
            projects.map((project, i) => (
                <div className="card" key={project.name}>
                    < a href={project.deployUrl}>
                        <h3 className="card-title">{project.name}</h3>
                        <img className="card-img"
                            src={require(`../../assets/images/${i}.png`).default}
                        ></img>
                        <div className="card-text">{project.description}</div>
                    </ a>
                        <a href={project.gitUrl}>Visit Github Repository</a>
                </div>
            ))
        
    );
};

export default Projects