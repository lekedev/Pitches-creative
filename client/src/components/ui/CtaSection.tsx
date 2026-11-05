import type { ReactNode } from "react";
import { ButtonLink } from "./Button";
import { Reveal } from "./Reveal";

interface CtaSectionProps {
  /** Wrap a phrase in <em> for the ember serif accent. */
  title?: ReactNode;
  lede?: string;
  cta?: { label: string; to: string };
}

/** Closing call to action that sits directly above the footer on every page. */
export function CtaSection({
  title = (
    <>
      Have something worth <em>building?</em>
    </>
  ),
  lede = "Let's turn your next idea into something meaningful.",
  cta = { label: "Let's Talk", to: "/contact" },
}: CtaSectionProps) {
  return (
    <section aria-labelledby="cta-heading" className="border-t border-line">
      <div className="container-page section-y">
        <Reveal>
          <h2
            id="cta-heading"
            className="max-w-[12ch] text-display [&_em]:font-serif [&_em]:font-normal [&_em]:italic [&_em]:tracking-[-0.02em] [&_em]:text-ember"
          >
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-12 flex flex-col gap-8 md:ml-[33%] md:mt-16 md:flex-row md:items-center md:justify-between">
          <p className="max-w-sm text-lede text-stone">{lede}</p>
          <ButtonLink to={cta.to} className="shrink-0">
            {cta.label}
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
