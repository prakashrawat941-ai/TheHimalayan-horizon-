import type { Metadata } from "next";
import EmptyState from "@/components/EmptyState";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Mountain workations",
  description: "Peaceful places in Uttarakhand to work remotely from.",
};

export default function WorkationsPage() {
  return (
    <>
      <PageHeader page="workations" />
      <EmptyState kind="workations" />
    </>
  );
}
