"use client";
import { OrbitControls } from "@react-three/drei";
import { WorldMap } from "./WorldMap";
import { Perf } from "r3f-perf";
import {
  Bloom,
  EffectComposer,
  HueSaturation,
} from "@react-three/postprocessing";

export default function Experience() {
  return (
    <>
      <Perf />
      <OrbitControls />

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
