
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import Services from './components/Services/Services'
import Training from './components/Training/Training'
import ShopPreview from './components/ShopPreview/ShopPreview'
import Testimonials from './components/Testimonial/Testimonials'
import Contact from './components/Conteact/Contact'


function App() {
  
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Training />
      <ShopPreview />
      <Testimonials />
      <Contact/>

      <Footer/>
    </>
  )
}

export default App
