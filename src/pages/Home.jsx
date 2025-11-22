import React from 'react';
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Footer from '../components/Footer/Footer'
import Services from '../components/Services/Services'
import Training from '../components/Training/TrainingReview'
import ShopPreview from '../components/ShopPreview/ShopPreview'
import Testimonials from '../components/Testimonial/Testimonials'
import Contact from '../components/Contact/Contact'

const Home = () => {
    return (
        <div>

      <Hero />
      <Services />
      <Training />
      <ShopPreview />
      <Testimonials />
      <Contact/>

        </div>
    );
};

export default Home;