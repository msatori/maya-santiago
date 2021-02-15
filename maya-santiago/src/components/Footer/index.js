import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer-container">
                <h5 className="footer-text">
                    Made by Satori Code
                </h5>
            </div>
            <div className="footer-icons">
                <a href="www.linkedin.com/in/maya-santiago-58565a114" target="blank">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/msatori" target="blank">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
        </section>
    )
};

export default Footer;