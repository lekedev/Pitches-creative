import AboutSection from "./AboutSection";

function WhoWeAre() {
  return (
   
      <AboutSection
        id="who-we-are"
        heading={
          <>
            A <span className="text-[#FFC24F]">technology and media company</span>{" "}
            for businesses that want to be taken seriously.
          </>
        }
        paragraphs={[
          "The Stable Company is a separate, independent organisation built for businesses that need more than one kind of expertise. We work with founders, companies, startups, service providers, product brands, and institutions that want to improve how they are seen, how they communicate, and how they convert attention into trust.",
          "Our work sits at the intersection of technology, video production, photography, and design. We build the software, produce the films, and capture the images our clients need to support their goals.",
          "Whether we are developing an app, shooting a commercial, photographing a product line, or covering a live event, our focus remains the same: to make your business clearer, stronger, and more memorable.",
        ]}
        ctaLabel="Lets Talk"
        ctaTo="/contact"
        cardsLayout="quad"
        cards={[
          {
            icon: "/about/icon-diamond.png",
            heading: "Strategy-Led",
            description:
              "Every project begins with understanding your business, audience, goals, and market position.",
          },
          {
            icon: "/about/icon-diamond.png",
            heading: "Production-Ready",
            description:
              "Professional cameras, lighting, audio, and engineering — the tools and crew to deliver at a high standard.",
          },
          {
            icon: "/about/icon-diamond.png",
            heading: "Multi-Disciplinary",
            description:
              "Technology, video, photography, and design under one roof, so every part of your project fits together.",
          },
          {
            icon: "/about/icon-diamond.png",
            heading: "Built for Growth",
            description:
              "Our goal is to help your business communicate better, attract better, and convert better.",
          },
        ]}
      />
  
  );
}

export default WhoWeAre;