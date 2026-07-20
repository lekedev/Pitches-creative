import AboutHero from '../components/About/AboutHero';
import WhoWeAre from '../components/About/WhoWeAre';
import OurEthos from '../components/About/OurEthos';
import OurProcess from '../components/About/OurProcess';
import MeetTheTeam from '../components/About/MeetTheTeam';
import ScrollSpyNav from '../components/About/ScrollSpyNav';

function About() {
  return (
    <div className="font-[aspekta]">
      <ScrollSpyNav />
      <AboutHero />
      <WhoWeAre />
      <OurEthos />
      <OurProcess />
      <MeetTheTeam />
    </div>
  );
}

export default About;