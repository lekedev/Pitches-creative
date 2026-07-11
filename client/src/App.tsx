import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import ApproachSection from './components/About/ApproachSection';
import LogoMarquee from './assets/logos/LogoMarquee';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import BlogTeaser from './components/Blog/BlogTeaser';

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
      <Services />
      <Testimonials />
      <BlogTeaser />
      {/* <Route path="/services" element={<Services />} /> */}
      
    </div>
  );
}

export default App;