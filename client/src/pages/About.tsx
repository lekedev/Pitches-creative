import AboutHero from '../components/About/AboutHero';
import AboutSection from '../components/About/AboutSection';
import ScrollSpyNav from '../components/About/ScrollSpyNav';
import aboutBg from '../assets/images/bgAbout.png';

function About() {
  return (
    <div className="font-[Aspekta]">
      <ScrollSpyNav />

      <AboutHero />

      <AboutSection
        id="who-we-are"
        backgroundImage={aboutBg}
        heading={
          <>
            A <span className="text-[#FFC24F]">creative agency</span> for
            brands that want to be taken seriously.
          </>
        }
        paragraphs={[
          "Pitches Creative exists for businesses and organizations that know they need more than ordinary design. We work with founders, companies, startups, service providers, product brands, and institutions that want to improve how they are seen, how they communicate, and how they convert attention into trust.",
          "Our work sits at the intersection of creativity, strategy, and digital execution. We help clients define the right message, design the right visual system, and build the right digital experience to support their goals.",
          "Whether we are creating a brand identity, designing a campaign, building a website, or developing an app, our focus remains the same: to make your business clearer, stronger, and more memorable.",
        ]}
        ctaLabel="Lets Talk"
        ctaTo="/contact"
      />

      <AboutSection
        id="what-we-represent"
        backgroundImage={aboutBg}
        heading={
          <>
            Good <span className="text-[#FFC24F]">creative</span> work should be
            beautiful, useful, and intentional.
          </>
        }
        paragraphs={[
          "We do not believe in design that only looks good on the surface. We believe every visual decision should support a bigger purpose — clarity, trust, recognition, communication, conversion, or growth.",
          "Our ethos is simple: build creative systems that help brands show up with confidence and direction.",
        ]}
        ctaLabel="Lets Talk"
        ctaTo="/contact"
        cards={[
          {
            icon: "/about/dice.png",
            heading: (
              <>
                Beauty With <span className="text-[#FFC24F]">Function</span>
              </>
            ),
            description:
              "Before we design, we understand. We look at your business, audience, message, goals, and competitive space so the creative direction is rooted in purpose, not guesswork.",
          },
          {
            icon: "/about/dice.png",
            heading: (
              <>
                <span className="text-[#FFC24F]">Clarity</span> Before Creativity
              </>
            ),
            description:
              "Before we design, we understand. We look at your business, audience, message, goals, and competitive space so the creative direction is rooted in purpose, not guesswork.",
            featured: true,
          },
          {
            icon: "/about/dice.png",
            heading: (
              <>
                <span className="text-[#FFC24F]">Strategy</span> in Every Detail
              </>
            ),
            description:
              "Before we design, we understand. We look at your business, audience, message, goals, and competitive space so the creative direction is rooted in purpose, not guesswork.",
          },
        ]}
      />

      <section id="our-process" className="min-h-screen bg-[#0a0a0a] px-5 py-20 text-white lg:px-12 lg:pr-64">
        <p className="text-white/40">Our Process — coming soon</p>
      </section>

      <section id="our-team" className="min-h-screen bg-[#0a0a0a] px-5 py-20 text-white lg:px-12 lg:pr-64">
        <p className="text-white/40">Our Team — coming soon</p>
      </section>
    </div>
  );
}

export default About;