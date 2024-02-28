import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <div className="card-container">
        <div className="card">
          <h2>Card 1</h2>
          <p>Description of Card 1</p>
        </div>
        <div className="card">
          <h2>Card 2</h2>
          <p>Description of Card 2</p>
        </div>
        <div className="card">
          <h2>Card 3</h2>
          <p>Description of Card 3</p>
        </div>
      </div>
      <div className="info">
        <p>Additional information about our website or organization...</p>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default About;