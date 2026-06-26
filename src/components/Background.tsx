import React from "react";

/** Fixed, futuristic backdrop: drifting gradient orbs + grid + film grain. */
const Background: React.FC = () => (
  <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
    <div className="absolute inset-0" style={{ background: "radial-gradient(120% 80% at 50% -10%, #0c0a1f 0%, #06060d 45%, #050509 100%)" }} />

    <div
      className="absolute -top-32 -left-24 w-[44rem] h-[44rem] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(125,93,255,0.32), transparent 62%)", filter: "blur(40px)", animation: "drift 22s ease-in-out infinite" }}
    />
    <div
      className="absolute top-1/3 -right-32 w-[40rem] h-[40rem] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(255,94,173,0.22), transparent 62%)", filter: "blur(50px)", animation: "drift 28s ease-in-out infinite reverse" }}
    />
    <div
      className="absolute bottom-0 left-1/4 w-[36rem] h-[36rem] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(56,138,221,0.18), transparent 62%)", filter: "blur(46px)", animation: "drift 25s ease-in-out infinite" }}
    />

    <div className="absolute inset-0 grid-overlay opacity-70" />
    <div className="absolute inset-0 noise-overlay" />
  </div>
);

export default Background;
