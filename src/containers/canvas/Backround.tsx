'use client';
import { Plane } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { cnoise21 } from './noise';

// Define color sets for different indices
const COLOR_PRESETS = [
  {
    color1: new THREE.Vector3(0.19, 0.027, 0.62),
    color2: new THREE.Vector3(0.43, 0.29, 0.88),
    color3: new THREE.Vector3(1, 0.6, 1),
  },
  {
    color1: new THREE.Vector3(0.16, 0.38, 0.24),
    color2: new THREE.Vector3(0.44, 0.86, 0.38),
    color3: new THREE.Vector3(0.63, 0.74, 0.23),
  },
  {
    color1: new THREE.Vector3(0.29, 0.32, 0.49),
    color2: new THREE.Vector3(0.25, 0.26, 0.45),
    color3: new THREE.Vector3(0.75, 0.2, 0.8),
  },
  {
    color1: new THREE.Vector3(1.0, 0.58, 0.58),
    color2: new THREE.Vector3(1.0, 0.83, 0.58),
    color3: new THREE.Vector3(0.58, 1.0, 0.62),
  },
];

type Colors = {
  color1: THREE.Vector3;
  color2: THREE.Vector3;
  color3: THREE.Vector3;
};

export const Background = ({ index = 0 }: { index?: number }) => {
  const shaderRef = useRef<THREE.Shader>({
    uniforms: {
      u_time: { value: 0 },
      u_mouse: { value: new THREE.Vector2() },
      color1: { value: new THREE.Vector3() },
      color2: { value: new THREE.Vector3() },
      color3: { value: new THREE.Vector3() },
    },
    vertexShader,
    fragmentShader,
  });

  const targetColors = useRef<Colors>(COLOR_PRESETS[index]);
  const currentColors = useRef<Colors>(COLOR_PRESETS[index]);
  const mouse = useRef(new THREE.Vector2());
  const isMobile = useRef(window.innerWidth < 1024);
  const animationFrameId = useRef<number>();

  // Handle color transitions
  useEffect(() => {
    const preset = COLOR_PRESETS[index % COLOR_PRESETS.length];
    targetColors.current = preset;

    const animate = () => {
      const lerpFactor = 0.1;
      currentColors.current.color1.lerp(
        targetColors.current.color1,
        lerpFactor,
      );
      currentColors.current.color2.lerp(
        targetColors.current.color2,
        lerpFactor,
      );
      currentColors.current.color3.lerp(
        targetColors.current.color3,
        lerpFactor,
      );

      if (
        currentColors.current.color1.distanceTo(targetColors.current.color1) >
          0.001 ||
        currentColors.current.color2.distanceTo(targetColors.current.color2) >
          0.001 ||
        currentColors.current.color3.distanceTo(targetColors.current.color3) >
          0.001
      ) {
        animationFrameId.current = requestAnimationFrame(animate);
      }
    };

    animationFrameId.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameId.current)
        cancelAnimationFrame(animationFrameId.current);
    };
  }, [index]);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (isMobile.current) return;

      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      mouse.current.set(
        (clientX / innerWidth) * 2 - 1,
        -(clientY / innerHeight) * 2 + 1,
      );
    };

    const handleResize = () => {
      isMobile.current = window.innerWidth < 1024;
    };

    window.addEventListener('pointermove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('pointermove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useFrame(() => {
    const uniforms = shaderRef.current.uniforms;
    uniforms.u_mouse.value.lerp(
      isMobile.current ? new THREE.Vector2(0.01, 0.008) : mouse.current,
      0.1,
    );

    uniforms.color1.value.copy(currentColors.current.color1);
    uniforms.color2.value.copy(currentColors.current.color2);
    uniforms.color3.value.copy(currentColors.current.color3);
  });

  return (
    <Plane args={[2, 2]}>
      <shaderMaterial args={[shaderRef.current]} />
    </Plane>
  );
};

// Шейдеры остаются без изменений
const vertexShader = `
varying vec2 v_uv;

void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform float u_time;
uniform vec2 u_mouse;  

uniform vec3 color1;
uniform vec3 color2;
uniform vec3 color3;

varying vec2 v_uv;

${cnoise21}

float random(vec2 p) {
  vec2 k1 = vec2(
    23.14069263277926, 
    2.665144142690225 
  );
  return fract(
    cos(dot(p, k1)) * 12345.6789
  );
}

const vec3 black = vec3(0.0, 0.0, 0.0);

void main() {
  vec2 seed = v_uv * 1.5 * (u_mouse + 0.3 * (length(u_mouse) + 0.5)) + 0.85;
  float n = cnoise21(seed) + length(u_mouse) * 0.1;

  float ml = pow(length(u_mouse), 2.5) * 0.15;
  float n1 = smoothstep(0.0, 0.0 + 0.2, n);
  vec3 color = mix(black, color1, n1);

  float n2 = smoothstep(0.1 + ml, ml + 0.3, n);
  color = mix(color, color2, n2);

  float n3 = smoothstep(0.2 + ml, ml + 0.4, n);
  color = mix(color, color3, n3);

  float n4 = smoothstep(0.3 + ml, ml + 0.55, n);
  color = mix(color, black, n4);

  gl_FragColor = vec4(color, 1.0);
}
`;
