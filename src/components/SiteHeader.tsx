"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/i18n/LanguageProvider";
import { NAV_ITEMS, isActivePath } from "@/lib/nav";

export default function SiteHeader() {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname() ?? "/";
  const nextLanguage = language === "en" ? "hi" : "en";
  const nextLabel = language === "en" ? t.language.hindi : t.language.english;

  return (
    <header className="sticky top-0 z-30 border-b border-ivory-200 bg-ivory-100/95 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-40 focus:rounded-md focus:bg-forest-900 focus:px-3 focus:py-2 focus:text-ivory-100"
      >
        {t.common.skip}
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="font-semibold tracking-tight text-forest-900">
          {t.appName}
        </Link>
        <div className="flex items-center gap-6">
          <nav aria-label={t.common.mainNav} className="hidden items-center gap-5 md:flex">
            {NAV_ITEMS.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-sm font-medium transition-colors ${
                    active ? "text-forest-900" : "text-stone-600 hover:text-forest-700"
                  }`}
                >
                  {t.nav[item.key]}
                </Link>
              );
            })}
          </nav>
          <button
            type="button"
            onClick={() => setLanguage(nextLanguage)}
            aria-label={`${t.language.toggleLabel}: ${nextLabel}`}
            className="rounded-full border border-forest-700 px-3 py-1 text-sm font-medium text-forest-900 transition-colors hover:bg-forest-50"
          >
            {nextLabel}
          </button>
        </div>
      </div>
    </header>
  );
}
