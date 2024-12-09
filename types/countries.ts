export interface Country {
  name: string;
  geography: Geography;
  economy: Economy;
  infrastructure: Infrastructure;
  social: Social;
}

export interface Geography {
  continent: string;
  population: number;
  density: number;
  urbanPercentage?: number;
  ruralPercentage?: number;
  climate: Climate[];
  avgTempLow: number;
  avgTempHigh: number;
}

export type Climate =
  | "Continental"
  | "Desert"
  | "Highlands"
  | "Mediterranean"
  | "Semi-Arid"
  | "Subtropical"
  | "Subarctic"
  | "Temperate"
  | "Tropical";

export interface Economy {
  costOfLiving?: number;
  unemploymentRate?: number;
  gdpPerCapita?: number;
  wealthInequality?: number;
}

export interface Infrastructure {
  connectivityPercentage?: number;
  publicTransportation?: number;
  healthcare?: number;
  education?: number;
  criminality?: number;
  airQuality?: number;
}

export interface Social {
  officialLanguages: string[];
  otherLanguages: string[];
  immigrants: number;
  emigrants: number;
  imgrVsEmgr: number;
  politicalStability?: number;
  politicalCorruption?: number;
  politicalRightsRating?: number;
  politicalRegime:
    | "Closed Autocracy"
    | "Electoral Autocracy"
    | "Electoral Democracy"
    | "Liberal Democracy";
  politicalOrientation:
    | "Left"
    | "Left-Center"
    | "Center"
    | "Right-Center"
    | "Right";
}
