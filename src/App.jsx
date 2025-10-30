import { Route, Routes } from "react-router-dom"
import About from "./components/about/About.jsx"
import Contact from "./components/contact/Contact.jsx"
import Footer from "./components/footer/Footer.jsx"
import Hero from "./components/hero/Hero.jsx"
import Navbar from "./components/navbar/Navbar.jsx"
import Portfolio from "./components/portfolio/Portfolio.jsx"
 
function App(){
      
  return(
    <>
     <Navbar/>
        <Routes>
            <Route path="/" element={
              <>
              <Hero/>
              <Portfolio/>
              <About/>
              <Contact/>
              </>
              }></Route>
            <Route path="/portfolio" element={<Portfolio/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
     <Footer/>
    </>
  )
}
export default App