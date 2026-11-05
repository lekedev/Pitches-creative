import { usePageMeta } from "../hooks/usePageMeta";
import { ButtonLink } from "../components/ui/Button";
import { PageIntro } from "../components/ui/PageIntro";

// TEMPORARY: stands in for /services and /work until they are built in Phase 4.
export default function InProgress({ title }: { title: string }) {
  usePageMeta({ title });

  return (
    <div className="min-h-[80svh]">
      <PageIntro
        eyebrow={title}
        title={
          <>
            Something good is <em>being built.</em>
          </>
        }
        lede="This page is being rebuilt. In the meantime, tell us what you're working on."
      >
        <div className="mt-12 md:ml-[33%]">
          <ButtonLink to="/contact">Start a Project</ButtonLink>
        </div>
      </PageIntro>
    </div>
  );
}
