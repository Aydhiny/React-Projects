// Education.js

import React from 'react';
import image1 from './icons/react.png';
import image2 from './icons/js.png';
import image3 from './icons/git.png';
import image4 from './icons/net.png';
import googleLogo from './icons/google.png';
import freecode from './icons/freecode.png';
import sololearn from './icons/sololearn.webp';
import './education.css'; // Assuming you have a CSS file named Education.css for styling

const Education = ({ educationData }) => {
  return (
    <div className="education-container">
      <div className='e-header'>
        <h1 className='header-text-education'>EDUCATION AND COURSES</h1>
        <p className="info-text">Faculty of <span className="bold-purple">Information Technologies</span> '2022-2026'</p>
        <div className="course-container">
          <div className="course">
            <p>Fundamentals of Digital Marketing by <span className="bold-purple">Google</span></p>
            <img src={googleLogo} alt="Google" className="company-logo" />
            <hr className="course-line" />
          </div>
          <div className="course">
            <p>JavScript Algorithms and Data Structures by <span className="bold-purple">freeCodeCamp</span></p>
            <img src={freecode} alt="FreeCodeCamp" className="company-logo" />
            <hr className="course-line" />
          </div>
          <div className="course">
            <p>Responsive Web Design by <span className="bold-purple">freeCodeCamp</span></p>
            <img src={freecode} alt="FreeCodeCamp" className="company-logo" />
            <hr className="course-line" />
          </div>
          <div className="course">
            <p>C# Intermediate by <span className="bold-purple">SoloLearn</span></p>
            <img src={sololearn} alt="SoloLearn" className="company-logo" />
            <hr className="course-line" />
          </div>
          <div className="course">
            <p>C++ Intermediate by <span className="bold-purple">SoloLearn</span></p>
            <img src={sololearn} alt="SoloLearn" className="company-logo" />
            <hr className="course-line" />
          </div>
        </div>
        <h1 className='header-text-2'>Technologies</h1>
        <div className="icon-container">
          <img src={image1} alt="React" className="icon pulse-animation" />
          <img src={image2} alt="JS" className="icon pulse-animation" />
          <img src={image3} alt="Git" className="icon pulse-animation" />
          <img src={image4} alt=".NET" className="icon pulse-animation" />
        </div>
        <div className='competitions-container'>
  <h1 className='header-text-2'>Competitive experience</h1>
  <div className="competition">
    <div className="competition-info">
      <h3>Best Mostar - HackAtHome 2022</h3>
      <p>Developed an automatic parking system with a fully custom web-app.</p>
    </div>
    <div className="line"></div>
  </div>
  <div className="competition">
    <div className="competition-info">
      <h3>Sarajevo Telemach - Good Hackathon 2022</h3>
      <p>Developed an e-munipicality application that focuses on digitalization of legal documents to save time.</p>
    </div>
    <div className="line"></div>
  </div>
  <div className="competition">
    <div className="competition-info">
      <h3>EVONA - Innovation Hack 2023</h3>
      <p>Developed a full-stack betting web application that uses a Rest API.</p>
    </div>
    <div className="line"></div>
  </div>
</div>
      </div>
    </div>
  );
}

export default Education;
