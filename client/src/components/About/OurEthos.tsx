import AboutSection from "./AboutSection";
import aboutBg from "../../assets/images/bgAbout.png";
import diceSilver from "../../assets/images/dice.png";
import redDice from "../../assets/images/reddice.png";

function OurEthos() {
  return (

  
    <AboutSection
      id="what-we-represent"
      backgroundImage={aboutBg}
      heading={
        <>
          Good <span className="text-[#FFC24F]">creative</span> work should
          be beautiful, useful, and intentional.
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
          icon: redDice,
          heading: (
            <>
              <span className="text-[#FFC24F]">Clarity</span> Before
              Creativity
            </>
          ),
          description:
            "Before we design, we understand. We look at your business, audience, message, goals, and competitive space so the creative direction is rooted in purpose, not guesswork.",
          featured: true,
        },
        {
          icon: diceSilver,
          heading: (
            <>
              Beauty With <span className="text-[#FFC24F]">Function</span>
            </>
          ),
          description:
            "Before we design, we understand. We look at your business, audience, message, goals, and competitive space so the creative direction is rooted in purpose, not guesswork.",
        },
        {
          icon: diceSilver,
          heading: (
            <>
              Beauty With <span className="text-[#FFC24F]">Function</span>
            </>
          ),
          description:
            "Before we design, we understand. We look at your business, audience, message, goals, and competitive space so the creative direction is rooted in purpose, not guesswork.",
        },
        {
          icon: diceSilver,
          heading: (
            <>
              Beauty With <span className="text-[#FFC24F]">Function</span>
            </>
          ),
          description:
            "Before we design, we understand. We look at your business, audience, message, goals, and competitive space so the creative direction is rooted in purpose, not guesswork.",
        },
        {
          icon: diceSilver,
          heading: (
            <>
              Beauty With <span className="text-[#FFC24F]">Function</span>
            </>
          ),
          description:
            "Before we design, we understand. We look at your business, audience, message, goals, and competitive space so the creative direction is rooted in purpose, not guesswork.",
        },
      ]}
    />
  
  );
}

export default OurEthos;