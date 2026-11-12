"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";
import { DESTINATION_CATEGORIES, categoryName } from "@/lib/categories";

// Filters are plain links to ?category=..., so they work without JavaScript and can be shared.
export default function CategoryChips({ active }: { active: string | null }) {
  const { language, t } = useLanguage();

  const chipClass = (isActive: boolean) =>
    `rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
      isActive
        ? "border-forest-800 bg-forest-800 text-ivory-100"
        : "border-ivory-200 bg-white text-forest-900 hover:border-forest-700"
    }`;

  return (
    <nav aria-label={t.place.filterLabel}>
      <ul className="flex flex-wrap gap-2">
        <li>
          <Link
            href="/destinations"
            aria-current={active === null ? "page" : undefined}
            className={chipClass(active === null)}
          >
            {t.place.allCategories}
          </Link>
        </li>
        {DESTINATION_CATEGORIES.map((category) => {
          const isActive = active === category.slug;
          return (
            <li key={category.slug}>
              <Link
                href={`/destinations?category=${category.slug}`}
                aria-current={isActive ? "page" : undefined}
                className={chipClass(isActive)}
              >
                {categoryName(category.slug, language)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
