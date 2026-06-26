import React, { useEffect, useState } from "react";

/** Brief intro overlay. Always self-dismisses (max ~1.4s) so content is never blocked. */
const Preloader: React.FC = () => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hardStop = setTimeout(() => setDone(true), reduce ? 200 : 1400);
    const onLoad = () => setTimeout(() => setDone(true), 500);
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad);
    return () => {
      clearTimeout(hardStop);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-700 ${done ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      style={{ background: "#05060c" }}
      aria-hidden="true"
    >
      <div className="text-center">
        <div className="text-4xl font-bold font-heading tracking-tight">
          <span className="text-portfolio-light">V</span><span className="gradient-text">M</span>
        </div>
        <div className="mt-5 h-[2px] w-36 mx-auto overflow-hidden rounded bg-white/10">
          <div className="h-full" style={{ background: "linear-gradient(90deg,#7D5DFF,#FF5EAD)", animation: "loadbar 1.2s cubic-bezier(0.4,0,0.2,1) forwards" }} />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
