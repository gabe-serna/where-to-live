/**
 * Supporting Types
 */
export interface Score {
  points: number;
  total: number;
}

export type Preference = "preferred" | "neutral" | "avoid";

export interface Tier {
  label: string;
  preference: Preference;
}

/**
 * Main Types
 */
export interface UserScores {
  geography?: GeographyScores;
  economy?: EconomyScores;
  infrastructure?: InfrastructureScores;
  social?: SocialScores;
  importanceRanking?: string[];
}

export interface GeographyScores {
  continent?: Tier[];
  population?: Tier[];
  density?: Tier[];
  urbanPercentage?: number;
  ruralPercentage?: number;
  climate?: Tier[];
  temperature?: {
    avgTempLow: number;
    avgTempHigh: number;
  };
  noPreference: {
    continent?: boolean;
    population?: boolean;
    density?: boolean;
    urbanPercentage?: boolean;
    ruralPercentage?: boolean;
    climate?: boolean;
    temperature?: boolean;
  };
}

interface EconomyScores {
  costOfLiving?: Tier[];
  unemploymentRate?: number;
  gdpPerCapita?: Tier[];
  wealthInequality?: Tier[];
  noPreference: {
    costOfLiving?: boolean;
    unemploymentRate?: boolean;
    gdpPerCapita?: boolean;
    wealthInequality?: boolean;
  };
}

interface InfrastructureScores {
  connectivityPercentage?: number;
  publicTransportation?: number;
  healthcare?: number;
  education?: number;
  criminality?: number;
  airQuality?: number;
  noPreference: {
    connectivityPercentage?: boolean;
    publicTransportation?: boolean;
    healthcare?: boolean;
    education?: boolean;
    crimeRate?: boolean;
    airQuality?: boolean;
  };
}

interface SocialScores {
  languages?: {
    ideal: string[];
    favorLanguageFamily: boolean;
  };
  migration?: {
    immigration: number;
    emigration: number;
  };
  politicalStability?: number;
  politicalRegime?: Tier[];
  politicalOrientation?:
    | "Left"
    | "Left-Center"
    | "Center"
    | "Right-Center"
    | "Right";
  noPreference: {
    languages?: boolean;
    migration?: boolean;
    politicalStability?: boolean;
    politicalRegime?: boolean;
    politicalOrientation?: boolean;
  };
}
