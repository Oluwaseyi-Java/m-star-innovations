import React, { useState } from 'react';
import './Procurement.css';

const Procurement = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const procurementCategories = [
    {
      icon: '💼',
      title: 'Office Equipment & Computers',
      items: ['Computers & Laptops', 'Printers & Scanners', 'Office Furniture', 'Stationery Supplies']
    },
    {
      icon: '🚨',
      title: 'Security & Safety Equipment',
      items: ['Fire Safety Equipment', 'Security Systems', 'Personal Protective Equipment', 'Emergency Response Gear']
    },
    {
      icon: '🔧',
      title: 'Mechanical & Electrical',
      items: ['Mechanical Spares', 'Electrical Instruments', 'Industrial Equipment', 'Maintenance Tools']
    },
    {
      icon: '🧪',
      title: 'Medical & Laboratory',
      items: ['Medical Equipment', 'Laboratory Instruments', 'Chemicals & Reagents', 'Healthcare Supplies']
    },
    {
      icon: '🏗️',
      title: 'Civil & Construction',
      items: ['Construction Materials', 'Building Supplies', 'Civil Engineering Equipment', 'Infrastructure Materials']
    },
    {
      icon: '🌾',
      title: 'Agricultural Products',
      items: ['Farm Produce', 'Agricultural Commodities', 'Farming Equipment', 'Agro-Chemicals']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Requirement Analysis',
      description: 'We understand your specific needs and technical requirements'
    },
    {
      step: '02',
      title: 'Supplier Sourcing',
      description: 'Identify and vet qualified suppliers from our extensive network'
    },
    {
      step: '03',
      title: 'Quality Assurance',
      description: 'Ensure all products meet quality standards and specifications'
    },
    {
      step: '04',
      title: 'Timely Delivery',
      description: 'Coordinate logistics for on-time delivery to your location'
    }
  ];

  const industries = [
    { name: 'Government Agencies', icon: '🏛️' },
    { name: 'Healthcare', icon: '🏥' },
    { name: 'Education', icon: '🎓' },
    { name: 'Construction', icon: '👷' },
    { name: 'Agriculture', icon: '🌱' },
    { name: 'Manufacturing', icon: '🏭' }
  ];

  return (
    <div className="procurement-page">
      
      {/* Hero Section */}
      <section className="procurement-hero">
        <div className="procurement-hero-container">
          <div className="procurement-hero-content">
            <h1 className="procurement-hero-title">Expert Procurement Solutions</h1>
            <p className="procurement-hero-subtitle">
              Reliable sourcing and supply of quality equipment and materials across Nigeria
            </p>
            <div className="hero-actions">
              <button className="cta-button" onClick={() => setIsEnquiryOpen(true)}>
                Request Quote
              </button>
              <button className="secondary-button">
                View Our Catalog
              </button>
            </div>
          </div>
          <div className="procurement-hero-image">
            <div className="hero-graphic">
              <div className="graphic-element">📦</div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="procurement-intro">
        <div className="container">
          <div className="intro-content">
            <h2>Comprehensive Procurement Services</h2>
            <div className="underline"></div>
            <p className="intro-text">
              M-STAR Innovations is committed and specialized to procure and supply of Office equipments, 
              Computers, printing equipment, Security/Safety/Fire equipment, Mechanical spares, electrical 
              instrumentation, Chemical, Medical and Laboratory equipment, civil materials, agriculture 
              produces and commodities and associated services to ever vibrant Nigeria market.
            </p>
            <p className="intro-text">
              Also, specializes in renovation, restoration and new construction of custom residential and 
              light commercial projects. We provides our customers with global procurement and contracts 
              services that are unsurpassed in the industry. M-STAR Innovations offers the preferred high 
              quality products and services at cost effectiveness to customers ranging from private to public 
              with the convenience of timely delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Procurement Categories */}
      <section className="procurement-categories">
        <div className="pro-cat-container">
          <div className="categories-header"> 
            <h2>Our Procurement Categories</h2>
            <p>Comprehensive range of equipment and materials for various industries</p>
            <div className="underline"></div>
          </div>
          
          <div className="pro-categories-grid">
            {procurementCategories.map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.title}</h3>
                <ul className="category-items">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <div className="why-content">
            <div className="why-text">
              <h2>Why Choose M-STAR for Procurement?</h2>
              <div className="underline"></div>
              <div className="benefits-list">
                <div className="benefit-item">
                  <span className="benefit-icon-procure">✓</span> 
                  <div className="benefit-content">
                    <h4>Quality Assurance</h4>
                    <p>All products meet international quality standards and specifications</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon-procure">✓</span>
                  <div className="benefit-content">
                    <h4>Cost Effectiveness</h4>
                    <p>Competitive pricing without compromising on quality and service</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon-procure">✓</span>
                  <div className="benefit-content">
                    <h4>Timely Delivery</h4>
                    <p>Efficient logistics network ensuring prompt delivery across Nigeria</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon-procure">✓</span>
                  <div className="benefit-content">
                    <h4>Extensive Network</h4>
                    <p>Strong relationships with manufacturers and suppliers worldwide</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="why-image">
              <div className="stats-card">
                <h3>Our Procurement Impact</h3>
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label-p">Projects Completed</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100+</span>
                  <span className="stat-label-p">Reliable Suppliers</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">98%</span>
                  <span className="stat-label-p">On-Time Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="procurement-process">
        <div className="container">
          <div className="process-header">
            <h2>Our Procurement Process</h2>
            <p>Streamlined approach to ensure efficiency and quality</p>
            <div className="underline"></div>
          </div>
          
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="industries-served">
        <div className="container">
          <div className="industries-header">
            <h2>Industries We Serve</h2>
            <p>Providing procurement solutions across multiple sectors</p>
            <div className="underline"></div>
          </div>
          
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <div key={index} className="industry-card">
                <div className="industry-icon">{industry.icon}</div>
                <h4>{industry.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="procurement-cta">
        <div className="container">
          <div className="cta-content-procure">
            <h2>Ready to Streamline Your Procurement?</h2>
            <p>Contact us today for competitive quotes and reliable supply chain solutions</p>
            <div className="cta-buttons">
              <button className="primary-cta" onClick={() => setIsEnquiryOpen(true)}>
                Get Free Consultation
              </button>
              <button className="secondary-cta">
                Download Brochure
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
            <h3>Procurement Enquiry</h3>
            <form className="enquiry-form">
              <div className="form-group">
                <label>Company Name</label>
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
                <label>Procurement Needs</label>
                <select>
                  <option value="">Select category</option>
                  <option value="office">Office Equipment & Computers</option>
                  <option value="security">Security & Safety Equipment</option>
                  <option value="mechanical">Mechanical & Electrical</option>
                  <option value="medical">Medical & Laboratory</option>
                  <option value="construction">Civil & Construction</option>
                  <option value="agriculture">Agricultural Products</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Specific Requirements</label>
                <textarea 
                  placeholder="Describe your specific procurement needs..."
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

export default Procurement;