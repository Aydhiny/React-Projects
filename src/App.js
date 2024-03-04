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
      <About/> {/* Render the About component */}
  {/* About section content */}
      <Education/>
      <div id="about">
      <AboutMe />
</div>
      <div id="contact">
      <ContactMe id="contact"/>
  {/* Contact section content */}
</div>
      <Icons />
    </div>
  );
}

export default App;
