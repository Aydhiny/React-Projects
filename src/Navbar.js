import React from 'react';

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <div className="navbar-container">
        <p className='ajdinText'>AJDIN MEHMEDOVIĆ</p>
        <ul className="nav-links">
          <li className='homeLink'><a href="#">HOME</a> {/* eslint-disable-line jsx-a11y/anchor-is-valid */}</li>
          <li><a className='BlogLink' href="#">BLOG</a> {/* eslint-disable-line jsx-a11y/anchor-is-valid */}</li>
          <li><a href="#" onClick={() => scrollToSection('projects')}>PROJECTS</a> {/* eslint-disable-line jsx-a11y/anchor-is-valid */}</li>
          <li><a href="#" onClick={() => scrollToSection('about')}>ABOUT</a> {/* eslint-disable-line jsx-a11y/anchor-is-valid */}</li>
          <li><a href="#" onClick={() => scrollToSection('contact')}>CONTACT</a> {/* eslint-disable-line jsx-a11y/anchor-is-valid */}</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
