'use client';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';
import * as THREE from 'three';
import { Background } from '@/containers/canvas/Backround';
import useProjectStore from '@/hook/useProjectStore';

export const TCanvas = () => {
  const { currentProject } = useProjectStore();

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (currentProject) setIndex(currentProject.id);
  }, [currentProject]);

  const OrthographicCamera = new THREE.OrthographicCamera(
    -1,
    1,
    1,
    -1,
    -10,
    10,
  );
  // const [dpr, setDpr] = useState<number>(1);
  // useEffect(() => {
  //   if (window) setDpr(window.devicePixelRatio);
  // }, []);

  return (
    <Canvas camera={OrthographicCamera}>
      <Suspense fallback={null}>
        <Background index={index} />
      </Suspense>
    </Canvas>
  );
};
