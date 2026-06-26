import React, { useEffect, useState } from "react";

/** Slim gradient progress bar pinned to the top, tracking scroll depth. */
const ScrollProgress: React.FC = () => {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setP(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2.5px] z-[60] pointer-events-none">
      <div
        className="h-full origin-left"
        style={{ width: `${p}%`, background: "linear-gradient(90deg,#7D5DFF,#FF5EAD)", boxShadow: "0 0 12px rgba(125,93,255,0.6)", transition: "width 0.1s linear" }}
      />
    </div>
  );
};

export default ScrollProgress;
