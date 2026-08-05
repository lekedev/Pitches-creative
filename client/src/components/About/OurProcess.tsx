
import AboutSection from "./AboutSection";
import aboutBg from "../../assets/images/bgAbout.png";
import prizm50 from "../../assets/images/prizm50 1.png";
import prizm45 from "../../assets/images/prizm45 1.png";
import prizm55 from "../../assets/images/prizm45 1.png";
import prizm60 from "../../assets/images/prizm45 1.png";
import prizm65 from "../../assets/images/prizm45 1.png";

function OurProcess() {
  return (
    <AboutSection
      id="our-process"
      cardsLayout="uniform"
      backgroundImage={aboutBg}
      heading={
        <>
          A <span className="text-[#FFC24F]">clear path</span> from idea to{" "}
          <span className="text-[#FFC24F]">execution.</span>
        </>
      }
      paragraphs={[
        "Creative projects work best when the process is structured. We guide every project through clear stages so ideas become organized, decisions become easier, and the final work is delivered with purpose.",
      ]}
      cards={[
        {
          icon: prizm50,
          heading: "Discover",
          description:
            "We begin by understanding your business, goals, audience, challenges, current brand presence, and what success should look like.",
        },
        {
          icon: prizm45,
          heading: "Discover",
          description:
            "We begin by understanding your business, goals, audience, challenges, current brand presence, and what success should look like.",
        },
        {
          icon: prizm55,
          heading: "Discover",
          description:
            "We begin by understanding your business, goals, audience, challenges, current brand presence, and what success should look like.",
        },
        {
          icon: prizm60,
          heading: "Discover",
          description:
            "We begin by understanding your business, goals, audience, challenges, current brand presence, and what success should look like.",
        },
        {
          icon: prizm65,
          heading: "Discover",
          description:
            "We begin by understanding your business, goals, audience, challenges, current brand presence, and what success should look like.",
        },
      ]}
    />
 
  );
}

export default OurProcess;