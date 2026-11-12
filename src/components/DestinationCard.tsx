"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";
import { categoryName } from "@/lib/categories";
import type { Destination } from "@/lib/types";

export default function DestinationCard({ destination }: { destination: Destination }) {
  const { language } = useLanguage();

  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="block rounded-2xl border border-ivory-200 bg-white p-5 shadow-sm transition-colors hover:border-forest-700"
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-copper-600">
        {destination.district}, {destination.state}
      </p>
      <h2 className="mt-2 text-xl font-semibold text-forest-900">{destination.name}</h2>
      {destination.description ? (
        <p className="mt-2 line-clamp-3 text-stone-600">{destination.description}</p>
      ) : null}
      {destination.categories.length > 0 ? (
        <ul className="mt-4 flex flex-wrap gap-2">
          {destination.categories.map((slug) => (
            <li
              key={slug}
              className="rounded-full bg-forest-50 px-3 py-1 text-xs font-medium text-forest-800"
            >
              {categoryName(slug, language)}
            </li>
          ))}
        </ul>
      ) : null}
    </Link>
  );
}
