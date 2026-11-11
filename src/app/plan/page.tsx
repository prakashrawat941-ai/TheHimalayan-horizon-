import type { Metadata } from "next";
import EmptyState from "@/components/EmptyState";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Plan your trip",
  description: "Build a day-by-day trip plan with an estimated budget for Uttarakhand.",
};

export default function PlanPage() {
  return (
    <>
      <PageHeader page="plan" />
      <EmptyState kind="plan" />
    </>
  );
}
