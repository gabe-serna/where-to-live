"use client";

import { createContext, Dispatch, SetStateAction, useState } from "react";

interface ScoreData {
  country: string;
  score: number;
}
interface ScoreContextType {
  score: ScoreData;
  setScore: Dispatch<SetStateAction<ScoreData>>;
}
export const ScoreContext = createContext<ScoreContextType>(
  {} as ScoreContextType,
);

export default function ScoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [score, setScore] = useState<ScoreData>({} as ScoreData);

  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      {children}
    </ScoreContext.Provider>
  );
}
