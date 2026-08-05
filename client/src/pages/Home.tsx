// pages/Home.tsx
import Hero from '../components/Hero/Hero';
import AboutIntro from '../components/About/AboutIntro';
import ApproachSection from '../components/About/ApproachSection';
import StatsCarousel from '../components/Work/StatsCarousel';
import ServicesIntro from '../components/Services/ServicesIntro';
import ServicesCarousel from '../components/Services/ServicesCarousel';
import PortfolioShowcase from '../components/Services/PortfolioShowcase';
import TestimonialsIntro from '../components/Testimonials/TestimonialsIntro';
import TestimonialsGrid from '../components/Testimonials/TestimonialsGrid';
import ContactHero from '../components/Contact/ContactHero';
import LogoMarquee from './LogoMarquee';
import InsightsTeaser from '../components/Insights/InsightsTeaser';

function Home() {
  return (
    <div>
      <Hero />
      <AboutIntro />
      <StatsCarousel />
      <ApproachSection />
      <LogoMarquee />
      
      <ServicesIntro />
      <ServicesCarousel />
      <PortfolioShowcase />
      <TestimonialsIntro />
      <TestimonialsGrid />
      <InsightsTeaser />
      <ContactHero />
    </div>
  );
}

export default Home;