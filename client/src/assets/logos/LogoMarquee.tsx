const logos = [
  { name: "Zapier", src: "./assets/logos/card.svg" },
  { name: "Spotify", src: "./assets/logos/card1.png" },
  { name: "Zoom", src: "./assets/logos/card2.png" },
  { name: "Slack", src: "./assets/logos/card3.png" },
  { name: "Amazon", src: "./assets/logos/card4.png" },
  { name: "Adobe", src: "./assets/logos/card5.png" },
];

// Duplicate the list so the CSS animation loops seamlessly
const loopLogos = [...logos, ...logos];

function LogoMarquee() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-16 lg:py-20">
      <div className="mb-10 flex justify-center px-5">
        <span className="rounded-full bg-[#FFC24F] px-6 py-2.5 text-sm font-medium text-black">
          Trusted By 250+ Companies
        </span>
      </div>

      {/* Fade edges so the loop point isn't visually abrupt */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0a0a0a] to-transparent lg:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent lg:w-32" />

      <div className="flex overflow-hidden">
        <div className="animate-marquee flex  flex-shrink-0 items-center gap-16 pr-16">
          {loopLogos.map((logo, i) => (
            <img
              key={`${logo.name}-${i}`}
              src={logo.src}
              alt={logo.name}
              className=" text-white w-[249.33px] h-[90px] flex-shrink-0 opacity-60 grayscale transition-opacity hover:opacity-100 lg:h-8"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoMarquee;