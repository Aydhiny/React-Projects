import React from 'react';
import logoImage from './aydhiny.png';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-container">
        <p className='ajdinText'>AJDIN MEHMEDOVIĆ</p>
        <ul className="nav-links">
          <li className='homeLink'><a href="/">HOME</a></li>
          <li><a href="/about">ABOUT</a></li>
          <li><a href="/contact">CONTACT</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
