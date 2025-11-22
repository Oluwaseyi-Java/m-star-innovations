import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email Us',
      details: 'info@mstarinnovations.com',
      subtitle: 'Send us an email anytime',
      link: 'mailto:info@mstarinnovations.com'
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: '+234 812 345 6789',
      subtitle: 'Mon to Fri 9am to 6pm',
      link: 'tel:+2348123456789'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      details: '123 Innovation Drive, Tech City',
      subtitle: 'Lagos, Nigeria',
      link: 'https://maps.google.com'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      details: '+234 812 345 6789',
      subtitle: 'Quick responses',
      link: 'https://wa.me/2348123456789'
    }
  ];

  const services = [
    'General Procurement',
    'Project Management',
    'IT Training',
    'ICT Solutions',
    'Business Consultancy',
    'Laptop Sales',
    'Other'
  ];

  return (
    <section className="contact" >
      <div className="contact-container">
        
        {/* Section Header */}
        <div className="contact-header" id="contact">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Ready to start your project? Contact us today and let's discuss how we can help 
            your business grow with our innovative solutions.
          </p>
        </div>

        <div className="contact-content">
          
          {/* Contact Information */}
          <div className="contact-info">
            <h3 className="info-title">Let's Talk</h3>
            <p className="info-description">
              We're here to answer any questions you may have about our services. 
              Reach out to us and we'll respond as soon as we can.
            </p>

            {/* Contact Methods */}
            <div className="contact-methods">
              {contactInfo.map((item, index) => (
                <a key={index} href={item.link} className="contact-method" target="_blank" rel="noopener noreferrer">
                  <div className="method-icon">{item.icon}</div>
                  <div className="method-content">
                    <h4 className="method-title">{item.title}</h4>
                    <p className="method-detail">{item.details}</p>
                    <p className="method-subtitle">{item.subtitle}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Office Hours */}
            <div className="office-hours">
              <h4>Office Hours</h4>
              <div className="hours-list">
                <div className="hour-item">
                  <span className="day">Monday - Friday</span>
                  <span className="time">9:00 AM - 6:00 PM</span>
                </div>
                <div className="hour-item">
                  <span className="day">Saturday</span>
                  <span className="time">10:00 AM - 4:00 PM</span>
                </div>
                <div className="hour-item">
                  <span className="day">Sunday</span>
                  <span className="time">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 className="form-title">Send us a Message</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="service" className="form-label">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Tell us about your project or inquiry..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
                <span className="btn-arrow">→</span>
              </button>
            </form>
          </div>

        </div>

        {/* Map Section */}
        <div className="map-section">
          <div className="map-placeholder">
            <div className="map-content">
              <div className="map-icon">🗺️</div>
              <h3>Our Location</h3>
              <p>123 Innovation Drive, Tech City, Lagos, Nigeria</p>
              <button className="map-btn">View on Google Maps</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;