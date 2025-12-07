import React, { useEffect, useRef } from 'react';

const Stars: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const numStars = Math.max(20, Math.floor((width * height) / 5000)); // mild density, min 20
    const stars: { x: number; y: number; r: number; alpha: number; dAlpha: number }[] = [];

    for (let i = 0; i < numStars; i++) {
      const r = Math.random() * 1.3 + 0.2;
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r,
        alpha: Math.random() * 0.8 + 0.2,
        dAlpha: (Math.random() * 0.006 + 0.001) * (Math.random() > 0.5 ? 1 : -1),
      });
    }

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      // subtle gradient background to blend with site
      const g = ctx.createLinearGradient(0, 0, 0, height);
      g.addColorStop(0, 'rgba(6,6,10,0.0)');
      g.addColorStop(1, 'rgba(6,6,10,0.0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.alpha += s.dAlpha;
        if (s.alpha <= 0.1 || s.alpha >= 1) s.dAlpha *= -1;

        ctx.beginPath();
        ctx.globalAlpha = s.alpha * 0.9;
        const gradient = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 6);
        gradient.addColorStop(0, 'rgba(255,255,255,1)');
        gradient.addColorStop(0.2, 'rgba(200,200,255,0.6)');
        gradient.addColorStop(1, 'rgba(200,200,255,0)');
        ctx.fillStyle = gradient;
        ctx.arc(s.x, s.y, s.r * 3, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

    return (
  <canvas
    ref={canvasRef}
    className="pointer-events-none fixed inset-0 z-50 opacity-50"
    style={{ mixBlendMode: 'screen' }}
    aria-hidden
  />
  );
};

export default Stars;
