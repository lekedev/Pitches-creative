import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

interface PageIntroProps {
  eyebrow: string;
  /** The h1. Wrap a phrase in <em> to set it in the editorial serif. */
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
}

/** Opening block shared by every inner page: label, oversized h1, lede. */
export function PageIntro({ eyebrow, title, lede, children }: PageIntroProps) {
  return (
    <header className="container-page pb-16 pt-36 sm:pt-44 md:pb-24 lg:pt-52">
      <Reveal immediate>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal immediate delay={0.08}>
        <h1 className="mt-8 max-w-[14ch] text-headline [&_em]:font-serif [&_em]:font-normal [&_em]:italic [&_em]:tracking-[-0.02em]">
          {title}
        </h1>
      </Reveal>
      {lede && (
        <Reveal immediate delay={0.16}>
          <p className="mt-10 max-w-2xl text-lede text-stone md:ml-[33%]">{lede}</p>
        </Reveal>
      )}
      {children}
    </header>
  );
}
