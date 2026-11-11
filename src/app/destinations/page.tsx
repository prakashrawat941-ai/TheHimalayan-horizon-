import type { Metadata } from "next";
import EmptyState from "@/components/EmptyState";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Hidden places",
  description: "Villages and places in Uttarakhand that few travelers have reached yet.",
};

export default function DestinationsPage() {
  return (
    <>
      <PageHeader page="destinations" />
      <EmptyState kind="destinations" />
    </>
  );
}
