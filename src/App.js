// src/App.js
import React from 'react';
import Header from './components/header';
import Projects from './components/project';
import Certificates from './components/certificates'; // Import the Certificates component
// import './App.css'; 
import About from './components/about'
import Contact from './components/contact'
import Skills from './components/skills'
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About/>
        <Skills/>
        <Projects />
        <Certificates /> {/* Add the Certificates component here */}

        <Contact/>
      </main>
    </div>
  );
}

export default App;
