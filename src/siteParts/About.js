import React from 'react';
import './about.css';
import image1 from './image1.png'; // Import your image files
import image2 from './image2.png';
import image3 from './image3.jpg';
import image4 from './image4.png';

const About = () => {
  return (
    <div className="about-page">
      <h1 className='header-box'>Projects</h1>
      <p>Projects I've created over the past 6+ years of active work.</p>
      <div className="card-container">
        <div className="card">
          <img className='ayBeats' src={image1} alt="Image 1" /> {/* Image 1 */}
          <h2>Aydhiny Beats</h2>
          <p>Music Producer for 6 years. GFX, Loops, Music Style, Design, Mixing/Mastering</p>
        </div>
                <div className="card">
          <img src={image4} alt="Image 1" /> {/* Image 1 */}
          <h2>Hunter Mouse</h2>
          <p>A 3d platformer game created entirely from scratch in Unity.</p>
        </div>
        <div className="card">
          <img src={image2} alt="Image 2" /> {/* Image 2 */}
          <h2>Plansio</h2>
          <p>Social Media Agency with over 3k+ followers.</p>
        </div>
        <div className="card">
          <img src={image3} alt="Image 3" /> {/* Image 3 */}
          <h2>Wireless Crew</h2>
          <p>Music Production Crew consisting of world class producers on the market.</p>
        </div>
      </div>
    </div>
  );
};

export default About;