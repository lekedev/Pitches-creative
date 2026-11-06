import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Resets scroll on route change. If the URL carries a #hash, scrolls to that
 * element instead — retrying briefly because lazy-loaded pages may not have
 * rendered the target yet.
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    let attempts = 0;
    let frame = 0;
    const tryScroll = () => {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        target.scrollIntoView({ block: "start" });
      } else if (attempts++ < 60) {
        frame = requestAnimationFrame(tryScroll);
      }
    };
    tryScroll();
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
