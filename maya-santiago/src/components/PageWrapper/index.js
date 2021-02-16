import react from 'react';

import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact'
import Resume from '../Resume';
import PageContent from '../PageContent'
import capitalizeFirstLetter from '../../utils/helpers'

function PageWrapper(currentPage) {
    const switchPage = () => {
        switch(currentPage.name) {
            case 'about me':
                return <About></About>;

            case 'my projects':
                return <Portfolio></Portfolio>;
            
            case 'contact me':
                return <Contact></Contact>;

            case 'my resume':
                return <Resume></Resume>;

            default:
                return <About />
        }
    };

   
    return(
        <section className="content-wrapper">
            <h2>{currentPage.name}</h2>
            <PageContent>{switchPage()}</PageContent>
        </section>
    );
};

export default PageWrapper;