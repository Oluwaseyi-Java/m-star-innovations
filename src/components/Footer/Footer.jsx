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
              <li><a href="#">General Procurement</a></li>
              <li><a href="#">Project Management</a></li>
              <li><a href="#">IT Training</a></li>
              <li><a href="#">ICT Solutions</a></li>
              <li><a href="#">Business Consultancy</a></li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="footer-section">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Demo</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="footer-section">
            <h4 className="footer-title">Legal</h4>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="footer-section">
            <h4 className="footer-title">Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <a href="mailto:info@mstarinnovations.com">info@mstarinnovations.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Phone:</span>
                <a href="tel:+1234567890">+123 456 7890</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Address:</span>
                <span>123 Innovation Drive, Tech City</span>
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