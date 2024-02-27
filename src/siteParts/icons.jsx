import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faSoundcloud, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './styles.css';

const Icons = () => {
  return (
    <div className="icons-container">
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
      <a href="https://www.beatstars.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
    </div>
  );
};

export default Icons;