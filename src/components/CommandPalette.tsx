import React, { useEffect, useMemo, useRef, useState } from "react";
import { Search, ArrowRight, Github, Linkedin, Mail, PenLine, User, Code2, Briefcase, FolderGit2, Send, Copy } from "lucide-react";

type Item = {
  label: string;
  hint: string;
  icon: React.ReactNode;
  run: () => void;
  keywords?: string;
};

const scrollTo = (id: string) => {
  const lenis = (window as unknown as { __lenis?: { scrollTo: (t: string, o?: object) => void } }).__lenis;
  if (lenis) lenis.scrollTo(`#${id}`, { offset: -70 });
  else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const open = (url: string) => window.open(url, "_blank", "noopener,noreferrer");

const CommandPalette: React.FC = () => {
  const [show, setShow] = useState(false);
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const items: Item[] = useMemo(() => [
    { label: "About", hint: "Section", icon: <User className="w-4 h-4" />, run: () => scrollTo("about"), keywords: "bio intro" },
    { label: "Skills", hint: "Section", icon: <Code2 className="w-4 h-4" />, run: () => scrollTo("skills"), keywords: "tech stack" },
    { label: "Experience", hint: "Section", icon: <Briefcase className="w-4 h-4" />, run: () => scrollTo("experience"), keywords: "work career jobs" },
    { label: "Projects", hint: "Section", icon: <FolderGit2 className="w-4 h-4" />, run: () => scrollTo("projects"), keywords: "work case studies" },
    { label: "Contact", hint: "Section", icon: <Send className="w-4 h-4" />, run: () => scrollTo("contact"), keywords: "hire reach email" },
    { label: "Email me", hint: "vigneshwaran.mutharasan@gmail.com", icon: <Mail className="w-4 h-4" />, run: () => open("mailto:vigneshwaran.mutharasan@gmail.com"), keywords: "mail contact hire" },
    { label: "Copy email", hint: "to clipboard", icon: <Copy className="w-4 h-4" />, run: () => navigator.clipboard?.writeText("vigneshwaran.mutharasan@gmail.com"), keywords: "mail" },
    { label: "GitHub", hint: "github.com/VigneshDev16", icon: <Github className="w-4 h-4" />, run: () => open("https://github.com/VigneshDev16"), keywords: "code repos" },
    { label: "LinkedIn", hint: "in/vigneshwaran-mutharasan", icon: <Linkedin className="w-4 h-4" />, run: () => open("https://linkedin.com/in/vigneshwaran-mutharasan"), keywords: "connect" },
    { label: "Medium", hint: "@vickymsmuthu", icon: <PenLine className="w-4 h-4" />, run: () => open("https://medium.com/@vickymsmuthu"), keywords: "blog writing" },
    { label: "Dev.to", hint: "@vigneshwaran_m", icon: <PenLine className="w-4 h-4" />, run: () => open("https://dev.to/vigneshwaran_m"), keywords: "blog writing" },
  ], []);

  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return items;
    return items.filter((i) => (i.label + " " + i.hint + " " + (i.keywords ?? "")).toLowerCase().includes(t));
  }, [q, items]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (document.activeElement?.tagName ?? "").toUpperCase();
      const typing = tag === "INPUT" || tag === "TEXTAREA";
      if ((e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !typing && !show)) {
        e.preventDefault();
        setShow((s) => !s);
      } else if (e.key === "Escape") {
        setShow(false);
      }
    };
    const onOpen = () => setShow(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-cmdk", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-cmdk", onOpen);
    };
  }, [show]);

  useEffect(() => {
    if (show) {
      setQ("");
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 40);
    }
  }, [show]);

  useEffect(() => { setActive(0); }, [q]);

  const choose = (item?: Item) => {
    const it = item ?? filtered[active];
    if (!it) return;
    setShow(false);
    setTimeout(() => it.run(), 60);
  };

  const onListKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => Math.min(a + 1, filtered.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
    else if (e.key === "Enter") { e.preventDefault(); choose(); }
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[120] flex items-start justify-center pt-[18vh] px-4"
      style={{ background: "rgba(3,4,9,0.6)", backdropFilter: "blur(4px)" }}
      onClick={() => setShow(false)}
    >
      <div
        className="w-full max-w-lg rounded-2xl overflow-hidden glow-ring"
        style={{ background: "rgba(16,16,26,0.92)", border: "1px solid rgba(255,255,255,0.1)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 border-b border-white/10">
          <Search className="w-4 h-4 text-portfolio-secondary shrink-0" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={onListKey}
            placeholder="Jump to a section, open a link…"
            className="flex-1 bg-transparent py-4 text-[15px] text-portfolio-light placeholder:text-portfolio-muted outline-none"
          />
          <kbd className="text-[10px] text-portfolio-muted border border-white/10 rounded px-1.5 py-0.5">esc</kbd>
        </div>

        <div className="max-h-[320px] overflow-y-auto py-2">
          {filtered.length === 0 && <div className="px-4 py-6 text-center text-sm text-portfolio-muted">No matches</div>}
          {filtered.map((item, i) => (
            <button
              key={item.label}
              onMouseEnter={() => setActive(i)}
              onClick={() => choose(item)}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors"
              style={{ background: i === active ? "rgba(125,93,255,0.14)" : "transparent" }}
            >
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-portfolio-secondary shrink-0"
                style={{ background: "rgba(125,93,255,0.1)", border: "1px solid rgba(125,93,255,0.2)" }}>
                {item.icon}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm text-portfolio-light truncate">{item.label}</span>
                <span className="block text-xs text-portfolio-muted truncate">{item.hint}</span>
              </span>
              {i === active && <ArrowRight className="w-4 h-4 text-portfolio-secondary shrink-0" />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
