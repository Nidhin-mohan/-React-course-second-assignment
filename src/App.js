import About from "./Components/About";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import PortFolio from "./Components/Portfolio";
import "./css/styles.css"


const App = () => {
  return (
    <div>
     <Navbar/>
     <HeroSection/>
     <PortFolio/>
     <About/>
     <ContactMe/>
     <Footer/>
    </div>
  );
};

export default App;
