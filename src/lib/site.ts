export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(
  /\/$/,
  "",
);

// Facts that are not translated. Official address as supplied by the business.
export const SITE = {
  name: "The Himalayan Horizon",
  description:
    "Discover hidden Himalayan villages, stay with local families, work from the mountains and plan trips across Uttarakhand.",
  address: {
    lines: ["Village Surmoli", "Post Deghat", "District Almora", "Uttarakhand", "India"],
    streetAddress: "Village Surmoli, Post Deghat",
    locality: "Almora",
    region: "Uttarakhand",
    country: "IN",
  },
} as const;

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: siteUrl,
  description: SITE.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.streetAddress,
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    addressCountry: SITE.address.country,
  },
};
