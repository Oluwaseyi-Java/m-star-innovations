import React, { useState } from 'react';
import './Careers.css';

const Careers = () => {
  const [activeDepartment, setActiveDepartment] = useState('all');
  const [selectedJob, setSelectedJob] = useState(null);
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);

  const departments = [
    { id: 'all', name: 'All Departments', icon: '🏢' },
    { id: 'tech', name: 'Technology', icon: '💻' },
    { id: 'sales', name: 'Sales & Marketing', icon: '📈' },
    { id: 'design', name: 'Creative', icon: '🎨' }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Frontend Developer',
      department: 'tech',
      type: 'Full-time',
      location: 'Lagos, Nigeria',
      experience: '2-4 years',
      salary: '₦180,000 - ₦350,000',
      description: 'We are looking for a skilled Frontend Developer to join our technology team. You will be responsible for building responsive web applications using modern technologies.',
      responsibilities: [
        'Develop responsive web applications using React.js',
        'Collaborate with UI/UX designers to implement designs',
        'Optimize applications for maximum speed and scalability',
        'Write clean, maintainable, and efficient code',
        'Participate in code reviews and team meetings'
      ],
      requirements: [
        '2+ years experience in frontend development',
        'Proficiency in React.js, JavaScript, HTML5, CSS3',
        'Experience with state management (Redux, Context API)',
        'Knowledge of responsive design principles',
        'Familiarity with version control (Git)',
        'Bachelor\'s degree in Computer Science or related field'
      ],
      benefits: [
        'Health insurance',
        'Professional development allowance',
        'Flexible work hours',
        'Remote work options',
        'Team building activities',
        'Performance bonuses'
      ],
      postedDate: '2024-01-15',
      applicationDeadline: '2024-02-15'
    },
    {
      id: 2,
      title: 'Backend Developer',
      department: 'tech',
      type: 'Full-time',
      location: 'Lagos, Nigeria',
      experience: '3-5 years',
      salary: '₦250,000 - ₦450,000',
      description: 'Join our backend team to build scalable server-side applications and APIs that power our digital solutions across various industries.',
      responsibilities: [
        'Design and develop robust backend services using Node.js',
        'Create and maintain RESTful APIs',
        'Implement database schemas and optimize queries',
        'Ensure application security and data protection',
        'Collaborate with frontend developers on integration'
      ],
      requirements: [
        '3+ years experience in backend development',
        'Strong proficiency in Node.js and Express.js',
        'Experience with databases (MongoDB, PostgreSQL)',
        'Knowledge of API design and development',
        'Understanding of cloud platforms (AWS, Azure)',
        'Experience with testing frameworks'
      ],
      benefits: [
        'Comprehensive health package',
        'Learning and development budget',
        'Stock options',
        'Remote work flexibility',
        'Conference attendance opportunities',
        'Quarterly team retreats'
      ],
      postedDate: '2024-01-10',
      applicationDeadline: '2024-02-10'
    },
    {
      id: 3,
      title: 'Sales Representative',
      department: 'sales',
      type: 'Full-time',
      location: 'Lagos, Nigeria',
      experience: '1-3 years',
      salary: '₦120,000 + Commission',
      description: 'We are seeking dynamic Sales Representatives to drive our business growth by promoting our ICT solutions and services to clients across Nigeria.',
      responsibilities: [
        'Identify and pursue new business opportunities',
        'Build and maintain client relationships',
        'Present and demonstrate company products/services',
        'Achieve sales targets and KPIs',
        'Prepare sales reports and forecasts',
        'Collaborate with technical teams on client solutions'
      ],
      requirements: [
        '1+ years in sales or business development',
        'Excellent communication and negotiation skills',
        'Knowledge of ICT products and services',
        'Ability to build rapport with clients',
        'Goal-oriented and self-motivated',
        'Bachelor\'s degree in Business or related field'
      ],
      benefits: [
        'Uncapped commission structure',
        'Sales performance bonuses',
        'Company vehicle allowance',
        'Mobile and data allowance',
        'Health insurance',
        'Professional sales training'
      ],
      postedDate: '2024-01-12',
      applicationDeadline: '2024-02-12'
    },
    {
      id: 4,
      title: 'Graphics Designer',
      department: 'design',
      type: 'Full-time',
      location: 'Lagos, Nigeria',
      experience: '2-3 years',
      salary: '₦150,000 - ₦250,000',
      description: 'Join our creative team to produce visually stunning designs that communicate our brand message and enhance user experiences across digital platforms.',
      responsibilities: [
        'Create visual concepts for digital and print media',
        'Design marketing materials, websites, and user interfaces',
        'Develop brand identities and style guides',
        'Collaborate with marketing and development teams',
        'Prepare designs for production and implementation'
      ],
      requirements: [
        '2+ years experience in graphic design',
        'Proficiency in Adobe Creative Suite',
        'Strong portfolio showcasing design skills',
        'Understanding of UI/UX principles',
        'Knowledge of current design trends',
        'Degree in Graphic Design or related field'
      ],
      benefits: [
        'Creative freedom and autonomy',
        'Latest design software and tools',
        'Professional development opportunities',
        'Flexible work arrangements',
        'Health and wellness package',
        'Annual creative conference attendance'
      ],
      postedDate: '2024-01-08',
      applicationDeadline: '2024-02-08'
    }
  ];

  const filteredJobs = activeDepartment === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === activeDepartment);

  const handleApplyNow = (job) => {
    setSelectedJob(job);
    setIsApplicationOpen(true);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const calculateDaysLeft = (deadline) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="careers-page">
      
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="careers-hero-container">
          <div className="careers-hero-content">
            <h1 className="careers-hero-title">Build Your Career with M-Star Innovations</h1>
            <p className="careers-hero-subtitle">
              Join our dynamic team and be part of Nigeria's leading ICT solutions provider. 
              We're building the future of technology while empowering businesses across Africa.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Team Members</span>
              </div>
              <div className="stat">
                <span className="stat-number">4</span>
                <span className="stat-label">Open Positions</span>
              </div>
              <div className="stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Projects Monthly</span>
              </div>
            </div>
            <div className="hero-actions">
              <button 
                className="cta-button"
                onClick={() => document.getElementById('open-positions').scrollIntoView({ behavior: 'smooth' })}
              >
                View Open Positions
              </button>
              <button className="secondary-button">
                Learn About Our Culture
              </button>
            </div>
          </div>
          <div className="careers-hero-image">
            <div className="hero-graphic">
              <div className="graphic-element">🚀</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="why-join-us">
        <div className="container">
          <div className="section-header">
            <h2>Why Join M-Star Innovations?</h2>
            <p>We're not just offering jobs - we're building careers and shaping the future of technology in Nigeria</p>
            <div className="underline"></div>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🌍</div>
              <h3>Impactful Work</h3>
              <p>Work on projects that transform businesses and communities across Nigeria and beyond.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📚</div>
              <h3>Continuous Learning</h3>
              <p>Access to training, workshops, and conferences to keep your skills sharp and up-to-date.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚖️</div>
              <h3>Work-Life Balance</h3>
              <p>Flexible working hours and remote options to help you maintain a healthy balance.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h3>Competitive Packages</h3>
              <p>Attractive salaries, performance bonuses, and comprehensive benefits package.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">👥</div>
              <h3>Great Team</h3>
              <p>Collaborate with talented professionals in a supportive and innovative environment.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🚀</div>
              <h3>Growth Opportunities</h3>
              <p>Clear career progression paths and opportunities for professional advancement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="open-positions">
        <div className="container">
          <div className="section-header">
            <h2>Current Open Positions</h2>
            <p>Explore our current job openings and find the perfect role for your skills and aspirations</p>
            <div className="underline"></div>
          </div>

          {/* Department Filters */}
          <div className="department-filters">
            {departments.map(dept => (
              <button
                key={dept.id}
                className={`department-filter ${activeDepartment === dept.id ? 'active' : ''}`}
                onClick={() => setActiveDepartment(dept.id)}
              >
                <span className="dept-icon">{dept.icon}</span>
                <span className="dept-name">{dept.name}</span>
              </button>
            ))}
          </div>

          {/* Jobs Grid */}
          <div className="jobs-grid">
            {filteredJobs.length === 0 ? (
              <div className="no-jobs">
                <div className="no-jobs-icon">🔍</div>
                <h3>No positions available in this department</h3>
                <p>Check back later or browse all departments for current openings</p>
                <button 
                  className="cta-button"
                  onClick={() => setActiveDepartment('all')}
                >
                  View All Positions
                </button>
              </div>
            ) : (
              filteredJobs.map(job => {
                const daysLeft = calculateDaysLeft(job.applicationDeadline);
                const isUrgent = daysLeft <= 7;
                
                return (
                  <div key={job.id} className="job-card">
                    {isUrgent && (
                      <div className="urgent-badge">
                        ⚡ Closing Soon
                      </div>
                    )}
                    
                    <div className="job-header">
                      <h3 className="job-title">{job.title}</h3>
                      <span className="job-type">{job.type}</span>
                    </div>

                    <div className="job-meta">
                      <div className="meta-item">
                        <span className="meta-icon">📍</span>
                        <span>{job.location}</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-icon">💼</span>
                        <span>{job.experience}</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-icon">💰</span>
                        <span>{job.salary}</span>
                      </div>
                    </div>

                    <p className="job-description">{job.description}</p>

                    <div className="job-tags">
                      <span className="department-tag">
                        {departments.find(dept => dept.id === job.department)?.name}
                      </span>
                      <span className="deadline-tag">
                        Apply by: {formatDate(job.applicationDeadline)}
                      </span>
                    </div>

                    <div className="job-actions">
                      <button 
                        className="apply-now-btn"
                        onClick={() => handleApplyNow(job)}
                      >
                        Apply Now
                      </button>
                      <button 
                        className="view-details-btn"
                        onClick={() => setSelectedJob(job)}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="application-process">
        <div className="container">
          <div className="section-header">
            <h2>Our Hiring Process</h2>
            <p>We've designed a straightforward process to help us get to know you better</p>
            <div className="underline"></div>
          </div>

          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Application Review</h3>
              <p>We carefully review every application and resume we receive</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Initial Screening</h3>
              <p>Phone or video call to discuss your experience and expectations</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Skills Assessment</h3>
              <p>Practical task or technical interview based on the role</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Final Interview</h3>
              <p>Meet the team and discuss your potential contribution</p>
            </div>
            <div className="process-step">
              <div className="step-number">5</div>
              <h3>Offer</h3>
              <p>Successful candidates receive a formal job offer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Detail Modal */}
      {selectedJob && !isApplicationOpen && (
        <div className="job-modal">
          <div className="modal-overlay" onClick={() => setSelectedJob(null)}></div>
          <div className="modal-content">
            <button className="close-modal" onClick={() => setSelectedJob(null)}>×</button>
            
            <div className="job-modal-header">
              <h2>{selectedJob.title}</h2>
              <div className="job-modal-meta">
                <span className="job-type">{selectedJob.type}</span>
                <span className="job-location">📍 {selectedJob.location}</span>
                <span className="job-salary">💰 {selectedJob.salary}</span>
              </div>
            </div>

            <div className="job-modal-content">
              <div className="job-section">
                <h3>Job Description</h3>
                <p>{selectedJob.description}</p>
              </div>

              <div className="job-section">
                <h3>Key Responsibilities</h3>
                <ul className="responsibilities-list">
                  {selectedJob.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>

              <div className="job-section">
                <h3>Requirements</h3>
                <ul className="requirements-list">
                  {selectedJob.requirements.map((requirement, index) => (
                    <li key={index}>{requirement}</li>
                  ))}
                </ul>
              </div>

              <div className="job-section">
                <h3>Benefits & Perks</h3>
                <div className="benefits-grid-modal">
                  {selectedJob.benefits.map((benefit, index) => (
                    <div key={index} className="benefit-item-modal">
                      <span className="benefit-icon">✓</span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="job-timeline">
                <div className="timeline-item">
                  <span className="timeline-label">Posted:</span>
                  <span className="timeline-value">{formatDate(selectedJob.postedDate)}</span>
                </div>
                <div className="timeline-item">
                  <span className="timeline-label">Application Deadline:</span>
                  <span className="timeline-value deadline">{formatDate(selectedJob.applicationDeadline)}</span>
                </div>
              </div>
            </div>

            <div className="job-modal-actions">
              <button 
                className="apply-now-modal-btn"
                onClick={() => setIsApplicationOpen(true)}
              >
                Apply for This Position
              </button>
              <button 
                className="close-modal-btn"
                onClick={() => setSelectedJob(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Application Modal */}
      {isApplicationOpen && selectedJob && (
        <div className="application-modal">
          <div className="modal-overlay" onClick={() => setIsApplicationOpen(false)}></div>
          <div className="modal-content">
            <button className="close-modal" onClick={() => setIsApplicationOpen(false)}>×</button>
            
            <div className="application-header">
              <h2>Apply for {selectedJob.title}</h2>
              <p>Complete the form below to submit your application</p>
            </div>

            <form className="application-form">
              <div className="form-section">
                <h3>Personal Information</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" placeholder="Enter your full name" required />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" placeholder="Enter your email" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input type="tel" placeholder="Enter your phone number" required />
                  </div>
                  <div className="form-group">
                    <label>Current Location</label>
                    <input type="text" placeholder="Enter your city" />
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h3>Professional Information</h3>
                <div className="form-group">
                  <label>LinkedIn Profile</label>
                  <input type="url" placeholder="https://linkedin.com/in/yourprofile" />
                </div>
                <div className="form-group">
                  <label>Portfolio Website (if applicable)</label>
                  <input type="url" placeholder="https://yourportfolio.com" />
                </div>
                <div className="form-group">
                  <label>Cover Letter *</label>
                  <textarea 
                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    rows="4"
                    required
                  ></textarea>
                </div>
              </div>

              <div className="form-section">
                <h3>Attachments</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>Upload Resume/CV *</label>
                    <input type="file" accept=".pdf,.doc,.docx" required />
                    <small>PDF, DOC, DOCX (Max: 5MB)</small>
                  </div>
                  <div className="form-group">
                    <label>Additional Documents</label>
                    <input type="file" accept=".pdf,.doc,.docx,.jpg,.png" />
                    <small>Portfolio, Certificates, etc. (Max: 10MB)</small>
                  </div>
                </div>
              </div>

              <div className="form-actions">
                <button type="button" className="cancel-btn" onClick={() => setIsApplicationOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="submit-application-btn">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="careers-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Don't See the Perfect Role?</h2>
            <p>We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.</p>
            <div className="cta-buttons">
              <button className="primary-cta" onClick={() => setIsApplicationOpen(true)}>
                Submit General Application
              </button>
              <button className="secondary-cta">
                Contact HR Team
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Careers;