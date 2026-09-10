import BrandingHero from '../components/Branding/BrandingHero';
import SelectedProjects from '../components/Branding/SelectedProjects';
import NewsletterSignup from '../components/Insights/NewsletterSignup';
import StarfieldBackground from '../components/shared/StarfieldBackground';

function Branding() {
  return (
    <div className="relative  font-[Aspekta]">
       <StarfieldBackground blur />

      <div className="relative z-10">
        <BrandingHero />
        <SelectedProjects />
        <NewsletterSignup />
      </div>
    </div>
  );
}

export default Branding;