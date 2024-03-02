import React from 'react';
import './about.css';
import image1 from './image1.png'; // Import your image files
import image2 from './image2.png';
import image3 from './image3.jpg';

const About = () => {
  return (
    <div className="about-page">
      <h1>Projects</h1>
      <div className="card-container">
        <div className="card">
          <img src={image1} alt="Image 1" /> {/* Image 1 */}
          <h2>Hunter Mouse</h2>
          <p>A 3d platformer game created entirely from scratch in Unity.</p>
        </div>
                <div className="card">
          <img src={image1} alt="Image 1" /> {/* Image 1 */}
          <h2>Aydhiny Beats</h2>
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