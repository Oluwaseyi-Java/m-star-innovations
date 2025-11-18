import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './CourseDetail.css';

const CourseDetail = () => {
  const { courseId } = useParams();
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  // Mock course data - in real app, this would come from an API
  const courses = {
    1: {
      id: 1,
      category: 'Software Development',
      title: 'Full-Stack Web Development',
      description: 'Comprehensive training in modern web technologies including React, Node.js, and database management.',
      duration: '12 Weeks',
      level: 'Beginner to Advanced',
      price: '₦150,000',
      features: ['HTML, CSS, JavaScript', 'React & Node.js', 'Database Design', 'Project Deployment'],
      popular: true,
      image: '💻',
      syllabus: [
        {
          module: 'Module 1: Web Fundamentals',
          topics: ['HTML5 & Semantic HTML', 'CSS3 & Flexbox/Grid', 'JavaScript ES6+', 'Responsive Design', 'Git & GitHub']
        },
        {
          module: 'Module 2: Frontend Development',
          topics: ['React Fundamentals', 'Components & Props', 'State Management', 'React Hooks', 'Routing with React Router']
        },
        {
          module: 'Module 3: Backend Development',
          topics: ['Node.js Fundamentals', 'Express.js Framework', 'RESTful APIs', 'Middleware & Authentication', 'Database Integration']
        },
        {
          module: 'Module 4: Database & Deployment',
          topics: ['MongoDB & Mongoose', 'SQL Basics', 'API Security', 'Deployment Strategies', 'Project Deployment']
        },
        {
          module: 'Module 5: Capstone Project',
          topics: ['Real-world Project', 'Team Collaboration', 'Code Review', 'Portfolio Development', 'Career Preparation']
        }
      ],
      requirements: ['Basic computer skills', 'No prior programming experience required', 'Laptop with minimum 4GB RAM'],
      outcomes: ['Build full-stack web applications', 'Understand modern development workflows', 'Prepare for junior developer roles', 'Create professional portfolio']
    }
    // Add other courses similarly...
  };

  const course = courses[courseId];

  if (!course) {
    return (
      <div className="course-not-found">
        <h2>Course Not Found</h2>
        <p>The course you're looking for doesn't exist.</p>
        <Link to="/training" className="back-link">Back to Courses</Link>
      </div>
    );
  }

  return (
    <div className="course-detail-page">
      {/* Hero Section */}
      <section className="course-hero">
        <div className="container">
          <div className="course-hero-content">
            <div className="course-hero-info">
              <div className="breadcrumb">
                <Link to="/training">Training</Link> / <span>{course.title}</span>
              </div>
              <div className="course-category">{course.category}</div>
              <h1>{course.title}</h1>
              <p className="course-description">{course.description}</p>
              
              <div className="course-meta">
                <div className="meta-item">
                  <span className="meta-label">Duration:</span>
                  <span className="meta-value">{course.duration}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Level:</span>
                  <span className="meta-value">{course.level}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Price:</span>
                  <span className="meta-value price">{course.price}</span>
                </div>
              </div>

              <div className="course-actions">
                <button className="enroll-btn" onClick={() => setIsEnquiryOpen(true)}>
                  Enroll Now
                </button>
                <button className="consultation-btn">
                  Book Consultation
                </button>
              </div>
            </div>
            
            <div className="course-hero-image">
              <div className="course-image">
                <div className="course-emoji">{course.image}</div>
              </div>
              {course.popular && (
                <div className="popular-tag">Most Popular</div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="course-details-course">
        <div className="container">
          <div className="details-grid">
            
            {/* Syllabus Section */}
            <div className="syllabus-section">
              <h2>Course Syllabus</h2>
              <div className="syllabus-list">
                {course.syllabus.map((module, index) => (
                  <div key={index} className="syllabus-module">
                    <h3>{module.module}</h3>
                    <ul className="topics-list">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="course-sidebar">
              
              {/* Requirements */}
              <div className="sidebar-card">
                <h3>Requirements</h3>
                <ul className="requirements-list">
                  {course.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              {/* Learning Outcomes */}
              <div className="sidebar-card">
                <h3>What You'll Learn</h3>
                <ul className="outcomes-list">
                  {course.outcomes.map((outcome, index) => (
                    <li key={index}>{outcome}</li>
                  ))}
                </ul>
              </div>

              {/* Quick Enquiry */}
              <div className="sidebar-card enquiry-card">
                <h3>Quick Enquiry</h3>
                <p>Have questions about this course?</p>
                <button 
                  className="enquiry-btn"
                  onClick={() => setIsEnquiryOpen(true)}
                >
                  Send Message
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Modal */}
      {isEnquiryOpen && (
        <div className="enquiry-modal">
          <div className="modal-content">
            <h3>Enquire About {course.title}</h3>
            <form className="enquiry-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="Enter your phone number" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea 
                  placeholder="Tell us about your interest in this course..."
                  rows="4"
                ></textarea>
              </div>
              <div className="form-actions">
                <button type="button" className="cancel-btn" onClick={() => setIsEnquiryOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default CourseDetail;