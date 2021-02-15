import React from 'react';
//component imports
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact'
//style imports


function App() {
  return (
    <div className="container-fluid">
      <Nav></Nav>
      <main>
        <About></About>
        <Portfolio></Portfolio>
      </main>
      <Contact></Contact>
    </div>
  );
}

export default App;
