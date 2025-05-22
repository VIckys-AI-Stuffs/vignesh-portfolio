
import React from 'react';
import { Suspense, lazy } from 'react';
const Spline = lazy(() => import('@splinetool/react-spline'));

const HeroSplineBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Suspense fallback={<div className="w-full h-full bg-black" />}>
        <Spline
          style={{
            width: '100%',
            height: '100vh',
          }}
          scene="https://prod.spline.design/us3ALejTXl6usHZ7/scene.splinecode"
        />
      </Suspense>
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to right, rgba(0, 0, 0, 0.8), transparent 30%, transparent 70%, rgba(0, 0, 0, 0.8)),
            linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.9))
          `,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};

export default HeroSplineBackground;
