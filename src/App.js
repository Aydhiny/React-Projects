import React from 'react';
import Navbar from './Navbar';
import Icons from './siteParts/icons';
import About from './siteParts/About';
import Home from './siteParts/Home'; // Import the Home component
import './App.css';

function App() {
  return (
    <div className='app-container'>
      <Home /> {/* Render the Home component */}
      <About /> {/* Render the About component */}
      <Icons />
    </div>
  );
}

export default App;
