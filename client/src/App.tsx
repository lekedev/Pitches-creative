import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import ApproachSection from './components/About/ApproachSection';
import LogoMarquee from './assets/logos/LogoMarquee';
// import Contact from './pages/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Work />
      <ApproachSection />
      <LogoMarquee />
      
    </div>
  );
}

export default App;