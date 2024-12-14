"use client";
import { ScoresContext, ScoresData } from "@/app/ScoresProvider";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Geography from "./Geography";
import PreferenceProvider, { PreferenceContext } from "./PreferenceProvider";

export default function FormPage() {
  const { preferences } = useContext(PreferenceContext);
  const [visibilityIndex, setVisibilityIndex] = useState(1.1);
  const router = useRouter();

  useEffect(() => {
    console.log("visibilityIndex", visibilityIndex);
  }, [visibilityIndex]);

  return (
    <PreferenceProvider>
      <div className="mx-52 my-20 flex min-h-screen flex-col items-center bg-gray-800/60 p-10 backdrop-blur-2xl">
        <Geography visibility={{ visibilityIndex, setVisibilityIndex }} />
      </div>
    </PreferenceProvider>
  );
}
