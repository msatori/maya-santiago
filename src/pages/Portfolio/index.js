import React from 'react';
import Projects from '../../components/Projects'


export default function Portfolio(){
    return(
        <section className="my-projects">
            <div className="container-fluid">
                <div className="card-deck">
                   <Projects></Projects>
                </div>
            </div>
        </section>
    )
};

