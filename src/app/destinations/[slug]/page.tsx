import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DestinationDetail from "@/components/DestinationDetail";
import JsonLd from "@/components/JsonLd";
import { getPublishedDestination } from "@/lib/catalog";
import { siteUrl } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const destination = await getPublishedDestination(slug);
  if (!destination) return { title: "Place not found" };

  const description =
    destination.description ??
    `Explore ${destination.name} in ${destination.district} district, ${destination.state}.`;
  const url = `${siteUrl}/destinations/${destination.slug}`;

  return {
    title: destination.name,
    description,
    alternates: { canonical: url },
    openGraph: { type: "website", title: destination.name, description, url },
  };
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;
  const destination = await getPublishedDestination(slug);
  if (!destination) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: destination.name,
    description: destination.description ?? undefined,
    url: `${siteUrl}/destinations/${destination.slug}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: destination.village ?? destination.district,
      addressRegion: destination.state,
      addressCountry: "IN",
    },
    geo:
      destination.latitude !== null && destination.longitude !== null
        ? {
            "@type": "GeoCoordinates",
            latitude: destination.latitude,
            longitude: destination.longitude,
          }
        : undefined,
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <DestinationDetail destination={destination} />
    </>
  );
}
