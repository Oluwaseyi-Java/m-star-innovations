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
    },

      2: {
        id: 2,
        category: 'Software Development',
        title: 'Mobile App Development',
        description: 'Learn to build cross-platform mobile applications using React Native and Flutter.',
        duration: '10 Weeks',
        level: 'Intermediate',
        price: '₦120,000',
        features: ['React Native', 'Flutter', 'API Integration', 'App Store Deployment'],
        popular: false,
        image: '📱',
        syllabus: [
          {
            module: 'Module 1: Mobile Development Fundamentals',
            topics: ['Introduction to Dart & Dart SDK', 'JavaScript/TypeScript for Mobile', 'Setting up Android Studio & Xcode', 'Mobile UI/UX Principles']
          },
          {
            module: 'Module 2: Building with Flutter',
            topics: ['Widget Tree & Layouts', 'Stateful vs Stateless Widgets', 'Navigation & Routing', 'Flutter Material & Cupertino Design']
          },
          {
            module: 'Module 3: Building with React Native',
            topics: ['Flexbox for Mobile', 'Core Components', 'React Navigation', 'Handling User Input & Gestures']
          },
          {
            module: 'Module 4: Data & API Integration',
            topics: ['Fetching Data from REST APIs', 'Firebase Authentication', 'Local Databases (SQLite)', 'Push Notifications']
          },
          {
            module: 'Module 5: Testing & Deployment',
            topics: ['Debugging Mobile Apps', 'Performance Optimization', 'App Store Guidelines', 'Publishing to Google Play & App Store']
          }
        ],
        requirements: ['Basic programming knowledge (JavaScript preferred)', 'Laptop with minimum 8GB RAM', 'Stable internet connection'],
        outcomes: ['Develop apps for both iOS and Android', 'Master Flutter and React Native workflows', 'Build and integrate custom APIs', 'Deploy apps to official marketplaces']
    },
    3: {
      id: 3,
      category: 'Computer Engineering',
  title: 'Computer Hardware & Repair',
  description: 'Hands-on training in computer assembly, troubleshooting, and hardware maintenance.',
  duration: '8 Weeks',
  level: 'Beginner',
  price: '₦80,000',
  features: ['PC Assembly', 'Hardware Troubleshooting', 'Network Setup', 'Preventive Maintenance'],
  popular: false,
  image: '🔧',
  syllabus: [
    {
      module: 'Module 1: Introduction to Hardware',
      topics: ['Internal Components Identification', 'Motherboard Architecture', 'CPU & RAM Types', 'Power Supply Units (PSU)']
    },
    {
      module: 'Module 2: PC Assembly & Upgrades',
      topics: ['System Disassembly', 'Step-by-Step PC Building', 'BIOS/UEFI Configuration', 'Storage Upgrades (HDD vs SSD)']
    },
    {
      module: 'Module 3: Troubleshooting & Repair',
      topics: ['Diagnostic Tools & Software', 'Common Hardware Failures', 'Screen & Keyboard Replacement', 'Thermal Management & Cooling']
    },
    {
      module: 'Module 4: Operating Systems & Drivers',
      topics: ['OS Installation (Windows/Linux)', 'Driver Management', 'Data Recovery Basics', 'Malware Removal & System Security']
    },
    {
      module: 'Module 5: Networking & Maintenance',
      topics: ['LAN Cable Crimping', 'Router Configuration', 'Preventive Maintenance Schedules', 'Customer Service & Billing']
    }
  ],
  requirements: ['No prior experience required', 'Interest in electronics', 'Tool kit (optional but recommended)'],
  outcomes: ['Assemble a computer from scratch', 'Diagnose and fix common hardware faults', 'Perform professional system maintenance', 'Start a freelance repair business']
      
    },
    4: {
      id: 4,
      category: 'Software Development',
  title: 'Data Science & Python',
  description: 'Master data analysis, visualization, and machine learning with Python programming.',
  duration: '14 Weeks',
  level: 'Intermediate to Advanced',
  price: '₦180,000',
  features: ['Python Programming', 'Data Analysis', 'Machine Learning', 'Data Visualization'],
  popular: true,
  image: '📊',
  syllabus: [
    {
      module: 'Module 1: Advanced Python for Data Science',
      topics: ['Python Data Structures', 'Functions & Lambdas', 'List Comprehensions', 'NumPy Fundamentals', 'Vectorized Operations']
    },
    {
      module: 'Module 2: Data Manipulation with Pandas',
      topics: ['DataFrames & Series', 'Cleaning Missing Data', 'Grouping & Aggregating', 'Merging & Joining Datasets', 'Time Series Analysis']
    },
    {
      module: 'Module 3: Data Visualization',
      topics: ['Matplotlib Basics', 'Statistical Plotting with Seaborn', 'Interactive Charts with Plotly', 'Exploratory Data Analysis (EDA)', 'Storytelling with Data']
    },
    {
      module: 'Module 4: Machine Learning Foundations',
      topics: ['Supervised vs Unsupervised Learning', 'Linear & Logistic Regression', 'Decision Trees & Random Forests', 'Model Evaluation & Metrics', 'Scikit-Learn Workflow']
    },
    {
      module: 'Module 5: Advanced Topics & Capstone',
      topics: ['Feature Engineering', 'Clustering Algorithms', 'Introduction to Neural Networks', 'Deploying Models with Streamlit', 'Final Research Project']
    }
  ],
  requirements: ['Basic understanding of Python or programming logic', 'Laptop with minimum 8GB RAM', 'Basic knowledge of Mathematics/Statistics'],
  outcomes: ['Analyze large datasets using Pandas', 'Build and deploy Machine Learning models', 'Create interactive data dashboards', 'Extract actionable insights from raw data']
      
    },
    5: {
      id: 5,
      category: 'Computer Engineering',
  title: 'Network Administration',
  description: 'Comprehensive networking course covering CCNA fundamentals and network security.',
  duration: '10 Weeks',
  level: 'Intermediate',
  price: '₦140,000',
  features: ['CCNA Preparation', 'Network Security', 'Server Administration', 'Troubleshooting'],
  popular: false,
  image: '🌐',
  syllabus: [
    {
      module: 'Module 1: Networking Fundamentals',
      topics: ['OSI Model & TCP/IP Suite', 'IP Addressing & Subnetting (IPv4/IPv6)', 'Network Topologies', 'Cabling & Infrastructure']
    },
    {
      module: 'Module 2: Routing & Switching',
      topics: ['VLANs & Trunking', 'Spanning Tree Protocol (STP)', 'Static & Dynamic Routing (OSPF)', 'Inter-VLAN Routing']
    },
    {
      module: 'Module 3: IP Services & Security',
      topics: ['DHCP & DNS Configuration', 'Access Control Lists (ACLs)', 'Network Address Translation (NAT)', 'VPN Fundamentals']
    },
    {
      module: 'Module 4: Server & Network Management',
      topics: ['Windows Server Basics', 'Active Directory Setup', 'Monitoring Tools (SNMP)', 'Device Hardening']
    },
    {
      module: 'Module 5: Troubleshooting & CCNA Prep',
      topics: ['Common Connectivity Issues', 'Network Documentation', 'Practice Exam Simulations', 'Final Lab Project']
    }
  ],
  requirements: ['Basic understanding of computer systems', 'Personal laptop', 'Familiarity with Command Line Interface (CLI) is a plus'],
  outcomes: ['Design and implement small to medium-sized networks', 'Configure Cisco routers and switches', 'Secure network infrastructure from common threats', 'Prepare for CCNA certification exams']
      
    },
    6: {
      id: 6,
      category: 'Software Development',
  title: 'UI/UX Design',
  description: 'Learn user interface and experience design principles with modern design tools.',
  duration: '8 Weeks',
  level: 'Beginner',
  price: '₦100,000',
  features: ['Figma & Adobe XD', 'User Research', 'Wireframing', 'Prototyping'],
  popular: false,
  image: '🎨',
  syllabus: [
    {
      module: 'Module 1: Design Thinking & Research',
      topics: ['Introduction to UX Design', 'User Personas', 'Empathy Mapping', 'Competitor Analysis', 'User Journey Mapping']
    },
    {
      module: 'Module 2: Information Architecture & Wireframing',
      topics: ['User Flows', 'Sitemaps', 'Low-Fidelity Wireframing', 'Sketching Concepts', 'Content Strategy']
    },
    {
      module: 'Module 3: UI Design Principles',
      topics: ['Color Theory', 'Typography', 'Grids & Layouts', 'Visual Hierarchy', 'Iconography']
    },
    {
      module: 'Module 4: Prototyping with Figma',
      topics: ['Components & Variants', 'Auto Layout', 'High-Fidelity Design', 'Interactive Prototyping', 'Design Systems']
    },
    {
      module: 'Module 5: Testing & Handoff',
      topics: ['Usability Testing', 'Feedback Iteration', 'Developer Handoff (Zeplin/Figma)', 'Portfolio Building', 'Presentation Skills']
    }
  ],
  requirements: ['No prior design experience needed', 'A laptop with a good display', 'Internet access for cloud-based design tools'],
  outcomes: ['Design user-centric digital products', 'Master industry-standard tools like Figma', 'Conduct thorough user research and testing', 'Build a professional UI/UX design portfolio']
      
    },
    7: {
      id: 7,
      category: 'Software Development',
  title: 'Digital Marketing',
  description: 'Master digital marketing strategies including SEO, social media, and content marketing.',
  duration: '8 Weeks',
  level: 'Beginner',
  price: '₦90,000',
  features: ['SEO Optimization', 'Social Media Marketing', 'Content Strategy', 'Google Analytics'],
  popular: false,
  image: '📈',
  syllabus: [
    {
      module: 'Module 1: Fundamentals of Digital Marketing',
      topics: ['Traditional vs Digital Marketing', 'The Marketing Funnel', 'Defining Target Audiences', 'Brand Identity & Voice']
    },
    {
      module: 'Module 2: SEO & Search Engine Marketing',
      topics: ['On-Page & Off-Page SEO', 'Keyword Research Tools', 'Technical SEO Basics', 'Google Ads & PPC Campaigns']
    },
    {
      module: 'Module 3: Social Media & Content Strategy',
      topics: ['Facebook & Instagram Ads', 'LinkedIn for B2B', 'Content Calendar Creation', 'Copywriting for Conversions']
    },
    {
      module: 'Module 4: Email Marketing & Automation',
      topics: ['Lead Generation & Lead Magnets', 'Mailchimp Essentials', 'Email Automation Flows', 'A/B Testing Campaigns']
    },
    {
      module: 'Module 5: Analytics & ROI',
      topics: ['Google Analytics 4 (GA4)', 'Tracking Conversion Rates', 'Reporting & Data Visualization', 'Final Campaign Project']
    }
  ],
  requirements: ['Basic computer literacy', 'Active social media accounts', 'A laptop and stable internet connection'],
  outcomes: ['Develop end-to-end marketing campaigns', 'Rank websites using SEO best practices', 'Manage paid advertising budgets effectively', 'Analyze data to improve marketing ROI']
    },
    8: {
      id: 8,
      category: 'Computer Engineering',
  title: 'Cybersecurity Fundamentals',
  description: 'Learn essential cybersecurity principles and practices to protect digital assets.',
  duration: '10 Weeks',
  level: 'Intermediate',
  price: '₦160,000',
  features: ['Network Security', 'Ethical Hacking', 'Risk Assessment', 'Security Protocols'],
  popular: true,
  image: '🔒',
  syllabus: [
    {
      module: 'Module 1: Introduction to Information Security',
      topics: ['The CIA Triad', 'Threats, Vulnerabilities & Risks', 'Social Engineering Attacks', 'Security Governance & Compliance']
    },
    {
      module: 'Module 2: Network & Infrastructure Security',
      topics: ['Firewalls & Honeypots', 'Intrusion Detection Systems (IDS)', 'Securing Wireless Networks', 'Virtual Private Networks (VPNs)']
    },
    {
      module: 'Module 3: Ethical Hacking & Penetration Testing',
      topics: ['Footprinting & Reconnaissance', 'Vulnerability Scanning', 'System Hacking Techniques', 'SQL Injection & XSS Attacks']
    },
    {
      module: 'Module 4: Cryptography & Identity Management',
      topics: ['Symmetric vs Asymmetric Encryption', 'Hashing Algorithms', 'Multi-Factor Authentication (MFA)', 'Digital Signatures & Certificates']
    },
    {
      module: 'Module 5: Incident Response & Disaster Recovery',
      topics: ['Business Continuity Planning', 'Digital Forensics Basics', 'Incident Handling Procedures', 'Final Security Audit Project']
    }
  ],
  requirements: ['Solid understanding of Networking (CCNA level recommended)', 'Basic Linux command line knowledge', 'Laptop with 8GB RAM (minimum) to run Virtual Machines'],
  outcomes: ['Identify and mitigate common security threats', 'Perform basic vulnerability assessments', 'Implement robust encryption and access controls', 'Prepare for CompTIA Security+ or CEH certifications']
    },
    

    
      
      
      
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