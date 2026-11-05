import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  /** Seconds to wait before animating — use for gentle staggering. */
  delay?: number;
  /** Distance in px the content rises from. */
  y?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "header";
  /** Animate on mount rather than on scroll — use for above-the-fold content
   * so it never waits on an IntersectionObserver to become visible. */
  immediate?: boolean;
}

/**
 * Fades and lifts content in once as it enters the viewport. Transforms are
 * dropped automatically for visitors who prefer reduced motion
 * (MotionConfig reducedMotion="user" in App).
 */
export function Reveal({ children, delay = 0, y = 24, className, as = "div", immediate = false }: RevealProps) {
  const Component = motion[as];
  const trigger = immediate
    ? { animate: { opacity: 1, y: 0 } }
    : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 } };
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      {...trigger}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Component>
  );
}
