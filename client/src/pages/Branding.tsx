import BrandingHero from '../components/Branding/BrandingHero';
import SelectedProjects from '../components/Branding/SelectedProjects';
import Footer from '../components/Footer/Footer';
import NewsletterSignup from '../components/Insights/NewsletterSignup';
import StarfieldBackground from '../components/shared/StarfieldBackground';

function Branding() {
  return (
    <div className="relative  font-[Aspekta]">
       <StarfieldBackground />
    
      <div className="relative z-10">
        <BrandingHero />
        <SelectedProjects />
        <NewsletterSignup />
        <Footer />
      </div>
    </div>
  );
}

export default Branding;