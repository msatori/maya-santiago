import React from 'react';
//component imports
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact'
import Resume from './components/Resume';
//style imports


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
    </div>
  );
}

export default App;
