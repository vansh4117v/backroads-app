import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Tours from "./components/Tours";
import { serviceData, toursData } from "./data";


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <About />

      <Services serviceData={serviceData} />

      <Tours toursData={toursData} />
      <Footer />
    </div>
  );
};

export default App;
