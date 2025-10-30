import About from "./components/about/About.jsx"
import Hero from "./components/hero/Hero.jsx"
import Navbar from "./components/navbar/Navbar.jsx"
import Portfolio from "./components/portfolio/Portfolio.jsx"
 
function App(){
      
  return(
    <>
     <Navbar/>
     <Hero/>
     <Portfolio/>
     <About/>
    </>
  )
}
export default App