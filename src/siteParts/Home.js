import React from 'react';
import Navbar from '../Navbar';
import Icons from '../siteParts/icons';
import WelcomeText from './welcomeText';
import styles from './home.css';
import profilepic from '../profile.jpg';
import plansio from '../plansiologo.png';
import aydhiny from '../ayden.png';

const handleDownloadCV = () => {
  window.open('E:\User\Programiranje\Full-Stack Roadmap\React projekti\Portfolio app, prvi projekat\portfolio-site\src\AJDIN CV.pdf', '_blank');
};

const handleRedirectBeatstore = () => {
  window.open('https://beatstars.com/aydhiny', '_blank');
};

const Home = () => {
  return (
    <div className={styles.homeBackground}> {/* Apply the background style here */}
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
            <p>Music Producer 🎵, Designer ✒️, Software Engineering Student 💻</p>
            <p className='myName'>Ajdin Mehmedović</p>
            <button className='downloadBtn' onClick={handleDownloadCV}>Download CV</button>
            <button className='beatBtn' onClick={handleRedirectBeatstore}>Beatstore</button>
          </div>
        </div>
        <Icons />
      </div>
    </div>
  );
}

export default Home;
