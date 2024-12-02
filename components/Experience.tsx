"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import { WorldMap } from "./WorldMap";
import { WorldMap } from "./WorldMap";
import {
  EffectComposer,
  Outline,
  Select,
  Selection,
} from "@react-three/postprocessing";

export default function Experience() {
  return (
    <Canvas style={{ height: "100vh" }}>
      <OrbitControls />

      <Selection>
        <EffectComposer>
          <Outline blur edgeStrength={100} />
        </EffectComposer>
        <Select enabled>
          <WorldMap />
        </Select>
      </Selection>

      <ambientLight intensity={0.5} />
      <directionalLight intensity={1} position={[10, 10, 5]} />
    </Canvas>
  );
}
