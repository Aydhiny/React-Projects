import React from 'react';
import Navbar from './Navbar';
import './App.css';
import profilepic from './profile.jpg';
import plansio from './plansiologo.png';
import aydhiny from './ayden.png';
function App() {
  return (
    <div className='upper-container'>
    <Navbar />
        <div className='main-text'>
         <a href="https://www.instagram.com/plansio_central/" target="_blank">
            <img className='plansio-img' src={plansio} alt='profile-pic' />
        </a>
        <a href="https://www.linkedin.com/in/ajdin-mehmedovic/" target="_blank">
            <img className='profile-img' src={profilepic} alt='profile-pic' />
        </a>
        <a href="https://www.beatstars.com/aydhiny" target="_blank">
            <img className='ayden-img' src={aydhiny} alt='profile-pic' />
           </a>
          <h1>Welcome to my World</h1>
          <p>Music Producer, Designer, Software Engineering</p>
          <p>Ajdin Mehmedović</p>
          <button className='downloadBtn'>Download CV</button>
          <button className='beatBtn'>Beatstore</button>
        </div>
    </div>
  );
}

export default App;