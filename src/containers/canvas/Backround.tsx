'use client'
import { Plane } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { VFC, useEffect, useState } from "react"
import * as THREE from 'three';
import { cnoise21 } from "./noise";

export const Backround: VFC = () => {
    const shader: THREE.Shader = {
        uniforms: {
            u_time: { value: 0 },
            u_mouse: { value: new THREE.Vector2() }
        },
        vertexShader,
        fragmentShader,
    }
    const [mouse, setMouse] = useState(new THREE.Vector2())
    const target = new THREE.Vector2()

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
          target.set((normalizedX + 1) * 0.5, (normalizedY + 1) * 0.5)
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
varying vec2 v_uv;

${cnoise21}

const vec3 black = vec3(0, 0, 0);
const vec3 color1 = vec3(1, 0, 0);
const vec3 color2 = vec3(0, 1, 0);
const vec3 color3 = vec3(0, 0, 1);

void main() {
  vec2 seed = v_uv * 1.5 * (u_mouse + 0.3 * (length(u_mouse) + 0.5));
  float n = cnoise21(seed) + length(u_mouse) * 0.9;

  float ml = pow(length(u_mouse), 2.5) * 0.15;
  float n1 = smoothstep(0.0, 0.0 + 0.2, n);
  vec3 color = mix(black, color1, n1);

  float n2 = smoothstep(0.1 + ml, 0.1 + ml + 0.2, n);
  color = mix(color, color2, n2);

  float n3 = smoothstep(0.2 + ml, 0.2 + ml + 0.2, n);
  color = mix(color, color3, n3);

  float n4 = smoothstep(0.3 + ml, 0.3 + ml + 0.2, n);
  color = mix(color, black, n4);

  gl_FragColor = vec4(color, 1.0);
}
`
