"use client";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { WorldMap } from "./WorldMap";
import { Perf } from "r3f-perf";
import {
  Bloom,
  EffectComposer,
  HueSaturation,
} from "@react-three/postprocessing";
import { invalidate, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { PerspectiveCamera as Camera, MathUtils } from "three";

export default function Experience() {
  const camera = useRef<Camera>(null!);

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
