import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // icons for menu

import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        M-<span>Star</span>
      </div>

      {/* Desktop Menu */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/training">Training & Courses</a></li>
        <li><a href="/shop">Shop</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      {/* CTA button (desktop only) */}
      <div className="cta-btn">
        <a href="/register">Get Started</a>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
