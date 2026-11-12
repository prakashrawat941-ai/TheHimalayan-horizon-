import type { Destination } from "./types";

// Reads from Supabase start in Phase 3. Until then nothing is published, so every list is empty and
// every destination lookup returns null. This module never returns sample data.

export async function listPublishedDestinations(): Promise<Destination[]> {
  return [];
}

export async function getPublishedDestination(_slug: string): Promise<Destination | null> {
  return null;
}

export function filterByCategory(
  destinations: Destination[],
  category: string | null,
): Destination[] {
  if (!category) return destinations;
  return destinations.filter((destination) => destination.categories.includes(category));
}
