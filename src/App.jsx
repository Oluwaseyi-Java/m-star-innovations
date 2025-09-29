
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import Services from './components/Services/Services'
import Training from './components/Training/Training'
import ShopPreview from './components/ShopPreview/ShopPreview'


function App() {
  
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Training />
      <ShopPreview/>

      <Footer/>
    </>
  )
}

export default App
