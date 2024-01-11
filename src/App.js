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
          <img className='plansio-img' src={plansio} alt='profile-pic'></img>
          <img className='profile-img' src={profilepic} alt='profile-pic'></img>
          <img className='ayden-img' src={aydhiny} alt='profile-pic'></img>
          <h1>Welcome to my World 🔥</h1>
          <p>Music Producer, Designer, Software Engineering</p>
          <p>Ajdin Mehmedović</p>
          <button className='downloadBtn'>Download CV</button>
          <button className='beatBtn'>Beatstore</button>
        </div>
    </div>
  );
}

export default App;