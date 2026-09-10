import { Routes, Route } from 'react-router-dom';
import AboutLayout from '../components/About/AboutLayout';
import AboutHero from '../components/About/AboutHero';
import WhoWeAre from '../components/About/WhoWeAre';
import OurEthos from '../components/About/OurEthos';
import OurProcess from '../components/About/OurProcess';
import MeetTheTeam from '../components/About/MeetTheTeam';

function About() {
  return (
    <Routes>
      <Route element={<AboutLayout />}>
        <Route index element={<AboutHero />} />
        <Route path="who-we-are" element={<WhoWeAre />} />
        <Route path="what-we-represent" element={<OurEthos />} />
        <Route path="our-process" element={<OurProcess />} />
        <Route path="our-team" element={<MeetTheTeam />} />
      </Route>
    </Routes>
  );
}

export default About;
