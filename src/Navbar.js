import React from 'react';
import logoImage from './aydhiny.png';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-container">
            <img src={logoImage} alt="Logo" className='logoImg' />
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
