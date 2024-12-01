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
  | "Tropical"
  | "Arid"
  | "Semi-Arid"
  | "Temperate"
  | "Continental"
  | "Polar"
  | "Diverse";

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
  crimeRate: number;
  airQuality: number;
}

export interface Social {
  languages: string[];
  immigrants: number;
  emigrants: number;
  politicalStability: number;
  politicalAffiliation:
    | "Left"
    | "Center-Left"
    | "Center"
    | "Center-Right"
    | "Right";
}
