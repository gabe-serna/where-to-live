"use client";
import { OrthographicCamera } from "@react-three/drei";
import { WorldMap } from "./WorldMap";
import {
  Bloom,
  EffectComposer,
  HueSaturation,
} from "@react-three/postprocessing";
import { invalidate, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useControls } from "leva";
import HeatmapScaling from "@/lib/heatmapScaling";

export default function Experience() {
  const camera = useRef<THREE.OrthographicCamera>(null!);
  const material = new THREE.MeshStandardMaterial({
    emissive: new THREE.Color(0.3, 0.25, 0.25),
    emissiveIntensity: 0.1,
    toneMapped: false,
  });

  const currentTarget = useRef(new THREE.Vector3(0, 0, 0));
  const newTarget = useRef(new THREE.Vector3(0, 0, 0));

  window.addEventListener("mousemove", (e) => {
    if (!e.shiftKey) return;
    if (!camera.current) return;
    if (!e) return;
    const width = window.document.body.clientWidth;
    const height = window.document.body.clientHeight;
    const x = e.clientX / width - 0.5;
    const y = e.clientY / height - 0.5;

    newTarget.current.set(x * 2, -y, 0);
    invalidate();
  });

  useFrame(() => {
    if (currentTarget !== newTarget) invalidate();
    currentTarget.current.lerp(newTarget.current, 0.1);
    camera.current.lookAt(currentTarget.current);
  });

  return (
    <>
      <OrthographicCamera
        ref={camera}
        position={[0, 0, 10]}
        zoom={300}
        makeDefault
      />
      <EffectComposer>
        <HueSaturation hue={120} />
        <Bloom
          intensity={0.5}
          luminanceThreshold={0.5}
          luminanceSmoothing={0.025}
        />
      </EffectComposer>
      <WorldMap material={material} />
    </>
  );
}
