'use client';
import { Plane } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { cnoise21 } from './noise';

interface BackgroundProps {
  index?: number;
}

export const Background = ({ index }: BackgroundProps) => {
  // Оптимизация цветовых схем через мемоизацию
  const colorScheme = useMemo(
    () => ({
      0: [
        new THREE.Vector3(0.19, 0.027, 0.62),
        new THREE.Vector3(0.43, 0.29, 0.88),
        new THREE.Vector3(1, 0.6, 1),
      ],
      1: [
        new THREE.Vector3(0.16, 0.38, 0.24),
        new THREE.Vector3(0.44, 0.86, 0.38),
        new THREE.Vector3(0.63, 0.74, 0.23),
      ],
      2: [
        new THREE.Vector3(0.29, 0.32, 0.49),
        new THREE.Vector3(0.25, 0.26, 0.45),
        new THREE.Vector3(0.75, 0.2, 0.8),
      ],
      3: [
        new THREE.Vector3(1.0, 0.58, 0.58),
        new THREE.Vector3(1.0, 0.83, 0.58),
        new THREE.Vector3(0.58, 1.0, 0.62),
      ],
    }),
    [],
  );

  // Создание шейдерной структуры один раз
  const shader = useMemo(
    () => ({
      uniforms: {
        u_time: { value: 0 },
        u_mouse: { value: new THREE.Vector2() },
        color1: { value: new THREE.Vector3() },
        color2: { value: new THREE.Vector3() },
        color3: { value: new THREE.Vector3() },
      },
      vertexShader,
      fragmentShader,
    }),
    [],
  );

  const [mouse, setMouse] = useState(new THREE.Vector2());
  const [colors, setColors] = useState([
    new THREE.Vector3(),
    new THREE.Vector3(),
    new THREE.Vector3(),
  ]);
  const target = useRef(new THREE.Vector2());
  const isMobile = useRef(true);
  const timeouts = useRef<number[]>([-1]);

  // Оптимизация обработчика движения мыши
  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (isMobile.current) return;

    const { clientX, clientY } = event;
    const { innerWidth: width, innerHeight: height } = window;

    const normalizedX = (clientX - width / 2) / (width / 2);
    const normalizedY = (clientY - height / 2) / (height / 2);

    target.current.set((normalizedX + 1) * 0.04, (normalizedY + 1) * 0.04);
    setMouse(target.current);
    shader.uniforms.u_mouse.value.lerp(target.current, 1);
  }, []);

  // Обработка изменения индекса с анимацией
  useEffect(() => {
    //@ts-ignore
    const newColors = colorScheme[index || 0];
    const startColors = [...colors];
    const duration = 500;
    const steps = 60;
    const interval = duration / steps;

    for (let i = 0; i <= steps; i++) {
      const timeout = window.setTimeout(() => {
        const progress = i / steps;
        //@ts-ignore
        const newColorValues = newColors.map((targetColor, idx) => {
          const startColor = startColors[idx];
          return new THREE.Vector3(
            startColor.x + (targetColor.x - startColor.x) * progress,
            startColor.y + (targetColor.y - startColor.y) * progress,
            startColor.z + (targetColor.z - startColor.z) * progress,
          );
        });

        setColors(newColorValues);
        //@ts-ignore
        newColorValues.forEach((color, idx) => {
          //@ts-ignore
          shader.uniforms[`color${idx + 1}`].value.copy(color);
        });
      }, interval * i);

      timeouts.current = [...timeouts.current, timeout];
    }

    return () => {
      if (!timeouts.current) return;
      timeouts.current = timeouts.current
        .map((timeoutId) => {
          clearTimeout(timeoutId);
          return undefined;
        })
        .filter((value) => value !== undefined);
    };
  }, [index]);

  // Настройка обработчиков событий
  useEffect(() => {
    window.addEventListener('pointermove', handleMouseMove);
    return () => window.removeEventListener('pointermove', handleMouseMove);
  }, [handleMouseMove]);

  // Обновление шейдера в каждом кадре
  useFrame(() => {
    shader.uniforms.u_mouse.value.lerp(
      isMobile.current ? new THREE.Vector2(0.01, 0.008) : mouse,
      1,
    );

    colors.forEach((color, idx) => {
      //@ts-ignore

      shader.uniforms[`color${idx + 1}`].value.copy(color);
    });
  });

  return (
    <Plane args={[2, 2]}>
      <shaderMaterial args={[shader]} />
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
