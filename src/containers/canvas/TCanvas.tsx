'use client'
import { Canvas } from "@react-three/fiber";
import { Suspense, VFC, use, useEffect, useState } from "react";
import * as THREE from 'three';
import { Backround } from "./Backround";


export const TCanvas: VFC = () => {
    const OrthographicCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, -10, 10)
    const [dpr, setDpr] = useState<number>(1)
    useEffect(() => {
        if (window) setDpr(window.devicePixelRatio)
    }, [])

    return (
        <Canvas camera={OrthographicCamera} dpr={dpr}>
            <Suspense fallback={null}>
                <Backround />
            </Suspense>
        </Canvas>
    )
}