import React, { useState } from 'react';
import './ProjectManagement.css';

const Project_Management = () => {
  const [activeTab, setActiveTab] = useState('facility');
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const managementServices = [
    {
      icon: '🏢',
      title: 'Integrated Facilities Management',
      description: 'Comprehensive management of all facility operations and services'
    },
    {
      icon: '💻',
      title: 'Computerised Maintenance Management Solutions (CMMS)',
      description: 'Digital solutions for efficient maintenance planning and execution'
    },
    {
      icon: '📊',
      title: 'Project Management Services',
      description: 'End-to-end project coordination and delivery management'
    },
    {
      icon: '👷',
      title: 'Construction Supervision Services',
      description: 'Professional oversight of construction projects and quality control'
    },
    {
      icon: '🛣️',
      title: 'Infrastructure Maintenance',
      description: 'Regular maintenance and upkeep of critical infrastructure'
    },
    {
      icon: '🏛️',
      title: 'Corporate Facilities Planning/Management',
      description: 'Strategic planning and management of corporate facility portfolios'
    },
    {
      icon: '🏗️',
      title: 'Design and Build Services',
      description: 'Integrated design and construction services for seamless project delivery'
    },
    {
      icon: '🚀',
      title: 'Project Development and Construction',
      description: 'Complete project development from conception to construction completion'
    }
  ];

  const facilityTypes = [
    'Office Blocks',
    'Arenas & Sporting Complexes',
    'Convention Centers',
    'Shopping Complexes',
    'Hospitals & Healthcare',
    'Hotels & Hospitality',
    'Educational Institutions',
    'Industrial Facilities'
  ];

  const maintenanceTypes = [
    {
      type: 'Preventive Maintenance',
      icon: '🛡️',
      description: 'Carried out to avoid breakdown and ensure optimal performance of facilities',
      features: [
        'Cost and time saving approach',
        'Integral part of established maintenance culture',
        'Collective decision-making process',
        'Based on comprehensive facility information'
      ]
    },
    {
      type: 'Routine Maintenance',
      icon: '📅',
      description: 'Periodically carried out as scheduled by facility managers',
      features: [
        'Monthly, quarterly, or annual schedules',
        'Compliance with manufacturer guidelines',
        'Prevents unexpected breakdowns',
        'Maintains optimal facility performance'
      ]
    },
    {
      type: 'Emergency Repairs',
      icon: '🚨',
      description: 'Urgent measures taken when facilities break down unexpectedly',
      features: [
        'Common where maintenance culture is not established',
        'Requires immediate action and decision-making',
        'Can be expensive due to extensive damage',
        'Proactive planning minimizes emergencies'
      ]
    },
    {
      type: 'Predictive Maintenance',
      icon: '🔮',
      description: 'Uses computer software to predict equipment failure',
      features: [
        'Based on age, user demand and performance',
        'Advanced analytics for failure prediction',
        'Minimizes unexpected downtime',
        'Optimizes maintenance scheduling'
      ]
    }
  ];

  const hrServices = [
    {
      category: 'Recruitment & Selection',
      services: [
        'Job descriptions development',
        'Selection tools and assessments',
        'Background checks and verification',
        'Job offers and onboarding'
      ]
    },
    {
      category: 'Compensation & Benefits',
      services: [
        'Compensation methods and consistency',
        'Market analysis and benchmarking',
        'Mandated benefits management',
        'Optional group benefits administration'
      ]
    },
    {
      category: 'Employee Relations',
      services: [
        'Labor agreements management',
        'Performance management systems',
        'Disciplinary procedures',
        'Employee recognition programs'
      ]
    },
    {
      category: 'Training & Development',
      services: [
        'New employee orientation',
        'Staff development programs',
        'Technical and safety training',
        'Leadership development'
      ]
    },
    {
      category: 'HR Administration',
      services: [
        'Payroll management (HRIS)',
        'Personnel files maintenance',
        'Confidential records management',
        'Policy and procedure development'
      ]
    },
    {
      category: 'Employee Communications',
      services: [
        'Employee handbook development',
        'Newsletter and announcements',
        'Recognition programs',
        'Electronic communication systems'
      ]
    }
  ];

  const benefits = [
    {
      icon: '💰',
      title: 'Cost Reduction',
      description: 'Significant savings on HR and facility management expenses'
    },
    {
      icon: '⚡',
      title: 'Efficiency',
      description: 'Streamlined processes and professional expertise'
    },
    {
      icon: '🎯',
      title: 'Quality Results',
      description: 'High-quality staffing and facility management outcomes'
    },
    {
      icon: '🔄',
      title: 'Flexibility',
      description: 'Adaptable solutions tailored to your specific needs'
    }
  ];

  return (
    <div className="project-management-page">
      
      {/* Hero Section */}
      <section className="project-hero">
        <div className="project-hero-container">
          <div className="project-hero-content">
            <h1 className="project-hero-title">Project & Facility Management</h1>
            <p className="project-hero-subtitle">
              Comprehensive management solutions for spaces, infrastructure, and human resources
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">100+</span>
                <span className="stat-label">Projects Managed</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Facilities Serviced</span>
              </div>
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Staff Recruited</span>
              </div>
            </div>
            <div className="hero-actions">
              <button className="cta-button" onClick={() => setIsEnquiryOpen(true)}>
                Get Management Consultation
              </button>
              <button className="secondary-button">
                Download Brochure
              </button>
            </div>
          </div>
          <div className="project-hero-image">
            <div className="hero-graphic">
              <div className="graphic-element">🏢</div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="project-intro">
        <div className="container">
          <div className="intro-content">
            <h2>Comprehensive Management Solutions</h2>
            <div className="underline"></div>
            <p className="intro-text">
              We offer project and facilities management which are subject to continuous innovations 
              and development, under pressure, to reduce costs and add value to the core business of 
              the client's organization be they public or private sector where possible.
            </p>
            <p className="intro-text">
              It is an interdisciplinary field devoted to the coordination of space, infrastructure, 
              people and organization, often associated with the administration of office blocks, 
              arenas, facilities, sporting complexes, convention centers, shopping complexes, 
              hospitals, hotels, etc.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="project-tabs">
        <div className="container">
          <div className="tabs-navigation">
            <button 
              className={`tab-button ${activeTab === 'facility' ? 'active' : ''}`}
              onClick={() => setActiveTab('facility')}
            >
              Facility Management
            </button>
            <button 
              className={`tab-button ${activeTab === 'ict' ? 'active' : ''}`}
              onClick={() => setActiveTab('ict')}
            >
              ICT Facility Management
            </button>
            <button 
              className={`tab-button ${activeTab === 'hr' ? 'active' : ''}`}
              onClick={() => setActiveTab('hr')}
            >
              Human Resources Management
            </button>
          </div>
        </div>
      </section>

      {/* Facility Management Section */}
      {activeTab === 'facility' && (
        <section className="facility-management">
          <div className="container">
            <div className="facility-header">
              <h2>Specialized Project & Facilities Management</h2>
              <p>Comprehensive management services for various facility types and project requirements</p>
              <div className="underline"></div>
            </div>

            <div className="facility-content">
              <div className="services-section">
                <h3>Our Areas of Specialization</h3>
                <div className="services-grid">
                  {managementServices.map((service, index) => (
                    <div key={index} className="service-card">
                      <div className="service-icon">{service.icon}</div>
                      <h4>{service.title}</h4>
                      <p>{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="facility-types">
                <h3>Facility Types We Manage</h3>
                <div className="types-grid">
                  {facilityTypes.map((type, index) => (
                    <div key={index} className="type-card">
                      <span className="type-icon">✓</span>
                      <span>{type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ICT Facility Management Section */}
      {activeTab === 'ict' && (
        <section className="ict-facility">
          <div className="container">
            <div className="ict-facility-header">
              <h2>ICT Facility Management</h2>
              <p>
                We provide individual, corporate repair and maintenance based on our client specifications 
                and satisfaction. We have many repair and maintenance contract options to provide full 
                service coverage to your residential and business locations.
              </p>
              <div className="underline"></div>
            </div>

            <div className="maintenance-types">
              <h3>Maintenance Service Options</h3>
              <div className="maintenance-grid">
                {maintenanceTypes.map((maintenance, index) => (
                  <div key={index} className="maintenance-card">
                    <div className="maintenance-header">
                      <div className="maintenance-icon">{maintenance.icon}</div>
                      <h4>{maintenance.type}</h4>
                    </div>
                    <p className="maintenance-description">{maintenance.description}</p>
                    <ul className="maintenance-features">
                      {maintenance.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="contract-options">
              <h3>Flexible Contract Agreements</h3>
              <div className="contract-content">
                <p>
                  Our maintenance contracts are tailored to meet your specific needs and can include:
                </p>
                <div className="contract-features">
                  <div className="contract-feature">
                    <span className="feature-icon">🛡️</span>
                    <span>Preventive Maintenance Plans</span>
                  </div>
                  <div className="contract-feature">
                    <span className="feature-icon">📅</span>
                    <span>Routine Maintenance Schedules</span>
                  </div>
                  <div className="contract-feature">
                    <span className="feature-icon">🚨</span>
                    <span>Emergency Response Services</span>
                  </div>
                  <div className="contract-feature">
                    <span className="feature-icon">🔮</span>
                    <span>Predictive Maintenance Analytics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Human Resources Management Section */}
      {activeTab === 'hr' && (
        <section className="hr-management">
          <div className="container">
            <div className="hr-header">
              <h2>Human Resources Management</h2>
              <p>
                M-Star Innovations Limited offers recruitment services to schools, institutions, and 
                organizations. We bridge the gap between employers and employees, connecting job seekers 
                with companies that have job openings.
              </p>
              <div className="underline"></div>
            </div>

            <div className="hr-content">
              <div className="hr-overview">
                <h3>Why Outsource HR to M-STAR?</h3>
                <p>
                  Companies are looking for ways to reduce their operating costs, and one effective method 
                  is cutting down on HR expenditure. Rather than handling human resources needs in-house, 
                  companies are now outsourcing such tasks to recruitment agencies for efficiency and 
                  cost-saving purposes.
                </p>
                
                <div className="benefits-grid">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="benefit-card">
                      <div className="benefit-icon">{benefit.icon}</div>
                      <h4>{benefit.title}</h4>
                      <p>{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hr-services">
                <h3>Comprehensive HR Services</h3>
                <div className="services-grid">
                  {hrServices.map((service, index) => (
                    <div key={index} className="hr-service-card">
                      <h4>{service.category}</h4>
                      <ul>
                        {service.services.map((item, itemIndex) => (
                          <li key={itemIndex}>✓ {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="recruitment-process">
                <h3>Our Recruitment Process</h3>
                <div className="process-steps">
                  <div className="process-step">
                    <div className="step-number">1</div>
                    <h4>Needs Assessment</h4>
                    <p>We conduct comprehensive screening exercises and understand your specific requirements</p>
                  </div>
                  <div className="process-step">
                    <div className="step-number">2</div>
                    <h4>Candidate Sourcing</h4>
                    <p>We identify and attract qualified candidates through various channels</p>
                  </div>
                  <div className="process-step">
                    <div className="step-number">3</div>
                    <h4>Interview & Selection</h4>
                    <p>We conduct interviews and the entire job recruitment process on your behalf</p>
                  </div>
                  <div className="process-step">
                    <div className="step-number">4</div>
                    <h4>Quality Placement</h4>
                    <p>We ensure the quality of people hired directly links to your business success</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="project-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Optimize Your Operations?</h2>
            <p>Get comprehensive project, facility, and HR management solutions tailored to your needs.</p>
            <div className="cta-buttons">
              <button className="primary-cta" onClick={() => setIsEnquiryOpen(true)}>
                Get Free Consultation
              </button>
              <button className="secondary-cta">
                Call: +234 812 345 6789
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
            <h3>Project & Facility Management Enquiry</h3>
            <form className="enquiry-form">
              <div className="form-group">
                <label>Company/Organization</label>
                <input type="text" placeholder="Enter your company name" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Enter your full name" />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="Enter your phone number" />
                </div>
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label>Service Interest</label>
                <select>
                  <option value="">Select service</option>
                  <option value="facility">Facility Management</option>
                  <option value="ict">ICT Facility Management</option>
                  <option value="hr">Human Resources Management</option>
                  <option value="integrated">Integrated Solutions</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Specific Requirements</label>
                <textarea 
                  placeholder="Describe your management needs or project requirements..."
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

export default Project_Management;