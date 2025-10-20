import React from 'react';
import './Hero.css';
// Update the path according to where you placed your image
import heroImage from '../../assets/content_thumb.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          {/* Main Heading */}
          <h1 className="hero-title">
            Innovative Solutions for 
            <span className="highlight"> Your Business</span>
          </h1>
          
          {/* Subtitle */}
          <p className="hero-subtitle">
            M-Star Innovations provides cutting-edge procurement, IT solutions, 
            professional training, and business consultancy to drive your success 
            in the digital age.
          </p>
          
          {/* CTA Buttons */}
          <div className="hero-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Our Services</button>
          </div>
          
          {/* Email Subscription - Like in your template */}
          <div className="hero-newsletter">
            <div className="newsletter-text">
              Stay updated with our latest offers
            </div>
            <div className="newsletter-input">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="email-input" 
              />
              <button className="subscribe-btn">Get Quote</button>
            </div>
          </div>
        </div>
        
        {/* Hero Image - Now using your actual image */}
        <div className="hero-image">
          <img 
            src={heroImage} 
            alt="M-Star Innovations Services" 
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;