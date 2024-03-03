import React from 'react';
import Navbar from './Navbar';
import Icons from './siteParts/icons';
import About from './siteParts/About';
import Education from './siteParts/education';
import Home from './siteParts/Home'; // Import the Home component
import CotnactMe from './siteParts/contactme';
import './App.css';
import AboutMe from './siteParts/aboutme';
import ContactMe from './siteParts/contactme';

function App() {
  return (
    <div className='app-container'>
      <Home /> {/* Render the Home component */}
      <About /> {/* Render the About component */}
      <Education/>
      <AboutMe />
      <ContactMe/>
      <Icons />
    </div>
  );
}

export default App;
