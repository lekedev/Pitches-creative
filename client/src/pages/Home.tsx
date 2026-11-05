import { usePageMeta } from "../hooks/usePageMeta";
import { HomeHero } from "../sections/home/HomeHero";
import { BrandIntro } from "../sections/home/BrandIntro";
import { WhatWeDo } from "../sections/home/WhatWeDo";
import { FeaturedWork } from "../sections/home/FeaturedWork";
import { Approach } from "../components/shared/Approach";
import { WhyUs } from "../sections/home/WhyUs";
import { CtaSection } from "../components/ui/CtaSection";

export default function Home() {
  usePageMeta();

  return (
    <>
      <HomeHero />
      <BrandIntro />
      <WhatWeDo />
      <FeaturedWork />
      <Approach />
      <WhyUs />
      <CtaSection />
    </>
  );
}
