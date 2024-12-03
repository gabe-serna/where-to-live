"use client";
import { PerspectiveCamera } from "@react-three/drei";
import { WorldMap } from "./WorldMap";
import {
  Bloom,
  EffectComposer,
  HueSaturation,
} from "@react-three/postprocessing";
import { invalidate, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import {
  PerspectiveCamera as Camera,
  Color,
  MathUtils,
  MeshStandardMaterial,
} from "three";
import { useControls } from "leva";
import HeatmapScaling from "@/lib/heatmapScaling";

export default function Experience() {
  const camera = useRef<Camera>(null!);
  const material = new MeshStandardMaterial({
    emissive: new Color(0.3, 0.25, 0.25),
    emissiveIntensity: 0.1,
    toneMapped: false,
  });

  window.addEventListener("mousemove", (e) => {
    if (!e.shiftKey) return;
    if (!camera.current) return;
    if (!e) return;
    const width = window.document.body.clientWidth;
    const height = window.document.body.clientHeight;
    const x = e.clientX / width - 0.5;
    const y = e.clientY / height - 0.5;

    // camera.current.position.x = Math.sin(x) * 12 - 1;
    // camera.current.position.z = Math.cos(x) * 2 + 2;
    // camera.current.position.y = -Math.sin(y) * 3;
    camera.current.position.x = MathUtils.lerp(
      camera.current.position.x,
      Math.sin(x) * 12 - 1,
      1,
    );
    camera.current.position.z = MathUtils.lerp(
      camera.current.position.z,
      Math.cos(x) * 2 + 2,
      1,
    );
    camera.current.position.y = MathUtils.lerp(
      camera.current.position.y,
      -Math.sin(y) * 3,
      1,
    );
    camera.current.lookAt(x * 8, y * -1.5, 0);
    invalidate();
  });

  useControls({
    score: {
      value: 0,
      min: 0,
      max: 1,
      step: 0.01,
      onChange: (value) => {
        const { red, green, blue, intensity } = HeatmapScaling(value);
        material.emissive.setRGB(red, green, blue);
        material.emissiveIntensity = intensity;
        invalidate();
      },
    },
  });

  return (
    <>
      <PerspectiveCamera ref={camera} position={[0, 0, 5]} makeDefault />
      <EffectComposer>
        <HueSaturation hue={120} />
        <Bloom
          intensity={0.5}
          luminanceThreshold={0.5}
          luminanceSmoothing={0.025}
        />
      </EffectComposer>
      {/* <mesh material={material}>
        <boxGeometry />
      </mesh> */}
      <WorldMap material={material} />
    </>
  );
}
