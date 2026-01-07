import React from 'react';
import { Link } from 'react-router-dom';
import './TrainingPageContent.css';

const TrainingPageContent = () => {
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
      popular: true,
      image: '💻'
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
      popular: false,
      image: '📱'
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
      popular: false,
      image: '🔧'
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
      popular: true,
      image: '📊'
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
      popular: false,
      image: '🌐'
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
      popular: false,
      image: '🎨'
    },
    {
      id: 7,
      category: 'Software Development',
      title: 'Digital Marketing',
      description: 'Master digital marketing strategies including SEO, social media, and content marketing.',
      duration: '8 Weeks',
      level: 'Beginner',
      price: '₦90,000',
      features: ['SEO Optimization', 'Social Media Marketing', 'Content Strategy', 'Google Analytics'],
      popular: false,
      image: '📈'
    },
    {
      id: 8,
      category: 'Computer Engineering',
      title: 'Cybersecurity Fundamentals',
      description: 'Learn essential cybersecurity principles and practices to protect digital assets.',
      duration: '10 Weeks',
      level: 'Intermediate',
      price: '₦160,000',
      features: ['Network Security', 'Ethical Hacking', 'Risk Assessment', 'Security Protocols'],
      popular: true,
      image: '🔒'
    }
  ];

  const categories = ['All', 'Software Development', 'Computer Engineering'];

  return (
    <div className="training-page">
      
      {/* Hero Section */}
      <section className="training-hero">
        <div className="training-hero-container">
          <div className="training-hero-content">
            <h1 className="training-hero-title">Transform Your Career with Professional IT Training</h1>
            <p className="training-hero-subtitle">
              Hands-on, industry-focused courses designed to make you job-ready. 
              Learn from experienced professionals and join our community of successful graduates.
            </p>
            <div className="training-hero-stats">
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Students Trained</span>
              </div>
              <div className="stat">
                <span className="stat-number">95%</span>
                <span className="stat-label">Employment Rate</span>
              </div>
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Industry Experts</span>
              </div>
            </div>
            <button className="cta-button">Start Your Journey</button>
          </div>
          <div className="training-hero-image">
            <div className="hero-graphic">
              <div className="graphic-element">🚀</div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="training-courses">
        <div className="container">
          
          {/* Section Header */}
          <div className="courses-header">
            <h2>Our Training Programs</h2>
            <p>Choose from our comprehensive range of IT and computer engineering courses</p>
            <div className="underline"></div>
          </div>

          {/* Category Filters */}
          <div className="courses-filters">
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
              <Link key={course.id} to={`/training/${course.id}`} className="course-card-link">
                <div className={`course-card ${course.popular ? 'popular' : ''}`}>
                  
                  {/* Popular Badge */}
                  {course.popular && (
                    <div className="popular-badge">Most Popular</div>
                  )}

                  {/* Course Image */}
                  <div className="course-image">
                    <div className="course-emoji">{course.image}</div>
                  </div>

                  {/* Course Category */}
                  <div className="course-category">{course.category}</div>
                  
                  {/* Course Title */}
                  <h3 className="course-title">{course.title}</h3>
                  
                  {/* Course Description */}
                  <p className="course-description-home">{course.description}</p>
                  
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

                  {/* View Details CTA */}
                  <div className="course-cta">
                    <span className="cta-text">View Course Details</span>
                    <span className="cta-arrow">→</span>
                  </div>

                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="courses-cta">
            <div className="cta-content"> 
              <h3>Not Sure Which Course is Right for You?</h3>
              <span>Schedule a free consultation with our education advisors to find the perfect program for your career goals.</span>
              <div className="cta-buttons">
                <button className="primary-cta">Book Free Consultation</button>
                <button className="secondary-cta">Download Course Catalog</button>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default TrainingPageContent;