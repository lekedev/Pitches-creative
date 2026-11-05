import { usePageMeta } from "../hooks/usePageMeta";
import { HomeHero } from "../sections/home/HomeHero";
import { BrandIntro } from "../sections/home/BrandIntro";
import { WhatWeDo } from "../sections/home/WhatWeDo";
import { FeaturedWork } from "../sections/home/FeaturedWork";
import { Approach } from "../sections/home/Approach";
import { WhyUs } from "../sections/home/WhyUs";
import { ClosingCta } from "../sections/home/ClosingCta";

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
      <ClosingCta />
    </>
  );
}
