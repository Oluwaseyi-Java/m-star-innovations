import React, { useState } from 'react';
import './ICTSolutions.css';

const ICTSolutions = () => {
  const [activeTab, setActiveTab] = useState('services');
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const ictServices = [
    {
      icon: '💼',
      title: 'ICT Consultancy',
      description: 'Get professionally consult with our skilled team on variety fields.',
      features: ['Strategic IT Planning', 'Technology Assessment', 'Digital Transformation', 'IT Infrastructure Consulting']
    },
    {
      icon: '📊',
      title: 'Information Systems',
      description: 'Information system analysis, design and development meeting the rightful standards.',
      features: ['System Analysis & Design', 'Custom Software Development', 'Database Management', 'Business Intelligence']
    },
    {
      icon: '🌐',
      title: 'Microsystems',
      description: 'Networked system setting up, management and Internet services.',
      features: ['Network Setup & Configuration', 'Internet Services', 'System Administration', 'Cloud Integration']
    },
    {
      icon: '💻',
      title: 'Computer Services',
      description: 'General computer hardware, software and accessories, supplies, service, maintenance and repair.',
      features: ['Hardware Supply', 'Software Installation', 'IT Accessories', 'Maintenance Contracts']
    }
  ];

  const trainingCourses = [
    {
      category: 'Design & Publishing',
      courses: ['Desktop Publishing', 'Graphic Design', 'Web Design and Development']
    },
    {
      category: 'Programming & Development',
      courses: ['Programming Language', 'Web Design and Development', 'Engineering']
    },
    {
      category: 'IT & Networking',
      courses: ['Computer Appreciation', 'Networking', 'Compatia A++']
    },
    {
      category: 'Business & Data',
      courses: ['Data Processing', 'Statistic', 'Accounting Package']
    }
  ];

  const trainingOptions = [
    {
      type: 'One-on-One Training',
      description: 'Personalized training tailored to your specific needs and pace'
    },
    {
      type: 'In-House / Customer Location Training',
      description: 'On-site training for teams and organizations at your preferred location'
    },
    {
      type: 'Special Training',
      description: 'Customized training programs for specific technologies or business needs'
    }
  ];

  const classTimings = [
    { session: 'Morning', time: '9:00 am - 12:00 noon' },
    { session: 'Afternoon', time: '2:00pm – 5:00pm' },
    { session: 'Part-time Weekend', time: 'Friday and Saturday' },
    { session: 'Note', time: 'Personal laptop allowed' }
  ];

  const repairServices = [
    {
      category: 'Software Services',
      services: [
        'Software installations, including operating system upgrades',
        'Background Software Removal',
        'Virus Removal and data Recovery',
        'Operating System Installation and Hard drive Back Up',
        'Spyware troubleshooting & Removal',
        'Adware Troubleshooting & Removal'
      ]
    },
    {
      category: 'Hardware Services',
      services: [
        'Hardware upgrades and installations (RAM, hard drives, network cards)',
        'Computer Startup Repairs',
        'Laptop Maintenance and Laptop Screen Repair',
        'Motherboard and CPU repair, replacement and upgrades',
        'Video card replacement and upgrades',
        'Memory / DDR, RAM replacement and upgrades',
        'Printer repair and maintenance'
      ]
    },
    {
      category: 'Brands We Service',
      services: [
        'HP Computers & Printers',
        'Acer Devices',
        'Dell Systems',
        'Toshiba Laptops',
        'All other PC computer systems'
      ]
    }
  ];

  return (
    <div className="ict-solutions-page">
      
      {/* Hero Section */}
      <section className="ict-hero">
        <div className="ict-hero-container">
          <div className="ict-hero-content">
            <h1 className="ict-hero-title">Comprehensive ICT Solutions & Gadgets</h1>
            <p className="ict-hero-subtitle">
              Your trusted partner for professional ICT services, training, and gadget solutions in Nigeria
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">100+</span>
                <span className="stat-label">ICT Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Students Trained</span>
              </div>
              <div className="stat">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Devices Repaired</span>
              </div>
            </div>
            <div className="hero-actions">
              <button className="cta-button" onClick={() => setIsEnquiryOpen(true)}>
                Get ICT Consultation
              </button>
              <button className="secondary-button">
                View Gadgets Catalog
              </button>
            </div>
          </div>
          <div className="ict-hero-image">
            <div className="hero-graphic">
              <div className="graphic-element">🚀</div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="ict-tabs">
        <div className="container">
          <div className="tabs-navigation">
            <button 
              className={`tab-button ${activeTab === 'services' ? 'active' : ''}`}
              onClick={() => setActiveTab('services')}
            >
              ICT Services
            </button>
            <button 
              className={`tab-button ${activeTab === 'training' ? 'active' : ''}`}
              onClick={() => setActiveTab('training')}
            >
              ICT Training
            </button>
            <button 
              className={`tab-button ${activeTab === 'repair' ? 'active' : ''}`}
              onClick={() => setActiveTab('repair')}
            >
              Repair & Maintenance
            </button>
          </div>
        </div>
      </section>

      {/* ICT Services Section */}
      {activeTab === 'services' && (
        <section className="ict-services">
          <div className="container">
            <div className="services-header">
              <h2>Professional ICT Solutions</h2>
              <p>M-STAR Innovations is one of the best ICT firms in Nigeria. We offer professional electronic business solutions to grow and expand your business.</p>
              <div className="underline"></div>
            </div>

            <div className="services-grid">
              {ictServices.map((service, index) => (
                <div key={index} className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                  <button className="service-cta" onClick={() => setIsEnquiryOpen(true)}>
                    Learn More
                  </button>
                </div>
              ))}
            </div>

            <div className="ict-overview">
              <h3>Comprehensive ICT Coverage</h3>
              <p>
                We provide expert in ICT as an umbrella term that includes any communication device or application, 
                encompassing: radio, television, cellular phones, computer and network hardware and software, 
                satellite systems and so on, as well as the various services and applications associated with them.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ICT Training Section */}
      {activeTab === 'training' && (
        <section className="ict-training">
          <div className="container">
            <div className="training-header">
              <h2>ICT Computer Training</h2>
              <p>
                Our ICT Computer Training is renowned for the high quality capacity building and vocational skill 
                development acquisition programme. Many of our clients took their first computer training course 
                with us at beginner level and have progressed with us to professional level.
              </p>
              <div className="underline"></div>
            </div>

            <div className="training-content">
              <div className="courses-section">
                <h3>Certified Courses Available</h3>
                <div className="courses-grid">
                  {trainingCourses.map((category, index) => (
                    <div key={index} className="course-category">
                      <h4>{category.category}</h4>
                      <ul>
                        {category.courses.map((course, courseIndex) => (
                          <li key={courseIndex}>✓ {course}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="training-options">
                <div className="options-section">
                  <h3>Training Options</h3>
                  <div className="options-grid">
                    {trainingOptions.map((option, index) => (
                      <div key={index} className="option-card">
                        <h4>{option.type}</h4>
                        <p>{option.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="schedule-section">
                  <h3>Available Classes & Timings</h3>
                  <div className="schedule-grid">
                    {classTimings.map((timing, index) => (
                      <div key={index} className="schedule-item">
                        <span className="session">{timing.session}</span>
                        <span className="time">{timing.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Repair & Maintenance Section */}
      {activeTab === 'repair' && (
        <section className="ict-repair">
          <div className="container">
            <div className="repair-header">
              <h2>Service/Repair and Maintenance</h2>
              <p>
                M-STAR Innovations Limited looks forward to maintain and managing your ICT gadgets: Laptops, 
                Desktops, Printers, e.t.c Computer repair and maintenance is our specialty! We have years of 
                experience in resolving software, hardware, or networking issues.
              </p>
              <div className="underline"></div>
            </div>

            <div className="repair-content">
              <div className="repair-overview">
                <h3>Comprehensive Repair Services</h3>
                <p>
                  From virus, firmware, spyware and malwares infection noise that damaged hardware and more. 
                  We repair all model PC computer systems/Printer which include Hp, Acer, Dell & Toshiba e.t.c.
                </p>
              </div>

              <div className="repair-services-grid">
                {repairServices.map((category, index) => (
                  <div key={index} className="repair-category">
                    <h4>{category.category}</h4>
                    <ul>
                      {category.services.map((service, serviceIndex) => (
                        <li key={serviceIndex}>✓ {service}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="service-center-cta">
                <h3>Ready to Serve Your IT Needs</h3>
                <p>We provide much more at our service centre that is always ready to attend to your IT needs.</p>
                <button className="cta-button" onClick={() => setIsEnquiryOpen(true)}>
                  Visit Service Center
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="ict-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Business with ICT?</h2>
            <p>Get in touch with our expert team for comprehensive ICT solutions, training, and support.</p>
            <div className="cta-buttons">
              <button className="primary-cta" onClick={() => setIsEnquiryOpen(true)}>
                Get Free Consultation
              </button>
              <button className="secondary-cta">
                Call Now: +234 812 345 6789
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
            <h3>ICT Solutions Enquiry</h3>
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
                <label>Service Interest</label>
                <select>
                  <option value="">Select service</option>
                  <option value="consultancy">ICT Consultancy</option>
                  <option value="systems">Information Systems</option>
                  <option value="microsystems">Microsystems</option>
                  <option value="computer-services">Computer Services</option>
                  <option value="training">ICT Training</option>
                  <option value="repair">Repair & Maintenance</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea 
                  placeholder="Describe your ICT needs or enquiry..."
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

export default ICTSolutions;