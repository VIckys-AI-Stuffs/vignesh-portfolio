import React from "react";

const items = [
  "React Native", "TypeScript", "React", "Redux", "New Architecture (Fabric)", "TurboModules",
  "SSO / OAuth", "AWS", "Firebase", "Node", "Java", "Python", "REST APIs", "CI/CD", "Datadog",
];

/** Full-width infinite ticker of technologies. Pauses on hover. */
const TechMarquee: React.FC = () => (
  <section className="relative !py-10 border-y border-white/5 overflow-hidden">
    <div className="marquee group">
      <div className="marquee-track">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="mx-6 inline-flex items-center gap-3 text-lg font-medium text-portfolio-light/45">
            {t}
            <span className="w-1.5 h-1.5 rounded-full bg-portfolio-secondary/60" />
          </span>
        ))}
      </div>
    </div>
    {/* edge fades */}
    <div className="pointer-events-none absolute inset-y-0 left-0 w-32" style={{ background: "linear-gradient(90deg,#05060c,transparent)" }} />
    <div className="pointer-events-none absolute inset-y-0 right-0 w-32" style={{ background: "linear-gradient(270deg,#05060c,transparent)" }} />
  </section>
);

export default TechMarquee;
