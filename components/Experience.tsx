"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Experience() {
  return (
    <Canvas style={{ height: "100vh" }}>
      <OrbitControls />

      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  );
}
