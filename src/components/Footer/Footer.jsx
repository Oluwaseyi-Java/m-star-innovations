import React from 'react';
import './Footer.css';
import FB from "./assets/facebook.png"
import IG from "./assets/instagram.png"
import TW from "./assets/twitter.png"
import IN from "./assets/linkedin.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Main Footer Content */}
        <div className="footer-content">
          
          {/* Company Info Section */}
          <div className="footer-section">
            <h3 className="footer-logo">M-Star Innovations</h3>
            <p className="footer-description">
              Providing innovative solutions in procurement, IT training, 
              and business consultancy to drive your success in the digital era.
            </p>
            <div className="social-links">
              <span className="social-text">Follow us:</span>
              <div className="social-icons">
                <a href="#" className="social-link"><img src={FB} alt=""  /></a>
                <a href="#" className="social-link"><img src={TW} alt=""  /></a>
                <a href="#" className="social-link"><img src={IG} alt=""  /></a>
                <a href="#" className="social-link"><img src={IN} alt=""  /></a>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><a href="/services/procurement">General Procurement</a></li>
              <li><a href="/services/project-management">Project Management</a></li>
              <li><a href="/training">IT Training</a></li>
              <li><a href="/services/ict-solutions">ICT Solutions</a></li>
              <li><a href="/services/learning-and-capacity-building">Business Consultancy</a></li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="footer-section">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/services/procurement">Demo</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="/#contact">Contact</a></li>
              <li><a href="/careers">Careers</a></li>
            </ul>
          </div>

          {/* Legal Section */}
          {/* <div className="footer-section">
            <h4 className="footer-title">Legal</h4>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div> */}

          {/* Contact Info Section */}
          <div className="footer-section">
            <h4 className="footer-title">Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <a href="mailto:m.startechnologies13@gmail.com">m.startechnologies13@gmail.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Phone:</span>
                <a href="tel:+234 8160127117">+234 8160127117</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Address:</span>
                <span>Suite 29 Oyebode Complex, Behind Old Gazal Hotel, Along Mercy Land Road, Dada Estate, Osogbo</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 M-Star Innovations Limited. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;