"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";

const CARDS = [
  { href: "/destinations", key: "explore" },
  { href: "/homestays", key: "homestays" },
  { href: "/workations", key: "workations" },
  { href: "/plan", key: "plan" },
] as const;

export default function EntryCards() {
  const { t } = useLanguage();

  return (
    <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {CARDS.map((card) => {
        const copy = t.home.cards[card.key];
        return (
          <Link
            key={card.href}
            href={card.href}
            className="block rounded-2xl border border-ivory-200 bg-white p-5 shadow-sm transition-colors hover:border-forest-700"
          >
            <h2 className="text-lg font-semibold text-forest-900">{copy.title}</h2>
            <p className="mt-2 text-stone-600">{copy.text}</p>
          </Link>
        );
      })}
    </section>
  );
}
