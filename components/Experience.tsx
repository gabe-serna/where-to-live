"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import { WorldMap } from "./WorldMap";
import { WorldMap2 } from "./WorldMap2";

export default function Experience() {
  return (
    <Canvas style={{ height: "100vh" }}>
      <OrbitControls />

      <ambientLight intensity={0.5} />
      <directionalLight intensity={1} position={[10, 10, 5]} />

      <WorldMap2 />
    </Canvas>
  );
}
