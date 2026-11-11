import type { Metadata } from "next";
import EmptyState from "@/components/EmptyState";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Village homestays",
  description: "Verified village homestays in Uttarakhand, run by local families.",
};

export default function HomestaysPage() {
  return (
    <>
      <PageHeader page="homestays" />
      <EmptyState kind="homestays" />
    </>
  );
}
