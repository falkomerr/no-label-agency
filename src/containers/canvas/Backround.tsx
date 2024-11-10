'use client'
import { Plane } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react"
import * as THREE from 'three';
import { cnoise21 } from "./noise";
import useProjectStore from "@/hook/useProjectStore";

export const Backround = ({ index }: { index?: number }) => {
  const shader: THREE.Shader = {
    uniforms: {
      u_time: { value: 0 },
      u_mouse: { value: new THREE.Vector2() },
      color1: { value: new THREE.Vector3(0.19, 0.027, 0.62) },
      color2: { value: new THREE.Vector3(0.95, 0.21, 0.56) },
      color3: { value: new THREE.Vector3(1, 0.36, 0.23) }
    },
    vertexShader,
    fragmentShader,
  }
  const [mouse, setMouse] = useState(new THREE.Vector2())
  const [scolor1, SetSColor1] = useState(new THREE.Vector3())
  const [scolor2, SetSColor2] = useState(new THREE.Vector3())
  const [scolor3, SetSColor3] = useState(new THREE.Vector3())
  const target = new THREE.Vector2()
  const color1 = new THREE.Vector3()
  const color2 = new THREE.Vector3()
  const color3 = new THREE.Vector3()

  useEffect(() => {
    console.log(index)
    if (index == 0) {
      color1.set(1.0, 0.58, 0.58)
      color2.set(1.0, 0.83, 0.58)
      color3.set(0.58, 1.0, 0.62)
    } else if (index == 1) {
      color1.set(0.16, 0.38, 0.24)
      color2.set(0.44, 0.86, 0.38)
      color3.set(0.63, 0.74, 0.23)
    } else if (index == 2) {
      color1.set(0.29, 0.32, 0.49)
      color2.set(0.25, 0.26, 0.45)
      color3.set(0.75, 0.2, 0.8)
    } else if (index == 3) {
      color1.set(0.19, 0.027, 0.62)
      color2.set(0.43, 0.29, 0.88)
      color3.set(1, 0.6, 1)
    }
    const duration = 500; // Длительность анимации в миллисекундах
    const steps = 60; // Количество шагов
    const interval = duration / steps; // Время между шагами

    const startColor1 = { ...scolor1 };
    const startColor2 = { ...scolor2 };
    const startColor3 = { ...scolor3 };

    for (let i = 0; i <= steps; i++) {
      setTimeout(() => {
        const progress = i / steps;

        // Вычисляем новые значения RGB
        const newColor1 = new THREE.Vector3(
          startColor1.x + (color1.x - startColor1.x) * progress,
          startColor1.y + (color1.y - startColor1.y) * progress,
          startColor1.z + (color1.z - startColor1.z) * progress
        );

        const newColor2 = new THREE.Vector3(
          startColor2.x + (color2.x - startColor2.x) * progress,
          startColor2.y + (color2.y - startColor2.y) * progress,
          startColor2.z + (color2.z - startColor2.z) * progress
        );

        const newColor3 = new THREE.Vector3(
          startColor3.x + (color3.x - startColor3.x) * progress,
          startColor3.y + (color3.y - startColor3.y) * progress,
          startColor3.z + (color3.z - startColor3.z) * progress
        );

        SetSColor1(newColor1);
        SetSColor2(newColor2);
        SetSColor3(newColor3);

        shader.uniforms.color1.value.copy(newColor1);
        shader.uniforms.color2.value.copy(newColor2);
        shader.uniforms.color3.value.copy(newColor3);
      }, interval * i);
    }
  }, [index])

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const { innerWidth: width, innerHeight: height } = window;

      // Normalize coordinates to be between -1 and 1
      const normalizedX: number = ((clientX - width / 2) / (width / 2));
      const normalizedY: number = ((clientY - height / 2) / (height / 2));

      // setCoordinates({
      //   x: parseFloat(normalizedX),
      //   y: parseFloat(normalizedY),
      // });
      target.set((normalizedX + 1) * 0.04, (normalizedY + 1) * 0.04)
      setMouse(target)
      shader.uniforms.u_mouse.value.lerp(target, 1)
      // console.log(shader.uniforms.u_mouse.value)
    };

    window.addEventListener('pointermove', handleMouseMove);

    return () => {
      window.removeEventListener('pointermove', handleMouseMove);
    };
  }, [])
  useFrame(({ }) => {
    // shader.uniforms.u_time.value += 0.005
    // target.set((mouse.x + 1) * 0.5, (mouse.y + 1) * 0.5)

    shader.uniforms.u_mouse.value.lerp(mouse, 1)
    // console.log(scolor1)
    shader.uniforms.color1.value.copy(scolor1)
    shader.uniforms.color2.value.copy(scolor2)
    shader.uniforms.color3.value.copy(scolor3)
    // console.log(1)
  })

  return (
    <Plane args={[2, 2]}>
      <shaderMaterial args={[shader]} />
    </Plane>
  )
}
const vertexShader = `
varying vec2 v_uv;

void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`

const fragmentShader = `
uniform float u_time;
uniform vec2 u_mouse;  // vec2(0.0, 0.0)

uniform vec3 color1;
uniform vec3 color2;
uniform vec3 color3;

varying vec2 v_uv;

${cnoise21}

float random(vec2 p) {
  vec2 k1 = vec2(
    23.14069263277926, // e^pi (Gelfond's constant)
    2.665144142690225 // 2^sqrt(2) (Gelfond–Schneider constant)
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
`
