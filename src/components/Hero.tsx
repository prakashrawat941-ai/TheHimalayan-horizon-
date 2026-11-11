"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();
  const supporting = Object.values(t.supporting);

  return (
    <section className="rounded-3xl bg-forest-800 p-6 text-ivory-100 md:p-12">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
        {t.appName}
      </p>
      <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
        {t.tagline}
      </h1>
      <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ivory-200/90 md:text-base">
        {supporting.map((line) => (
          <li key={line} className="flex items-center gap-2">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold-500" />
            {line}
          </li>
        ))}
      </ul>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory-200/90">{t.home.intro}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/destinations"
          className="rounded-full bg-gold-500 px-5 py-2.5 font-semibold text-forest-900 transition-colors hover:bg-gold-100"
        >
          {t.home.ctaExplore}
        </Link>
        <Link
          href="/plan"
          className="rounded-full border border-ivory-200/60 px-5 py-2.5 font-semibold text-ivory-100 transition-colors hover:bg-forest-700"
        >
          {t.home.ctaPlan}
        </Link>
      </div>
    </section>
  );
}
