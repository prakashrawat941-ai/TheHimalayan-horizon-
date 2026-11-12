import type { Language } from "@/i18n/messages";

// Default categories from the master prompt. They move into the database, where the admin manages
// them, in Phase 3.
export const DESTINATION_CATEGORIES = [
  { slug: "hidden-villages", name: { en: "Hidden Villages", hi: "छिपे हुए गाँव" } },
  { slug: "mountain-destinations", name: { en: "Mountain Destinations", hi: "पहाड़ी गंतव्य" } },
  { slug: "offbeat-places", name: { en: "Offbeat Places", hi: "अनछुई जगहें" } },
  { slug: "trekking-destinations", name: { en: "Trekking Destinations", hi: "ट्रेकिंग गंतव्य" } },
  { slug: "nature-retreats", name: { en: "Nature Retreats", hi: "प्रकृति रिट्रीट" } },
  { slug: "riverside-locations", name: { en: "Riverside Locations", hi: "नदी किनारे की जगहें" } },
  { slug: "cultural-experiences", name: { en: "Cultural Experiences", hi: "सांस्कृतिक अनुभव" } },
  { slug: "workation-destinations", name: { en: "Workation Destinations", hi: "वर्केशन गंतव्य" } },
  { slug: "weekend-getaways", name: { en: "Weekend Getaways", hi: "सप्ताहांत की यात्राएँ" } },
] as const;

export type CategorySlug = (typeof DESTINATION_CATEGORIES)[number]["slug"];

export function isCategorySlug(value: unknown): value is CategorySlug {
  return DESTINATION_CATEGORIES.some((category) => category.slug === value);
}

export function categoryName(slug: string, language: Language): string {
  const match = DESTINATION_CATEGORIES.find((category) => category.slug === slug);
  return match ? match.name[language] : slug;
}
