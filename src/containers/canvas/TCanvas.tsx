'use client';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';
import * as THREE from 'three';
import { Background } from '@/containers/canvas/Backround';

export const TCanvas = ({ index }: { index?: number }) => {
  const OrthographicCamera = new THREE.OrthographicCamera(
    -1,
    1,
    1,
    -1,
    -10,
    10,
  );
  const [dpr, setDpr] = useState<number>(1);
  useEffect(() => {
    if (window) setDpr(window.devicePixelRatio);
  }, []);

  return (
    <Canvas camera={OrthographicCamera} dpr={dpr}>
      <Suspense fallback={null}>
        <Background index={index} />
      </Suspense>
    </Canvas>
  );
};
