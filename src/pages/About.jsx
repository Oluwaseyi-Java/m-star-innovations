import React from 'react';
import Testimonials from "../components/Testimonial/Testimonials"
import './About.css';
import image from "../assets/ceopic.jpg"

const About = () => {
  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '500+', label: 'Clients Served' },
    { number: '50+', label: 'Projects Completed' },
    { number: '95%', label: 'Client Satisfaction' }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Innovation',
      description: 'Constantly seeking new and better ways to serve our clients with cutting-edge solutions.'
    },
    {
      icon: '⚡',
      title: 'Excellence',
      description: 'Committed to delivering the highest quality standards in every project we undertake.'
    },
    {
      icon: '🤝',
      title: 'Partnership',
      description: 'Building lasting relationships with clients based on trust and mutual success.'
    },
    {
      icon: '🌍',
      title: 'Growth',
      description: 'Dedicated to supporting Nigeria\'s industrialization and our clients\' business growth.'
    }
  ];

  return (
    <div className="about-page">
      
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-container">
          <div className="about-hero-content">
            <h1 className="about-hero-title">We Help to Grow Your Business</h1>
            <p className="about-hero-subtitle">
              Empowering Nigerian businesses with innovative solutions since 2013
            </p>
            <button className="cta-button">Partner With Us</button>
          </div>
          <div className="about-hero-image">
            <div className="hero-graphic">
              <div className="graphic-element">🚀</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="company-story">
        <div className="container">
          <div className="story-header">
            <h2>Our Journey Since 2013</h2>
            <div className="underline"></div>
          </div>
          
          <div className="story-content">
            <div className="story-text">
              <p className="story-intro">
                M-STAR INNOVATIONS LIMITED was incorporated in Nigeria in 2013 with the primary aim 
                and objective of helping to support the rapid industrialization of Nigeria through 
                the provision of technical, training, logistic and procurement services using its 
                innovations, ideas, skills, knowledge, experience and management resources.
              </p>
              
              <div className="story-grid">
                <div className="story-item">
                  <div className="story-icon">📈</div>
                  <h3>Growth & Diversification</h3>
                  <p>
                    Since its establishment in Nigeria in 2013, M-STAR INNOVATIONS LIMITED has 
                    continued to grow and diversify its operations. The company has built a strong 
                    and distinctive reputation for quality standard goods and services in the industry.
                  </p>
                </div>
                
                <div className="story-item">
                  <div className="story-icon">💪</div>
                  <h3>Strategic Investment</h3>
                  <p>
                    With a strategic and planned investment in products, services and personnel, 
                    the company has established itself as one of the most reliable suppliers in 
                    the Nigerian market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="success-story">
        <div className="container">
          <div className="success-content">
            <div className="success-text">
              <h2>Our Success Story</h2>
              <div className="underline"></div>
              <p>
                The success of M-STAR INNOVATIONS LIMITED has been assured by our ability to 
                fulfill the most rigorous demands of our clients. No matter what the client 
                requirements, we have a single aim to meet their specification needs, timely 
                delivery and competitively.
              </p>
              <p>
                The availability of a specialist management service team covering all aspects 
                of supplier, from initial review of enquiry and procurement through actual 
                delivery of goods to site with appropriate documentation; has been a significant 
                advantage in the market place. And this has enabled the company to develop close 
                relationship with major manufacturers and clients worldwide.
              </p>
            </div>
            <div className="success-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="values-header">
            <h2>Our Core Values</h2>
            <p>Guiding principles that drive our success and client relationships</p>
            <div className="underline"></div>
          </div>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="future-vision">
        <div className="container">
          <div className="vision-content">
            <div className="vision-text">
              <h2>Meeting Future Challenges</h2>
              <div className="underline"></div>
              <p>
                Today, the challenges for industrial development demands new innovations, 
                visions and ideas by operators, contractors and suppliers. M-STAR INNOVATIONS 
                LIMITED believes they have competence, commitment to meet these new challenges 
                and to continue to satisfy the requirement of our clients today and in the future.
              </p>
              <div className="vision-features">
                <div className="vision-feature">
                  <span className="checkmark">✓</span>
                  <span>Continuous Innovation</span>
                </div>
                <div className="vision-feature">
                  <span className="checkmark">✓</span>
                  <span>Client-Centric Approach</span>
                </div>
                <div className="vision-feature">
                  <span className="checkmark">✓</span>
                  <span>Future-Ready Solutions</span>
                </div>
              </div>
            </div>
            <div className="vision-image">
              <div className="vision-graphic">🔮</div>
            </div>
          </div>
        </div>
      </section>

                {/* CEO Introduction Section */}
      <section className="ceo-section">
        <div className="container">
          <div className="ceo-content">
            <div className="ceo-image">
              <div className="image-container">
                <img src={image} alt="Mr Adewuyi Moses - CEO" className="ceo-photo" />
                <div className="image-overlay"></div>
              </div>
            </div>
            
            <div className="ceo-info">
              <div className="ceo-badge">Meet Our Leader</div>
              <h2>Mr Adewuyi Moses</h2>
              <p className="ceo-title">CEO/Managing Director at M-Star Innovations Limited</p>
              
              <div className="ceo-bio">
                <p>
                  A visionary leader with a passion for technology and innovation, 
                  Mr. Adewuyi Moses brings extensive experience in both the tech industry 
                  and quality management to drive M-Star Innovations forward.
                </p>
              </div>

              <div className="ceo-details">
                <div className="detail-group">
                  <h4>Professional Background</h4>
                  <ul className="experience-list">
                    <li>
                      <span className="experience-role">Former Production Supervisor/Manager</span>
                      <span className="experience-company">at AACE Foods</span>
                    </li>
                    <li>
                      <span className="experience-role">Former Quality Control Analyst</span>
                      <span className="experience-company">at ABVee Industries Limited</span>
                    </li>
                  </ul>
                </div>

                <div className="detail-group">
                  <h4>Education</h4>
                  <div className="education">
                    <span className="degree">BSc. Computer Science (Hons)</span>
                    <span className="institution">Fountain University Osogbo</span>
                  </div>
                </div>

                {/* <div className="detail-group">
                  <h4>Personal Interests</h4>
                  <div className="interests">
                    <span className="interest-tag">Surfing Internet</span>
                    <span className="interest-tag">Reading</span>
                    <span className="interest-tag">Listening to Music</span>
                  </div>
                </div> */}
              </div>

              <div className="ceo-quote">
                <blockquote>
                  "Our mission is to drive Nigeria's industrialization through innovative 
                  solutions and exceptional service delivery."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
          </section>
          
          <Testimonials/>

    </div>
  );
};

export default About;