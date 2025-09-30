import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const services = [
    { name: 'General Procurement & Contract', path: '/procurement' },
    { name: 'Project & Facility Management', path: '/project-management' },
    { name: 'Computer & Engineering Training', path: '/training' },
    { name: 'ICT Solutions & Gadgets', path: '/ict-solutions' },
    { name: 'General Researches & Consult', path: '/research-consult' }
  ];
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          M-Star Innovations
        </div>

        {/* Navigation Menu */}
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {/* <div className="nav-item">Our Services</div> */}
          <div 
            className="nav-item dropdown"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
            onClick={()=>toggleServices}
          >
            <span className="nav-link nav-item">
              Our Services
              <span className="dropdown-arrow">▼</span>
            </span>
            <div className={`dropdown-menu ${isServicesOpen ? 'active' : ''}`}>
              {services.map((service, index) => (
                <a key={index} href={service.path} className="dropdown-item">
                  {service.name}
                </a>
              ))}
            </div>
          </div>
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