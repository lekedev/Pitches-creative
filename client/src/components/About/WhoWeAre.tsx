import AboutSection from "./AboutSection";

function WhoWeAre() {
  return (
   
      <AboutSection
        id="who-we-are"
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
  
  );
}

export default WhoWeAre;