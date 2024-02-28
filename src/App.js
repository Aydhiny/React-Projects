import React from 'react';
import Navbar from './Navbar';
import Icons from './siteParts/icons';
import About from './siteParts/About';
import WelcomeText from './siteParts/welcomeText';
import './App.css';
import profilepic from './profile.jpg';
import plansio from './plansiologo.png';
import aydhiny from './ayden.png';

function App() {
  return (
    <div className='app-container'>
      <Navbar />
      <div className='upper-container'>
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
          <WelcomeText />
          <p>Music Producer, Designer, Software Engineering Student</p>
          <p className='myName'>Ajdin Mehmedović</p>
          <button className='downloadBtn'>Download CV</button>
          <button className='beatBtn'>Beatstore</button>
        </div>
        <Icons />
      </div>
    </div>
  );
}

export default App;
