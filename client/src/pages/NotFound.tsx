import { usePageMeta } from "../hooks/usePageMeta";
import { ButtonLink } from "../components/ui/Button";
import { PageIntro } from "../components/ui/PageIntro";

export default function NotFound() {
  usePageMeta({ title: "Page not found", description: "The page you were looking for doesn't exist." });

  return (
    <div className="min-h-[80svh]">
      <PageIntro
        eyebrow="404"
        title={
          <>
            This page has <em>moved on.</em>
          </>
        }
        lede="The link may be out of date, or the page may never have existed. Everything we do is a click away."
      >
        <div className="mt-12 flex flex-wrap gap-4 md:ml-[33%]">
          <ButtonLink to="/" arrow="right">Back to home</ButtonLink>
          <ButtonLink to="/contact" variant="secondary">Contact us</ButtonLink>
        </div>
      </PageIntro>
    </div>
  );
}
