import type { Metadata } from "next";
import CategoryChips from "@/components/CategoryChips";
import DestinationCard from "@/components/DestinationCard";
import EmptyState from "@/components/EmptyState";
import PageHeader from "@/components/PageHeader";
import { filterByCategory, listPublishedDestinations } from "@/lib/catalog";
import { isCategorySlug } from "@/lib/categories";

export const metadata: Metadata = {
  title: "Hidden places",
  description: "Villages and places in Uttarakhand that few travelers have reached yet.",
};

type Props = {
  searchParams: Promise<{ category?: string | string[] }>;
};

export default async function DestinationsPage({ searchParams }: Props) {
  const { category } = await searchParams;
  const active = typeof category === "string" && isCategorySlug(category) ? category : null;
  const destinations = filterByCategory(await listPublishedDestinations(), active);

  return (
    <>
      <PageHeader page="destinations" />
      <div className="mb-8">
        <CategoryChips active={active} />
      </div>
      {destinations.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      ) : (
        <EmptyState kind="destinations" />
      )}
    </>
  );
}
