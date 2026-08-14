import BrandingHero from '../components/Branding/BrandingHero';
import SelectedProjects from '../components/Branding/SelectedProjects';
import NewsletterSignup from '../components/Insights/NewsletterSignup';

function Branding() {
  return (
    <div className="relative bg-[#0a0a0a] font-[Aspekta]">
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/technology/stars-bg.png)" }}
      />
      <div className="relative z-10">
        <BrandingHero />
        <SelectedProjects />
        <NewsletterSignup />
      </div>
    </div>
  );
}

export default Branding;