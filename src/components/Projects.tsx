import React from "react";
import { ArrowUpRight, Github, Package } from "lucide-react";
import Reveal from "./ui/Reveal";
import TiltCard from "./ui/TiltCard";

const asset = (p: string) => `${import.meta.env.BASE_URL}${p}`;

interface Feature {
  name: string;
  tag: string;
  blurb: string;
  description: string;
  tech: string[];
  image: string;
  url?: string;
}

const featured: Feature[] = [
  {
    name: "Rewind",
    tag: "SaaS · EdTech · Web & Mobile",
    blurb: "Alumni engagement platform",
    description:
      "A one-stop alumni-management SaaS for educational institutions — a living alumni database, career-advancement support, fundraising and peer networking, delivered across web and mobile.",
    tech: ["React Native", "React", "Python", "AWS"],
    image: "works/campused.png",
    url: "https://eternosoft.in/rewind.html",
  },
  {
    name: "Passion AI (Ari)",
    tag: "EdTech · Web & Mobile",
    blurb: "Career-guidance platform, B2B & B2C",
    description:
      "An EdTech career-guidance product serving both B2B and B2C segments across web, Android and iOS — interactive tools and personalised recommendations on a modern cross-platform stack.",
    tech: ["React Native", "React", "AWS"],
    image: "works/desktop1.png",
    url: "https://eternosoft.in/PassionAi.html",
  },
  {
    name: "HealthXtra",
    tag: "E-Commerce · Web",
    blurb: "Health & wellness marketplace",
    description:
      "An online marketplace promoting the sale of health and wellness products — beauty, supplements and organic foods — engineered to reach buyers across every demographic.",
    tech: ["React", "E-Commerce", "REST APIs"],
    image: "works/Health_bg.png",
  },
  {
    name: "Campus Avenue — School ERP",
    tag: "SaaS · ERP · Web",
    blurb: "School-management ERP",
    description:
      "A school-management ERP that digitises student, faculty and parent workflows — fees payment, attendance and academic-record management unified in a single platform.",
    tech: ["React", "TypeScript", "REST APIs"],
    image: "works/Web_Mock_bg.png",
  },
  {
    name: "Eco Car Wash",
    tag: "Mobile App",
    blurb: "Waterless car-wash, fully digital",
    description:
      "A mobile app for a premium, eco-friendly waterless car-wash service — booking, scheduling and digital operations across the whole customer journey.",
    tech: ["React Native", "Firebase"],
    image: "works/eco2.png",
    url: "https://eternosoft.in/Ecocarwash.html",
  },
];

interface Mini {
  name: string;
  tag: string;
  description: string;
  tech: string[];
  url?: string;
  icon: React.ReactNode;
}

const more: Mini[] = [
  {
    name: "indmoney-mcp",
    tag: "Open Source · Published on PyPI",
    description:
      "A Python MCP server that lets Claude read an INDmoney portfolio in plain English via browser automation, with persistent AES-256-GCM encrypted sessions. Listed on awesome-mcp-servers.",
    tech: ["Python", "Playwright", "MCP", "Pydantic"],
    url: "https://github.com/VIckys-AI-Stuffs/indmoney-mcp-python",
    icon: <Package className="w-5 h-5" />,
  },
  {
    name: "Securra Care",
    tag: "Healthcare · Mobile",
    description:
      "A cross-platform wellness app — health tracking, personalised diet plans and real-time doctor consultations. Scaled for enterprise clients including Star Health Insurance; +20% engagement.",
    tech: ["React Native", "Redux", "Firebase", "TypeScript"],
    icon: <Github className="w-5 h-5" />,
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative">
      <div className="section-container">
        <Reveal>
          <h2 className="section-title">
            Projects &amp; <span className="gradient-text">case studies</span>
          </h2>
          <p className="text-portfolio-muted max-w-2xl mt-2">
            Production products I&apos;ve architected and shipped — from EdTech SaaS and
            e-commerce to enterprise mobile and open source.
          </p>
        </Reveal>

        <div className="mt-14 space-y-10 md:space-y-16">
          {featured.map((p, i) => (
            <Reveal key={p.name} delay={0.05}>
              <article
                className="panel rounded-2xl overflow-hidden grid md:grid-cols-2 gap-0 transition-transform duration-300 hover:-translate-y-1.5"
              >
                {/* Screenshot */}
                <div className={`relative p-5 md:p-7 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="group relative rounded-xl overflow-hidden hairline bg-[#0a0a14]">
                    <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5 bg-white/[0.02]">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]/70" />
                      <span className="ml-3 text-[10px] text-portfolio-muted truncate">{p.name.toLowerCase().replace(/[^a-z]+/g, "-")}.app</span>
                    </div>
                    <div className="overflow-hidden">
                      <img
                        src={asset(p.image)}
                        alt={p.name}
                        loading="lazy"
                        className="w-full h-[230px] md:h-[300px] object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: "radial-gradient(60% 50% at 50% 0%, rgba(125,93,255,0.18), transparent)" }} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-9 flex flex-col justify-center">
                  <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-portfolio-secondary">{p.tag}</span>
                  <h3 className="text-2xl md:text-[26px] font-semibold text-portfolio-light mt-2">{p.name}</h3>
                  <p className="text-portfolio-secondary/90 text-sm mt-1">{p.blurb}</p>
                  <p className="text-portfolio-light/65 mt-4 leading-relaxed">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {p.tech.map((t) => (
                      <span key={t} className="skill-tag">{t}</span>
                    ))}
                  </div>
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 mt-6 text-sm font-medium text-portfolio-light w-fit"
                    >
                      <span className="border-b border-portfolio-secondary/40 group-hover:border-portfolio-secondary transition-colors">View project</span>
                      <ArrowUpRight className="w-4 h-4 text-portfolio-secondary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Secondary projects */}
        <Reveal>
          <h3 className="text-lg font-semibold text-portfolio-light/80 mt-16 mb-6">More projects</h3>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-5">
          {more.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <TiltCard className="h-full">
              <div className="panel rounded-2xl p-6 h-full">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-portfolio-secondary"
                    style={{ background: "rgba(125,93,255,0.12)", border: "1px solid rgba(125,93,255,0.25)" }}>
                    {p.icon}
                  </div>
                  {p.url && (
                    <a href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${p.name}`}
                      className="text-portfolio-muted hover:text-portfolio-secondary transition-colors">
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )}
                </div>
                <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-portfolio-secondary block mt-4">{p.tag}</span>
                <h4 className="text-xl font-semibold text-portfolio-light mt-1">{p.name}</h4>
                <p className="text-portfolio-light/60 text-sm mt-2 leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tech.map((t) => (
                    <span key={t} className="skill-tag">{t}</span>
                  ))}
                </div>
              </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
