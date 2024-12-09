import { Country } from "@/types/countries";
import { UserScores } from "@/types/userScores";

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
  return 0;
}

function calculateGeographyScore(
  scores: UserScores["geography"],
  country: Country["geography"],
) {
  return 0;
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
