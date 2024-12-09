"use client";

import { UserScores } from "@/types/userScores";
import { createContext, Dispatch, SetStateAction, useState } from "react";

interface PreferenceContextType {
  preferences: UserScores;
  setPreferences: Dispatch<SetStateAction<UserScores>>;
}
export const PreferenceContext = createContext<PreferenceContextType>(
  {} as PreferenceContextType,
);

export default function PreferenceProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [preferences, setPreferences] = useState<UserScores>({} as UserScores);

  return (
    <PreferenceContext.Provider value={{ preferences, setPreferences }}>
      {children}
    </PreferenceContext.Provider>
  );
}
