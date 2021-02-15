import React from 'react';
import Projects from '../Projects'


const Portfolio = () => {
    return(
        <section className="projects">
            <div className="container-fluid">
                <div className="card-deck">
                   <Projects></Projects>
                </div>
            </div>
        </section>
    )
};

export default Portfolio; 