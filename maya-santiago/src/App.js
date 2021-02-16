import React, { useState, useEffect } from 'react';
//component imports

import Nav from './components/Nav';
import PageWrapper from './components/PageWrapper';
import Footer from './components/Footer';
//icon imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
//helper import


library.add(fab, faLinkedin, faGithub);

function App() {
  const [pages] = useState([
    {
      name: "about me",
    },
    {
      name: "my projects"
    },
    {
      name: "my resume"
    },
    {
      name: "contact me"
    }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0])

  return (
    <div className="container-fluid">
      <Nav
        pages={currentPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></Nav>
      <main>
        <PageWrapper currentPage={currentPage}></PageWrapper>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
