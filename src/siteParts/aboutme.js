import React from 'react';
import '../siteParts/about.css';
import Ajdin from './ajdin.png';

const AboutMe = () => {
  return (
    <div className='about-2'>
      <h1 className='header-box-2'>About Me</h1>
      <div className='header-text'>
        <img className='ajdinImg' src={Ajdin} alt='ajdin-img'></img>
<p>
        Currently a student at the Faculty of Information Technologies in Mostar. My main focus of study is <span className="bold">software engineering</span>, but I also have interests in <span className="bold">music production</span> and <span className="bold">design</span>.
       <br></br>  <br></br> As a <span className="bold">Music Producer</span>, I am known under the pseudonym Aydhiny. I have been developing my passion for music since I was young, and today I am proud to say that I have honed my skills. The creativity that I use in music, I transfer to my work in software engineering and design. These three fields inspire me to constantly grow and improve myself. 💼💼💼
      </p>
      </div>
    </div>
  );
}

export default AboutMe;