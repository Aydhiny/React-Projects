import React from 'react';
import Navbar from './Navbar';
import Icons from './siteParts/icons';
import About from './siteParts/About';
import Home from './siteParts/Home'; // Import the Home component
import './App.css';
import AboutMe from './siteParts/aboutme';

function App() {
  return (
    <div className='app-container'>
      <Home /> {/* Render the Home component */}
      <About /> {/* Render the About component */}
      <AboutMe />
      <Icons />
    </div>
  );
}

export default App;
