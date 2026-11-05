import { ButtonLink } from "../../components/ui/Button";
import { Reveal } from "../../components/ui/Reveal";

export function ClosingCta() {
  return (
    <section aria-labelledby="cta-heading" className="border-t border-line">
      <div className="container-page section-y">
        <Reveal>
          <h2 id="cta-heading" className="max-w-[12ch] text-display">
            Have something worth{" "}
            <em className="font-serif font-normal italic tracking-[-0.02em] text-ember">building?</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-12 flex flex-col gap-8 md:ml-[33%] md:mt-16 md:flex-row md:items-center md:justify-between">
          <p className="max-w-sm text-lede text-stone">Let's turn your next idea into something meaningful.</p>
          <ButtonLink to="/contact" className="shrink-0">
            Let's Talk
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
