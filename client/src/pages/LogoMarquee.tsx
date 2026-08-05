


const logos = [
  // { name: "Zapier", src: "/logos/zapier.png" },
  { name: "3", src: "/logos/3.png" },
  { name: "all-logo", src: "/logos/ALL-Logo.png" },
  { name: "allure", src: "/logos/Allure Logo W.png" },
  { name: "cronier", src: "/logos/cronier Hotel w.png" },
  { name: "Apex", src: "/logos/Apex Logo.png" },
  { name: "foodies", src: "/logos/Foodies Logo White.png" },
  { name: "graph", src: "/logos/Graph Logo White.png" },
  { name: "grey", src: "/logos/GREY@300x.png" },
  { name: "15", src: "/logos/LOGO 1_5.png" },
  { name: "logo", src: "/logos/Logo 2.png" },
  { name: "logo", src: "/logos/logo.svg" },
  { name: "lup", src: "/logos/LUP-Logo.png" },
  { name: "madnadyne", src: "/logos/Magnadyne Horizontal.png" },
  { name: "pink perfection", src: "/logos/Pink Perfection Logo.png" },
  { name: "sqw", src: "/logos/sqw.png" },
  { name: "white", src: "/logos/WHITE.png" },
];

// Duplicate the list so the CSS animation loops seamlessly
const loopLogos = [...logos, ...logos];

function LogoMarquee() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-16 lg:py-20">
      <div className="mb-10 flex justify-center px-5">
        <span className="rounded-full bg-[#FFC24F] px-6 py-2.5 w-[218px] text-sm font-medium font-[Barlow] text-black">
          Trusted By 250+ Companies
        </span>
      </div> 

      {/* Fade edges so the loop point isn't visually abrupt */}
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0a0a0a] to-transparent lg:w-32" /> */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent lg:w-32" />

      <div className="flex overflow-hidden">
        <div className="animate-marquee flex  flex-shrink-0 items-center gap-10 pr-16">
          {loopLogos.map((logos, i) => (
            <img
              key={`${logos.name}-${i}`}
              src={logos.src}
              alt={logos.name}
              className="
                w-[180px]
                text-white
                h-auto
                object-contain
                opacity-60
                grayscale
                transition-all
                duration-300
                hover:opacity-100
                hover:grayscale-0
                flex-shrink-0
                "
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoMarquee;