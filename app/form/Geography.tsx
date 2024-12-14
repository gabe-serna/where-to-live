"use client";

import Climate from "@/components/geography/Climate";
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
        <h1 className="text-left text-3xl font-bold tracking-[0.0125em]">
          Geography
        </h1>
      </header>
      {visibilityIndex == 1.1 && (
        <Continent setVisibility={setVisibilityIndex} />
      )}
      {visibilityIndex == 1.2 && (
        <Population setVisibility={setVisibilityIndex} />
      )}
      {visibilityIndex == 1.3 && <Climate setVisibility={setVisibilityIndex} />}
    </>
  );
}
