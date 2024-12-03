"use client";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { WorldMap } from "./WorldMap";
import { Perf } from "r3f-perf";
import {
  Bloom,
  EffectComposer,
  HueSaturation,
} from "@react-three/postprocessing";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { PerspectiveCamera as Camera } from "three";

export default function Experience() {
  const camera = useRef<Camera>(null!);

  window.addEventListener("mousemove", (e) => {
    if (!camera) return;
    if (!e) return;
    const width = window.document.body.clientWidth;
    const height = window.document.body.clientHeight;
    const x = e.clientX / width - 0.5;
    const y = e.clientY / height - 0.5;

    camera.current.position.x = Math.sin(x) * 12 - 1;
    camera.current.position.z = Math.cos(x) * 2 + 2;
    camera.current.position.y = -Math.sin(y) * 3;
    camera.current.lookAt(x * 5, y * -1.5, 0);
  });

  useFrame(({ clock }) => {
    // camera.current.lookAt(0, clock.getElapsedTime() / 2, 0);
  });

  return (
    <>
      <Perf />
      {/* <OrbitControls /> */}

      <PerspectiveCamera ref={camera} position={[0, 0, 5]} makeDefault />

      <EffectComposer>
        <HueSaturation hue={120} />
        <Bloom
          intensity={0.25}
          luminanceThreshold={0.9}
          luminanceSmoothing={0.025}
        />
      </EffectComposer>
      <WorldMap />
    </>
  );
}
