import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { site } from "../data/site";

interface PageMeta {
  /** Page name, e.g. "Services". Omit on the homepage for the full brand title. */
  title?: string;
  description?: string;
  /** Absolute or root-relative image for social cards. */
  image?: string;
}

const DEFAULT_TITLE = `${site.name} — ${site.tagline}`;
const DEFAULT_IMAGE = "/og-image.png";

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    document.head.appendChild(el);
  }
  el.href = href;
}

/**
 * Sets the document title, description, canonical URL and Open Graph /
 * Twitter tags for the current page. index.html carries the same defaults so
 * crawlers that don't execute JS still see sensible values.
 */
export function usePageMeta({ title, description = site.description, image = DEFAULT_IMAGE }: PageMeta = {}) {
  const { pathname } = useLocation();

  useEffect(() => {
    const fullTitle = title ? `${title} — ${site.name}` : DEFAULT_TITLE;
    const url = `${site.url}${pathname === "/" ? "" : pathname}`;
    const imageUrl = image.startsWith("http") ? image : `${site.url}${image}`;

    document.title = fullTitle;
    setMeta("name", "description", description);
    setCanonical(url);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", imageUrl);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", imageUrl);
  }, [title, description, image, pathname]);
}
