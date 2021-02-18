import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer-container">
                <div className="footer-icons">
                    <a href="https://github.com/msatori" target="blank">
                        <FontAwesomeIcon icon={faGithub} className="fa-3x"/>
                    </a>
                    <a href="www.linkedin.com/in/maya-santiago-58565a114" target="blank">
                        <FontAwesomeIcon icon={faLinkedin} className="fa-3x"/>
                    </a>
                </div>
            </div>
        </section>
    )
};

export default Footer;