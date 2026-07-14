// pages/Home.tsx
import Hero from '../components/Hero/Hero';
import AboutIntro from '../components/About/AboutIntro';
import ApproachSection from '../components/About/ApproachSection';
import LogoMarquee from '../assets/logos/LogoMarquee';
import StatsCarousel from '../components/Work/StatsCarousel';
import ServicesIntro from '../components/Services/ServicesIntro';
import ServicesCarousel from '../components/Services/ServicesCarousel';
import PortfolioShowcase from '../components/Services/PortfolioShowcase';
import TestimonialsIntro from '../components/Testimonials/TestimonialsIntro';
import TestimonialsGrid from '../components/Testimonials/TestimonialsGrid';
import BlogTeaser from '../components/Blog/BlogTeaser';
import ContactHero from '../components/Contact/ContactHero';

function Home() {
  return (
    <div>
      <Hero />
      <AboutIntro />
      <ApproachSection />
      <LogoMarquee />
      <StatsCarousel />
      <ServicesIntro />
      <ServicesCarousel />
      <PortfolioShowcase />
      <TestimonialsIntro />
      <TestimonialsGrid />
      <BlogTeaser />
      <ContactHero />
    </div>
  );
}

export default Home;