import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact The Himalayan Horizon. Our office is in Almora district, Uttarakhand.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader page="contact" />
      <address className="max-w-md rounded-2xl border border-ivory-200 bg-white p-6 not-italic leading-relaxed text-forest-900">
        {SITE.address.lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </address>
    </>
  );
}
