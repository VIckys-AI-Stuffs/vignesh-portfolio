import React, { useRef } from "react";

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
  max?: number;
};

/** Wrapper that tilts its content in 3D toward the cursor (fine pointers only). */
const TiltCard: React.FC<TiltCardProps> = ({ children, className, max = 7 }) => {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || !window.matchMedia("(pointer: fine)").matches) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg) translateY(-4px)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{ transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)", transformStyle: "preserve-3d", willChange: "transform" }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      {children}
    </div>
  );
};

export default TiltCard;
