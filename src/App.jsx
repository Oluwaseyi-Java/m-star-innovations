
import { Route, Router, Routes} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from "./pages/About"
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'


function App() {
  
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<Services />} />
          <Route path="/training" element={<Training />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Footer />
      </div>
  )
}

export default App
