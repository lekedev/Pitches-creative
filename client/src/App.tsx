// App.tsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
// import Work from './pages/Work';
// import Services from './pages/Services';
// import Testimonials from './pages/Testimonials';
import Insights from './pages/Insights';
import InsightsAll from './pages/InsightsAll';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/work" element={<Work />} /> */}
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/testimonials" element={<Testimonials />} /> */}
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/all" element={<InsightsAll />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;