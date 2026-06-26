import React, { useEffect, useRef } from "react";
import Lenis from "lenis";

/**
 * Fluid + interactive layer:
 *  - Lenis momentum/smooth scrolling (exposed on window.__lenis for nav)
 *  - a soft glow that trails the cursor
 *  - a spotlight that follows the cursor across .panel cards
 * All effects respect prefers-reduced-motion and coarse (touch) pointers.
 */
const Interactive: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;

    let lenis: Lenis | null = null;
    let scrollRaf = 0;
    if (!reduce) {
      lenis = new Lenis({ duration: 1.1, smoothWheel: true, touchMultiplier: 1.6 });
      (window as unknown as { __lenis?: Lenis }).__lenis = lenis;
      const raf = (time: number) => {
        lenis?.raf(time);
        scrollRaf = requestAnimationFrame(raf);
      };
      scrollRaf = requestAnimationFrame(raf);
    }

    let mx = window.innerWidth / 2,
      my = window.innerHeight / 2,
      cx = mx,
      cy = my,
      glowRaf = 0;

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      const panel = (e.target as HTMLElement)?.closest?.(".panel") as HTMLElement | null;
      if (panel) {
        const r = panel.getBoundingClientRect();
        panel.style.setProperty("--mx", `${e.clientX - r.left}px`);
        panel.style.setProperty("--my", `${e.clientY - r.top}px`);
      }
    };

    const animateGlow = () => {
      cx += (mx - cx) * 0.14;
      cy += (my - cy) * 0.14;
      if (glowRef.current) glowRef.current.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      glowRaf = requestAnimationFrame(animateGlow);
    };

    if (fine) {
      window.addEventListener("pointermove", onMove, { passive: true });
      if (!reduce) glowRaf = requestAnimationFrame(animateGlow);
    }

    return () => {
      cancelAnimationFrame(scrollRaf);
      cancelAnimationFrame(glowRaf);
      window.removeEventListener("pointermove", onMove);
      lenis?.destroy();
      (window as unknown as { __lenis?: Lenis }).__lenis = undefined;
    };
  }, []);

  return <div ref={glowRef} aria-hidden="true" className="cursor-glow" />;
};

export default Interactive;
