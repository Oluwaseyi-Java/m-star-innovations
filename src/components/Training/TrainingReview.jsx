import React from 'react';
import './Training.css';

const Training = () => {
  const courses = [
    {
      id: 1,
      category: 'Software Development',
      title: 'Full-Stack Web Development',
      description: 'Comprehensive training in modern web technologies including React, Node.js, and database management.',
      duration: '12 Weeks',
      level: 'Beginner to Advanced',
      price: '₦150,000',
      features: ['HTML, CSS, JavaScript', 'React & Node.js', 'Database Design', 'Project Deployment'],
      popular: true
    },
    {
      id: 2,
      category: 'Software Development',
      title: 'Mobile App Development',
      description: 'Learn to build cross-platform mobile applications using React Native and Flutter.',
      duration: '10 Weeks',
      level: 'Intermediate',
      price: '₦120,000',
      features: ['React Native', 'Flutter', 'API Integration', 'App Store Deployment'],
      popular: false
    },
    {
      id: 3,
      category: 'Computer Engineering',
      title: 'Computer Hardware & Repair',
      description: 'Hands-on training in computer assembly, troubleshooting, and hardware maintenance.',
      duration: '8 Weeks',
      level: 'Beginner',
      price: '₦80,000',
      features: ['PC Assembly', 'Hardware Troubleshooting', 'Network Setup', 'Preventive Maintenance'],
      popular: false
    },
    {
      id: 4,
      category: 'Software Development',
      title: 'Data Science & Python',
      description: 'Master data analysis, visualization, and machine learning with Python programming.',
      duration: '14 Weeks',
      level: 'Intermediate to Advanced',
      price: '₦180,000',
      features: ['Python Programming', 'Data Analysis', 'Machine Learning', 'Data Visualization'],
      popular: true
    },
    {
      id: 5,
      category: 'Computer Engineering',
      title: 'Network Administration',
      description: 'Comprehensive networking course covering CCNA fundamentals and network security.',
      duration: '10 Weeks',
      level: 'Intermediate',
      price: '₦140,000',
      features: ['CCNA Preparation', 'Network Security', 'Server Administration', 'Troubleshooting'],
      popular: false
    },
    {
      id: 6,
      category: 'Software Development',
      title: 'UI/UX Design',
      description: 'Learn user interface and experience design principles with modern design tools.',
      duration: '8 Weeks',
      level: 'Beginner',
      price: '₦100,000',
      features: ['Figma & Adobe XD', 'User Research', 'Wireframing', 'Prototyping'],
      popular: false
    }
  ];

  const categories = ['All', 'Software Development', 'Computer Engineering'];

  return (
    <section className="training" id="training">
      <div className="training-container">
        
        {/* Section Header */}
        <div className="training-header">
          <h2 className="training-title">Professional Training Programs</h2>
          <p className="training-subtitle">
            Advance your career with our hands-on, industry-focused training programs. 
            Learn from experienced professionals and get job-ready skills.
          </p>
        </div>

        {/* Category Filters */}
        <div className="training-filters">
          {categories.map((category, index) => (
            <button 
              key={index}
              className={`filter-btn ${index === 0 ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="courses-grid">
          {courses.map((course) => (
            <div key={course.id} className={`course-card ${course.popular ? 'popular' : ''}`}>
              
              {/* Popular Badge */}
              {course.popular && (
                <div className="popular-badge">Most Popular</div>
              )}

              {/* Course Category */}
              <div className="course-category-home">{course.category}</div>
              
              {/* Course Title */}
              <h3 className="course-title">{course.title}</h3>
              
              {/* Course Description */}
              <p className="course-description">{course.description}</p>
              
              {/* Course Details */}
              <div className="course-details"> 
                <div className="detail-item">
                  <span className="detail-label">Duration:</span>
                  <span className="detail-value">{course.duration}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Level:</span>
                  <span className="detail-value">{course.level}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Price:</span>
                  <span className="detail-value price">{course.price}</span>
                </div>
              </div>

              {/* Course Features */}
              <ul className="course-features">
                {course.features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Buttons */}
              <div className="course-actions">
                <button className="enroll-btn">Enroll Now</button>
                <button className="info-btn">Learn More</button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="training-cta">
          <div className="cta-content">
            <h3>Ready to Start Your Tech Journey?</h3>
            <p>Contact us for personalized career guidance and course recommendations.</p>
            <div className="cta-buttons">
              <button className="primary-cta">Book a Consultation</button>
              <button className="secondary-cta">Download Brochure</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Training;