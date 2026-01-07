import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: '📊',
      title: 'General Procurement & Contract',
      description: 'End-to-end procurement solutions and contract management services tailored to your business needs.',
      features: ['Vendor Management', 'Contract Negotiation', 'Supply Chain Optimization']
    },
    {
      id: 2,
      icon: '🏢',
      title: 'Project & Facility Management',
      description: 'Comprehensive project planning and facility management services ensuring operational excellence.',
      features: ['Project Planning', 'Facility Maintenance', 'Operations Management']
    },
    {
      id: 3,
      icon: '💻',
      title: 'Computer & Engineering Training',
      description: 'Professional training programs in software development, computer repairs, and engineering technologies.',
      features: ['Software Development', 'Hardware Repair', 'Technical Skills']
    },
    {
      id: 4,
      icon: '🔧',
      title: 'ICT Solutions & Gadgets',
      description: 'Cutting-edge IT solutions, gadget sales, and technology infrastructure setup and support.',
      features: ['IT Infrastructure', 'Gadget Sales', 'Technical Support']
    },
    {
      id: 5,
      icon: '🔍',
      title: 'General Researches & Consult',
      description: 'In-depth research and strategic consultancy services to drive your business growth and innovation.',
      features: ['Market Research', 'Business Strategy', 'Innovation Consulting']
    }
  ];


  const HandleServicesLocation = (title) => {
  
    if (title == "General Procurement & Contract") {
      window.location.assign("/services/procurement")
    }
    else if (title == "Project & Facility Management") {
      window.location.assign("/services/project-management")
    }
    else if (title == "Computer & Engineering Training") {
      window.location.assign("/training")
    }
    else if (title == "ICT Solutions & Gadgets") {
      window.location.assign("/services/ict-solutions")
    }
    else {
      window.location.assign("/services/learning-and-capacity-building")
    }
      
    
    
  }


  return (
    <section className="services" id="services">
      <div className="services-container">
        
        {/* Section Header */}
        <div className="services-header">
          <h2 className="services-title">What We Are Doing?</h2>
          <p className="services-subtitle">
            We provide comprehensive solutions across multiple domains to help your business 
            thrive in today's competitive landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              
              <h3 className="service-title">{service.title}</h3>
              
              <p className="service-description">
                {service.description}
              </p>
              
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="service-cta" onClick={()=>HandleServicesLocation(service.title)}>
                Learn More <span className="arrow">→</span>
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="services-cta-home">
          <p>Ready to transform your business with our expert services?</p>
          <button className="cta-button">Get Started Today</button>
        </div>

      </div>
    </section>
  );
};

export default Services;