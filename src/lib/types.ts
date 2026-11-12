export type TravelDifficulty = "easy" | "moderate" | "difficult";

// Fields follow the master prompt's destination list. A fact that has not been verified is null or
// an empty list, never a guess. Budgets are estimates and are labelled as such in the UI.
export type Destination = {
  id: string;
  slug: string;
  name: string;
  district: string;
  village: string | null;
  state: string;
  latitude: number | null;
  longitude: number | null;
  description: string | null;
  categories: string[];
  bestTimeToVisit: string | null;
  roadAccess: string | null;
  nearestRailwayStation: string | null;
  nearestAirport: string | null;
  distancesFromCities: { city: string; kilometres: number }[];
  nearbyAttractions: string[];
  trekkingOpportunities: string | null;
  localCulture: string | null;
  foodExperiences: string | null;
  networkConnectivity: string | null;
  facilities: string[];
  travelDifficulty: TravelDifficulty | null;
  estimatedBudgetPerPersonInr: { min: number; max: number } | null;
};
