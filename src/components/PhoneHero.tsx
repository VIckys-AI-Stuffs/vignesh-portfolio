import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

const asset = (p: string) => `${import.meta.env.BASE_URL}${p}`;
// A single transparent phone mockup (already framed) — the Eco Car Wash app.
const SCREEN = "works/eco2.png";

const ptr = { x: 0, y: 0 };

function Phone() {
  const ref = useRef<THREE.Mesh>(null!);
  const tex = useTexture(asset(SCREEN)) as THREE.Texture;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;

  const aspect = 470 / 940; // mockup ratio
  const h = 5.4;
  const w = h * aspect;

  useFrame((state) => {
    const m = ref.current;
    if (!m) return;
    m.rotation.y = THREE.MathUtils.lerp(m.rotation.y, ptr.x * 0.32, 0.06);
    m.rotation.x = THREE.MathUtils.lerp(m.rotation.x, -ptr.y * 0.2, 0.06);
    m.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.1;
  });

  return (
    <mesh ref={ref}>
      <planeGeometry args={[w, h]} />
      <meshBasicMaterial map={tex} transparent depthWrite={false} toneMapped={false} />
    </mesh>
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

const PhoneHero: React.FC = () => {
  const [ok] = useState(() => hasWebGL());

  useEffect(() => {
    if (!ok) return;
    const onMove = (e: PointerEvent) => {
      ptr.x = (e.clientX / window.innerWidth) * 2 - 1;
      ptr.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [ok]);

  if (!ok) {
    return (
      <div className="w-full flex justify-center">
        <img src={asset(SCREEN)} alt="Eco Car Wash app" className="h-[440px] w-auto" loading="lazy" />
      </div>
    );
  }

  return (
    <div className="w-full h-[420px] md:h-[580px]">
      <SafeBoundary>
        <Canvas camera={{ position: [0, 0, 7], fov: 42 }} dpr={[1, 1.8]} gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}>
          <Suspense fallback={null}>
            <Phone />
          </Suspense>
        </Canvas>
      </SafeBoundary>
    </div>
  );
};

export default PhoneHero;
