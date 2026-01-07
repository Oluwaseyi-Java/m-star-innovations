import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      initial: 'A',
      name: 'Amara Okafar',
      position: 'Lagos Entrepreneur',
      company: 'Tech Solutions Ltd',
      content: 'M-Star Innovations transformed our procurement process completely. Their training programs equipped our team with cutting-edge skills that boosted our productivity by 60%.',
      rating: 5
    },
    {
      id: 2,
      initial: 'K',
      name: 'Kwame Asante',
      position: 'Accra Business Owner',
      company: 'Asante Enterprises',
      content: 'The ICT solutions provided by M-Star have streamlined our operations significantly. Their professional approach and technical expertise are unmatched in the industry.',
      rating: 5
    },
    {
      id: 3,
      initial: 'F',
      name: 'Fatima Kone',
      position: 'Abidjan Trader',
      company: 'Kone Trading',
      content: 'Thanks to M-Star\'s project management services, we completed our facility upgrade ahead of schedule. Their attention to detail and professionalism were impressive.',
      rating: 4
    },
    {
      id: 4,
      initial: 'C',
      name: 'Chinedu Nwosu',
      position: 'Software Developer',
      company: 'DevTech Solutions',
      content: 'The Full-Stack Development course at M-Star was life-changing. I went from beginner to landing a job in just 3 months. The hands-on approach made all the difference.',
      rating: 5
    },
    {
      id: 5,
      initial: 'B',
      name: 'Bisi Adekunle',
      position: 'IT Manager',
      company: 'Global Finance Inc',
      content: 'We\'ve been using M-Star for all our computer hardware needs. The quality of laptops and accessories is exceptional, and their after-sales support is outstanding.',
      rating: 4
    },
    {
      id: 6,
      initial: 'D',
      name: 'David Mensah',
      position: 'Startup Founder',
      company: 'Innovate Africa',
      content: 'The business consultancy from M-Star helped us refine our strategy and secure funding. Their research insights were invaluable for our market entry.',
      rating: 5
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">
        
        {/* Section Header */}
        <div className="testimonials-header">
          <h2 className="testimonials-title">What Our Clients Say</h2>
          <p className="testimonials-subtitle">
            Real stories from satisfied clients and students across Africa
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              
              {/* Client Initial Avatar */}
              <div className="client-avatar">
                <span className="client-initial">{testimonial.initial}</span>
              </div>

              {/* Testimonial Content */}
              <div className="testimonial-content">
                <p className="testimonial-text">"{testimonial.content}"</p>
              </div>

              {/* Rating Stars */}
              <div className="testimonial-rating">
                {'★'.repeat(testimonial.rating)}
                {'☆'.repeat(5 - testimonial.rating)}
              </div>

              {/* Client Info */}
              <div className="client-info">
                <h4 className="client-name">{testimonial.name}</h4>
                <p className="client-position">{testimonial.position}</p>
                <p className="client-company">{testimonial.company}</p>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="testimonials-cta">
          <div className="cta-content-home">
            <h3>Join Our Success Stories</h3>
            <p>Start your journey with M-Star Innovations today and become our next success story.</p>
            <div className="cta-buttons">
              {/* <button className="primary-cta" ></button> */}
              <button className="secondary-cta" onClick={()=>window.location.assign("/services/procurement")}>Get Started</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;