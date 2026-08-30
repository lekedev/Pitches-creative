import NewsletterSignup from '../components/Insights/NewsletterSignup';
import TechHero from '../components/Technology/TechHero';
import TechIndustries from '../components/Technology/TechIndustries';
import TechIntro from '../components/Technology/TechIntro';
import TechProcess from '../components/Technology/TechProcess';
import TechServicesGrid from '../components/Technology/TechServiceGrid';
import TechShowcase from '../components/Technology/TechShowcase';
import StarfieldBackground from '../components/shared/StarfieldBackground';

function Technology() {
  return (
    <div className="relative bg-[#0a0a0a] font-[Aspekta]">
     <StarfieldBackground />
     
      

        <div className="relative z-10">
          
          <TechHero />
          <TechIntro />
          <TechServicesGrid />
          <TechIndustries />
          <TechProcess />
          <TechShowcase />
          <NewsletterSignup />
        </div>
       
      </div>
   
  );
}

export default Technology;