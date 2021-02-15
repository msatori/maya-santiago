import React from 'react';
//component imports
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact'
import Resume from './components/Resume';
import Footer from './components/Footer';
//icon imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import  {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

library.add(fab, faLinkedin, faGithub );

function App() {
  return (
    <div className="container-fluid">
      <Nav></Nav>
      <main>
        <About></About>
        <Portfolio></Portfolio>
        <Resume></Resume>
      </main>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
