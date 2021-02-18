import react from 'react';

import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact'
import Resume from '../Resume';
import PageContent from '../PageContent'


function PageWrapper({currentPage}) {
    const switchPage = () => {
        switch (currentPage.name) {
            case 'About Me':
                return <About />;

            case 'My Portfolio':
                console.log('Portfolio')
                return <Portfolio />;

            case 'My Resume':
                return <Resume />;

            case 'Contact Me':
                console.log('Contact')
                return <Contact />;

            default:
                return <About />
        }

    };



    return (
        <section className="content-wrapper">
            <PageContent>{switchPage()}</PageContent>
        </section>
    );
};

export default PageWrapper;