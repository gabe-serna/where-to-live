import { Country } from "@/types/countries";
import { Preference, Score, Tier, UserScores } from "@/types/userScores";
import * as DIVISIONS from "@/constants/tierDivisons";

export default function calculateScores(
  userScores: UserScores,
  country: Country,
) {
  const geographyScore = calculateGeographyScore(
    userScores.geography,
    country.geography,
  );
  const economyScore = calculateEconomyScore(
    userScores.economy,
    country.economy,
  );
  const infrastructureScore = calculateInfrastructureScore(
    userScores.infrastructure,
    country.infrastructure,
  );
  const socialScore = calculateSocialScore(userScores.social, country.social);
}

function calculateGeographyScore(
  scores: UserScores["geography"],
  country: Country["geography"],
): Score {
  // Get Individual Scores
  const continent = !scores.noPreference.continent
    ? getEnumScore(scores.continent, country.continent)
    : { points: 0, total: 0 };

  const population = !scores.noPreference.population
    ? getTierScore(scores.population, DIVISIONS.population, country.population)
    : { points: 0, total: 0 };

  const density = !scores.noPreference.density
    ? getTierScore(scores.density, DIVISIONS.density, country.density)
    : { points: 0, total: 0 };

  const urbanVsRural = !scores.noPreference.urbanPercentage
    ? getNumberScore(
        "symmetric",
        scores.urbanPercentage,
        country.urbanPercentage,
      )
    : { points: 0, total: 0 };

  // Calculate Total Score
  const points =
    continent.points + population.points + density.points + urbanVsRural.points;

  const total =
    continent.total + population.total + density.total + urbanVsRural.total;

  return { points, total };
}

function calculateEconomyScore(
  scores: UserScores["economy"],
  country: Country["economy"],
) {
  return 0;
}

function calculateInfrastructureScore(
  scores: UserScores["infrastructure"],
  country: Country["infrastructure"],
) {
  return 0;
}

function calculateSocialScore(
  scores: UserScores["social"],
  country: Country["social"],
) {
  return 0;
}

/**
 * Supporting Functions
 */
function getEnumScore(tiers: Tier[], label: string): Score {
  for (const tier of tiers) {
    if (tier.label === label) {
      return getPreferenceScore(tier.preference);
    }
  }
  return { points: 0, total: 0 };
}

function getTierScore(
  tiers: Tier[],
  tierDivisons: number[],
  value: number,
): Score {
  tiers.forEach((tier, index) => {
    if (index + 1 === tiers.length) {
      return getPreferenceScore(tier.preference);
    }

    if (value < tierDivisons[index]) {
      return getPreferenceScore(tier.preference);
    }
  });
  return { points: 0, total: 0 };
}

function getPreferenceScore(preference: Preference): Score {
  if (preference === "preferred") return { points: 10, total: 10 };
  if (preference === "neutral") return { points: 5, total: 10 };
  else return { points: 0, total: 0 };
}

function getNumberScore(
  type: "index" | "reverse-index",
  desired: number,
  value: number,
  min: number,
  max: number,
): Score;
function getNumberScore(
  type: "symmetric",
  desired: number,
  value: number,
): Score;

function getNumberScore(
  type: "index" | "reverse-index" | "symmetric",
  desired: number,
  value: number,
  min?: number,
  max?: number,
): Score {
  let normDistance: number;

  if (type === "index" || type === "reverse-index") {
    if (min === undefined || max === undefined) {
      throw new Error(
        "Parameters 'min' and 'max' are required for index types",
      );
    }
    // Set Normalized Distance for Index
    if (type === "index") normDistance = desired - value / (max - min);
    else normDistance = value - desired / (max - min);
  } else {
    // Set Normalized Distance for Symmetric
    normDistance = Math.abs(desired - value) / desired;
  }

  const points = 10 / (1 + Math.exp(10 * normDistance - 2));
  return { points, total: 10 };
}
