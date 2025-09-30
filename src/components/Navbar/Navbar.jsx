import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          M-Star Innovations
        </div>

        {/* Navigation Menu */}
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="nav-item">Our Services</div>
          <div className="nav-item">About Us</div>
          <div className="nav-item">Training</div>
          <div className="nav-item">Shop</div>
          <div className="nav-item"><a href='#contact'>Contact</a></div>
          <div className="nav-item">Careers</div>
          
          {/* Get Quote Button - Inside menu for mobile */}
          <button className="nav-cta-mobile">Get Quote</button>
        </div>

        {/* Get Quote Button - Desktop */}
        <button className="nav-cta-desktop">Get Quote</button>

        {/* Mobile Menu Hamburger */}
        <div className={`nav-hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;