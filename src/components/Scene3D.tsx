import React, { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Shared, listener-driven state (avoids per-frame DOM reads)
const scroll = { p: 0 };
const ptr = { x: 0, y: 0 };

type LayerProps = {
  count: number;
  spread: number;
  size: number;
  color: string;
  opacity: number;
  speed: number;
  parallax: number;
  dolly: number;
};

function Starfield({ count, spread, size, color, opacity, speed, parallax, dolly }: LayerProps) {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const a = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      a[i * 3] = (Math.random() - 0.5) * spread;
      a[i * 3 + 1] = (Math.random() - 0.5) * spread;
      a[i * 3 + 2] = (Math.random() - 0.5) * spread;
    }
    return a;
  }, [count, spread]);

  useFrame((_, delta) => {
    const g = ref.current;
    if (!g) return;
    g.rotation.y += delta * speed;
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, ptr.y * parallax, 0.03);
    g.rotation.z = THREE.MathUtils.lerp(g.rotation.z, ptr.x * parallax, 0.03);
    g.position.z = 1 + scroll.p * dolly; // dolly forward as you scroll
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color={color} size={size} sizeAttenuation depthWrite={false} opacity={opacity} />
    </Points>
  );
}

function hasWebGL(): boolean {
  try {
    const c = document.createElement("canvas");
    return !!(window.WebGLRenderingContext && (c.getContext("webgl") || c.getContext("experimental-webgl")));
  } catch {
    return false;
  }
}

class SafeBoundary extends React.Component<{ children: React.ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

const Scene3D: React.FC = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !hasWebGL()) return;
    setEnabled(true);

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scroll.p = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
    };
    const onMove = (e: PointerEvent) => {
      ptr.x = (e.clientX / window.innerWidth) * 2 - 1;
      ptr.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      <SafeBoundary>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 60 }}
          dpr={[1, 1.6]}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        >
          <Starfield count={3200} spread={22} size={0.035} color="#9b8cff" opacity={0.85} speed={0.015} parallax={0.14} dolly={5} />
          <Starfield count={1600} spread={34} size={0.02} color="#6f6ad0" opacity={0.5} speed={0.008} parallax={0.07} dolly={2.5} />
        </Canvas>
      </SafeBoundary>
    </div>
  );
};

export default Scene3D;
