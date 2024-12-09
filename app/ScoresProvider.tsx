"use client";

import { createContext, Dispatch, SetStateAction, useState } from "react";

export interface ScoresData {
  country: string;
  score: number;
}
interface ScoresContextType {
  scores: ScoresData[];
  setScores: Dispatch<SetStateAction<ScoresData[]>>;
}
export const ScoresContext = createContext<ScoresContextType>(
  {} as ScoresContextType,
);

export default function ScoresProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scores, setScores] = useState<ScoresData[]>([]);

  return (
    <ScoresContext.Provider value={{ scores, setScores }}>
      {children}
    </ScoresContext.Provider>
  );
}
