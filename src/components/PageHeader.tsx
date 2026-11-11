"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import type { Messages } from "@/i18n/messages";

export default function PageHeader({ page }: { page: keyof Messages["pages"] }) {
  const { t } = useLanguage();
  const copy = t.pages[page];

  return (
    <header className="mb-8 max-w-2xl">
      <h1 className="text-3xl font-bold tracking-tight text-forest-900 md:text-4xl">
        {copy.title}
      </h1>
      <p className="mt-3 text-lg leading-relaxed text-stone-700">{copy.text}</p>
    </header>
  );
}
