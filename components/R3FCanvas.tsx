"use client";
import { Canvas } from "@react-three/fiber";

export default function R3FCanvas({ children }: { children: React.ReactNode }) {
  return <Canvas style={{ height: "100vh" }}>{children}</Canvas>;
}
