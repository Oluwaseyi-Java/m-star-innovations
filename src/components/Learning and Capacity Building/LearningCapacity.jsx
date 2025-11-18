import React, { useState } from 'react';
import './LearningCapacity.css';

const LearningCapacity = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const capacityAreas = [
    {
      icon: '🚀',
      title: 'Entrepreneurship & Management',
      description: 'Strategic management training for youth empowerment and business development'
    },
    {
      icon: '🌱',
      title: 'Agricultural Production & Processing',
      description: 'Specialized training in agricultural techniques and value chain development'
    },
    {
      icon: '👑',
      title: 'Leadership & Corporate Development',
      description: 'Leadership programs designed to challenge perceptions and develop excellence'
    },
    {
      icon: '🔧',
      title: 'Vocational Skill Development',
      description: 'Technical and vocational training for self-employment and wage employment'
    }
  ];

  const entrepreneurshipBenefits = [
    {
      title: 'Business Idea Development',
      description: 'Opportunities to create and refine your own business ideas'
    },
    {
      title: 'Entrepreneurial Skills',
      description: 'Develop top entrepreneurial skills and practical enterprise experience'
    },
    {
      title: 'Leadership Styles',
      description: 'Explore and understand various entrepreneurial leadership and management styles'
    }
  ];

  const agriculturalTraining = [
    {
      program: 'Orange Fleshed Sweetpotato (OFSP)',
      features: [
        'Training of Trainer (ToT) programs',
        'Engendered planning and monitoring',
        'Design and evaluation of OFSP projects',
        'Farmer cluster development'
      ]
    },
    {
      program: 'Agricultural Extension',
      features: [
        'Extension agent training',
        'School feeding program support',
        'Vendor capacity building',
        'Value chain development'
    ]
    },
    {
      program: 'Agro Raw Material Sourcing',
      features: [
        'Raw material sourcing for industries',
        'Quality specification management',
        'Rural-urban supply chain development',
        'Manufacturing plant support'
      ]
    }
  ];

  const leadershipModules = [
    {
      module: 'Leading Strong Teams',
      topics: ['Team dynamics', 'Conflict resolution', 'Performance management', 'Motivation techniques']
    },
    {
      module: 'Ethical Leadership',
      topics: ['Corporate ethics', 'Decision-making frameworks', 'Social responsibility', 'Values-based leadership']
    },
    {
      module: 'Effective Time Management',
      topics: ['Priority setting', 'Delegation skills', 'Productivity systems', 'Work-life balance']
    },
    {
      module: 'Teamwork & Communication',
      topics: ['Effective communication', 'Collaborative techniques', 'Feedback systems', 'Interpersonal skills']
    }
  ];

  const vocationalPrograms = [
    {
      area: 'Technical Skills',
      programs: [
        'Computer Repair & Maintenance',
        'Electrical Installation',
        'Plumbing & Pipe Fitting',
        'Automobile Mechanics'
      ]
    },
    {
      area: 'Creative Skills',
      programs: [
        'Fashion Design & Tailoring',
        'Hair Dressing & Cosmetology',
        'Catering & Event Management',
        'Graphic Design & Printing'
      ]
    },
    {
      area: 'Business Skills',
      programs: [
        'Small Business Management',
        'Digital Marketing',
        'Accounting & Bookkeeping',
        'Customer Service Excellence'
      ]
    }
  ];

  const partnershipBenefits = [
    {
      icon: '🤝',
      title: 'NDE Partnership',
      description: 'Collaboration with National Directorate for Employment for skills training'
    },
    {
      icon: '🎯',
      title: 'Targeted Programs',
      description: 'Programs designed according to the needs of collaborating partners'
    },
    {
      icon: '💼',
      title: 'Employment Focus',
      description: 'Focus on decent job opportunities and wealth creation for youth'
    },
    {
      icon: '🌍',
      title: 'Wide Reach',
      description: 'Collaboration with both governmental and non-governmental organizations'
    }
  ];

  return (
    <div className="learning-capacity-page">
      
      {/* Hero Section */}
      <section className="learning-hero">
        <div className="learning-hero-container">
          <div className="learning-hero-content">
            <h1 className="learning-hero-title">Learning & Capacity Building</h1>
            <p className="learning-hero-subtitle">
              Empowering individuals and organizations through comprehensive development programs 
              and sustainable capacity building initiatives
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">1000+</span>
                <span className="stat-label">People Trained</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Communities Reached</span>
              </div>
              <div className="stat">
                <span className="stat-number">25+</span>
                <span className="stat-label">Partner Organizations</span>
              </div>
            </div>
            <div className="hero-actions">
              <button className="cta-button" onClick={() => setIsEnquiryOpen(true)}>
                Start Your Learning Journey
              </button>
              <button className="secondary-button">
                View Program Catalog
              </button>
            </div>
          </div>
          <div className="learning-hero-image">
            <div className="hero-graphic">
              <div className="graphic-element">🎓</div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="learning-intro">
        <div className="container">
          <div className="intro-content">
            <h2>Transformative Learning Approach</h2>
            <div className="underline"></div>
            <p className="intro-text">
              We offer a conceptual approach to social or personal development that focuses on 
              understanding the obstacles that inhibit people, institutions, governments, international 
              organizations and non-governmental organizations from realizing their development goals 
              while enhancing the abilities that will allow them to achieve measurable and sustainable results.
            </p>
            <p className="intro-text">
              The capacity building working group is currently developing a new approach to learning: 
              the learning paths. This approach aims to offer a more continuous set of learning activities 
              around priority themes identified by the network and in line with the strategic framework.
            </p>
          </div>
        </div>
      </section>

      {/* Capacity Areas Overview */}
      <section className="capacity-areas">
        <div className="container">
          <div className="areas-header">
            <h2>Our Capacity Building Areas</h2>
            <p>Comprehensive development programs across key sectors for sustainable growth</p>
            <div className="underline"></div>
          </div>

          <div className="areas-grid">
            {capacityAreas.map((area, index) => (
              <div key={index} className="area-card">
                <div className="area-icon">{area.icon}</div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <button 
                  className="area-cta"
                  onClick={() => setActiveTab(area.title.toLowerCase().split(' ')[0])}
                >
                  Explore Program
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="learning-tabs">
        <div className="container">
          <div className="tabs-navigation">
            <button 
              className={`tab-button ${activeTab === 'entrepreneurship' ? 'active' : ''}`}
              onClick={() => setActiveTab('entrepreneurship')}
            >
              Entrepreneurship
            </button>
            <button 
              className={`tab-button ${activeTab === 'agricultural' ? 'active' : ''}`}
              onClick={() => setActiveTab('agricultural')}
            >
              Agriculture
            </button>
            <button 
              className={`tab-button ${activeTab === 'leadership' ? 'active' : ''}`}
              onClick={() => setActiveTab('leadership')}
            >
              Leadership
            </button>
            <button 
              className={`tab-button ${activeTab === 'vocational' ? 'active' : ''}`}
              onClick={() => setActiveTab('vocational')}
            >
              Vocational Skills
            </button>
          </div>
        </div>
      </section>

      {/* Entrepreneurship Section */}
      {activeTab === 'entrepreneurship' && (
        <section className="entrepreneurship-section">
          <div className="container">
            <div className="section-header">
              <h2>Entrepreneurship and Management</h2>
              <p>
                M-STAR Innovations offers and provides full innovation, vision and ideas to support 
                the rapid industrialization in Nigeria through strategic management training for the 
                survival of Youth empowerment.
              </p>
              <div className="underline"></div>
            </div>

            <div className="entrepreneurship-content">
              <div className="program-overview">
                <h3>Building Entrepreneurial Spirit</h3>
                <p>
                  Learning and capacity building in our Entrepreneurship and Management program 
                  builds your knowledge of entrepreneurial spirit, leadership and management. We 
                  develop an adequate orientation and change of mind-set for sustainable business success.
                </p>
              </div>

              <div className="benefits-section">
                <h3>Program Benefits</h3>
                <div className="benefits-grid">
                  {entrepreneurshipBenefits.map((benefit, index) => (
                    <div key={index} className="benefit-card">
                      <h4>{benefit.title}</h4>
                      <p>{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mindset-development">
                <h3>Mindset Development Focus</h3>
                <div className="mindset-points">
                  <div className="mindset-point">
                    <span className="point-icon">💡</span>
                    <div className="point-content">
                      <h4>Innovation Mindset</h4>
                      <p>Develop creative thinking and problem-solving abilities</p>
                    </div>
                  </div>
                  <div className="mindset-point">
                    <span className="point-icon">🌍</span>
                    <div className="point-content">
                      <h4>Global Perspective</h4>
                      <p>Understand market trends and international business opportunities</p>
                    </div>
                  </div>
                  <div className="mindset-point">
                    <span className="point-icon">📈</span>
                    <div className="point-content">
                      <h4>Growth Orientation</h4>
                      <p>Learn strategies for business scaling and sustainable growth</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Agricultural Section */}
      {activeTab === 'agricultural' && (
        <section className="agricultural-section">
          <div className="container">
            <div className="section-header">
              <h2>Agricultural Production and Processing</h2>
              <p>
                We offer learning and capacity building in agricultural production and processing, 
                with special focus on Orange Fleshed Sweetpotato (OFSP) and other value chain development.
              </p>
              <div className="underline"></div>
            </div>

            <div className="agricultural-content">
              <div className="training-programs">
                <h3>Specialized Training Programs</h3>
                <div className="programs-grid">
                  {agriculturalTraining.map((program, index) => (
                    <div key={index} className="program-card">
                      <h4>{program.program}</h4>
                      <ul>
                        {program.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>✓ {feature}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="collaboration-highlights">
                <h3>Collaboration & Impact</h3>
                <div className="collaboration-content">
                  <p>
                    Over the years, we have collaborated and facilitated on "everything you ever 
                    wanted to know about Sweetpotato" which involved various stakeholders including:
                  </p>
                  <div className="stakeholder-groups">
                    <div className="stakeholder-group">
                      <span className="group-icon">👨‍🌾</span>
                      <span>Farmer Clusters in Osun State</span>
                    </div>
                    <div className="stakeholder-group">
                      <span className="group-icon">🔧</span>
                      <span>Agricultural Extension Agents</span>
                    </div>
                    <div className="stakeholder-group">
                      <span className="group-icon">🍎</span>
                      <span>O'MEALS Program Vendors</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sourcing-services">
                <h3>Agro Raw Material Sourcing</h3>
                <div className="sourcing-content">
                  <p>
                    We also source agro raw materials for indigenous players in the industry and 
                    basic active raw material manufacturing plants in Nigeria. Most raw materials 
                    used by industries in urban centers are sourced from rural areas based on 
                    specific quality specifications.
                  </p>
                  <div className="sourcing-features">
                    <div className="sourcing-feature">
                      <span className="feature-icon">✅</span>
                      <span>Quality Specification Management</span>
                    </div>
                    <div className="sourcing-feature">
                      <span className="feature-icon">🔄</span>
                      <span>Rural-Urban Supply Chain Development</span>
                    </div>
                    <div className="sourcing-feature">
                      <span className="feature-icon">🏭</span>
                      <span>Manufacturing Plant Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Leadership Section */}
      {activeTab === 'leadership' && (
        <section className="leadership-section">
          <div className="container">
            <div className="section-header">
              <h2>Leadership and Corporate Development</h2>
              <p>
                Our Leadership programs are designed to challenge your current perceptions about 
                leadership and the values that shape it, encouraging you to think and lead differently.
              </p>
              <div className="underline"></div>
            </div>

            <div className="leadership-content">
              <div className="program-philosophy">
                <h3>Leadership Excellence Philosophy</h3>
                <p>
                  Successful leaders know their value lies not only in managing teams and running 
                  organizations, but in inspiring others, setting purposeful goals, executing strategic 
                  visions, and creating cultures of excellence.
                </p>
              </div>

              <div className="training-modules">
                <h3>Comprehensive Training Modules</h3>
                <div className="modules-grid">
                  {leadershipModules.map((module, index) => (
                    <div key={index} className="module-card">
                      <h4>{module.module}</h4>
                      <ul>
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="leadership-outcomes">
                <h3>Expected Leadership Outcomes</h3>
                <div className="outcomes-grid">
                  <div className="outcome-item">
                    <span className="outcome-icon">🎯</span>
                    <h4>Strategic Vision</h4>
                    <p>Develop ability to set and execute purposeful organizational goals</p>
                  </div>
                  <div className="outcome-item">
                    <span className="outcome-icon">🤝</span>
                    <h4>Team Inspiration</h4>
                    <p>Learn techniques to inspire and motivate team members effectively</p>
                  </div>
                  <div className="outcome-item">
                    <span className="outcome-icon">⭐</span>
                    <h4>Culture Creation</h4>
                    <p>Build skills to create and sustain cultures of organizational excellence</p>
                  </div>
                  <div className="outcome-item">
                    <span className="outcome-icon">💡</span>
                    <h4>Innovative Thinking</h4>
                    <p>Develop capacity for innovative problem-solving and decision-making</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Vocational Skills Section */}
      {activeTab === 'vocational' && (
        <section className="vocational-section">
          <div className="container">
            <div className="section-header">
              <h2>Vocational Skill Development</h2>
              <p>
                Vocational Skills Development programme is one of the core products and services 
                of M-STAR Innovations with primary aims to provide technical and vocational training 
                for unemployed youth.
              </p>
              <div className="underline"></div>
            </div>

            <div className="vocational-content">
              <div className="program-objectives">
                <h3>Program Objectives</h3>
                <div className="objectives-list">
                  <div className="objective-item">
                    <span className="objective-icon">🎯</span>
                    <div className="objective-content">
                      <h4>Technical Training</h4>
                      <p>Provide technical and vocational training for unemployed youths</p>
                    </div>
                  </div>
                  <div className="objective-item">
                    <span className="objective-icon">💼</span>
                    <div className="objective-content">
                      <h4>Employment Skills</h4>
                      <p>Equip youth with skills for self-employment or wage employment</p>
                    </div>
                  </div>
                  <div className="objective-item">
                    <span className="objective-icon">🌟</span>
                    <div className="objective-content">
                      <h4>Self-Reliance</h4>
                      <p>Make youth self-reliant and economically independent</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="skills-programs">
                <h3>Available Skills Programs</h3>
                <div className="programs-grid">
                  {vocationalPrograms.map((program, index) => (
                    <div key={index} className="skills-program-card">
                      <h4>{program.area}</h4>
                      <ul>
                        {program.programs.map((skill, skillIndex) => (
                          <li key={skillIndex}>✓ {skill}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="partnership-program">
                <h3>NDE Partnership Program</h3>
                <div className="partnership-content">
                  <p>
                    We are in PARTNERSHIP IN SKILLS TRAINING (PIST) programme designed by National 
                    Directorate for Employment. It targets empowering youth with relevant vocational 
                    skills for decent job opportunity and wealth creation.
                  </p>
                  
                  <div className="partnership-benefits">
                    <h4>Partnership Benefits</h4>
                    <div className="benefits-grid">
                      {partnershipBenefits.map((benefit, index) => (
                        <div key={index} className="partnership-benefit">
                          <div className="benefit-icon">{benefit.icon}</div>
                          <h5>{benefit.title}</h5>
                          <p>{benefit.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="learning-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Build Your Capacity?</h2>
            <p>Join our transformative learning programs and unlock your potential for personal and professional growth.</p>
            <div className="cta-buttons">
              <button className="primary-cta" onClick={() => setIsEnquiryOpen(true)}>
                Enroll in Program
              </button>
              <button className="secondary-cta">
                Download Program Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Modal */}
      {isEnquiryOpen && (
        <div className="enquiry-modal">
          <div className="modal-content">
            <button className="close-button" onClick={() => setIsEnquiryOpen(false)}>×</button>
            <h3>Learning Program Enquiry</h3>
            <form className="enquiry-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="Enter your phone number" />
                </div>
              </div>
              <div className="form-group">
                <label>Program Interest</label>
                <select>
                  <option value="">Select program</option>
                  <option value="entrepreneurship">Entrepreneurship & Management</option>
                  <option value="agriculture">Agricultural Production & Processing</option>
                  <option value="leadership">Leadership & Corporate Development</option>
                  <option value="vocational">Vocational Skill Development</option>
                  <option value="multiple">Multiple Programs</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Background/Organization</label>
                <input type="text" placeholder="Tell us about your background or organization" />
              </div>
              <div className="form-group">
                <label>Learning Goals</label>
                <textarea 
                  placeholder="What do you hope to achieve through our programs?"
                  rows="4"
                ></textarea>
              </div>
              <div className="form-actions">
                <button type="button" className="cancel-btn" onClick={() => setIsEnquiryOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  Submit Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default LearningCapacity;