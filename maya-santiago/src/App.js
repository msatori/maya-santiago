import React from 'react';
//component imports
import About from './components/About';
import Nav from './components/Nav';
//style imports


function App() {
  return (
    <div className="container-fluid">
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
