"use client";

import Continent from "@/components/geography/Continent";
import Population from "@/components/geography/Population";
import { Dispatch, SetStateAction } from "react";

interface Props {
  visibility: {
    visibilityIndex: number;
    setVisibilityIndex: Dispatch<SetStateAction<number>>;
  };
}

export default function Geography({
  visibility: { visibilityIndex, setVisibilityIndex },
}: Props) {
  return (
    <>
      <header className="w-full">
        <h1 className="text-center text-2xl font-semibold">Geography</h1>
        <hr className="border-white" />
      </header>
      {visibilityIndex == 1.1 && (
        <Continent setVisibility={setVisibilityIndex} />
      )}
      {visibilityIndex == 1.2 && (
        <Population setVisibility={setVisibilityIndex} />
      )}
    </>
  );
}
