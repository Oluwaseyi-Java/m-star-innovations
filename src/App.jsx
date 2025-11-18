
import { Route, Router, Routes} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from "./pages/About"
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Training from './pages/Training'
import CourseDetail from './components/Training Page Component/CourseDetail'
import Procument from './pages/Procument'
import IctGadgetSolutions from './pages/IctGadgetSolutions'
import ProjectManagement from './pages/ProjectManagement'
import LandCB from './pages/LandCB'
import Shop from './pages/Shop'

function App() {
  
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/training" element={<Training />} />
        <Route path="/training/:courseId" element={<CourseDetail />} />
        <Route path='/services/procurement' element={<Procument />} />
        <Route path='/services/ict-solutions' element={<IctGadgetSolutions />} />
        <Route path='/services/project-management' element={<ProjectManagement />} />
        <Route path='/services/learning-and-capacity-building' element={<LandCB />} />
        <Route path='/Shop/Marketplace' element={<Shop/>}/>

        {/* <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<Services />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Footer />
      </div>
  )
}

export default App
