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
  urbanPercentage: number;
  ruralPercentage: number;
  climate: Climate[];
  avgTempLow: number;
  avgTempHigh: number;
}

export type Climate =
  | "Arctic"
  | "Arid"
  | "Continental"
  | "Desert"
  | "Diverse"
  | "Highlands"
  | "Mediterranean"
  | "Semi-Arid "
  | "Subtropical"
  | "Subarctic"
  | "Temperate"
  | "Tropical";

export interface Economy {
  costOfLiving: number;
  unemploymentRate: number;
  gdpPerCapita: number;
  wealthInequality: number;
}

export interface Infrastructure {
  internetConnectivity: number;
  publicTransportation: number;
  healthcare: number;
  education: number;
  criminality: number;
  airQuality: number;
}

export interface Social {
  officialLanguage: string[];
  minorityLanguage: string[];
  otherLanguage: string[];
  immigrants: number;
  emigrants: number;
  politicalStability: number;
  politicalOrientation:
    | "Left"
    | "Left-Center"
    | "Center"
    | "Right-Center"
    | "Right";
}
