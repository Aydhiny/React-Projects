import React from 'react';
import logoImage from './aydhiny.png';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-container">

        <ul className="nav-links">
          <li className='homeLink'><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
