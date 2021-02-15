import React from 'react';



const Portfolio = () => {
    return(
        <section className="projects">
            <div className="container-fluid">
                <div className="card-deck">
                    <div className="card">
                        < a href="https://stark-thicket-72427.herokuapp.com/">
                        <h3 className="card-title">Santa's Helper</h3>
                        <img className="card-img"  
                        src={require(`../../assets/images/santas-helper.png`).default}
                        ></img>
                        <div className="card-text">A collaborative application for sharing your Holiday wishlist with friends and family. UI designer and frontend developer.</div>
                        </ a>

                    </div>
                </div>
            </div>
        </section>
    )
};

export default Portfolio; 