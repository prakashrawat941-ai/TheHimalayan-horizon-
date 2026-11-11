"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";
import { NAV_ITEMS } from "@/lib/nav";
import { SITE } from "@/lib/site";

export default function SiteFooter() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-forest-900 text-ivory-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold">{t.appName}</p>
          <p className="mt-2 text-ivory-200/80">{t.tagline}</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gold-500">
            {t.footer.explore}
          </h2>
          <ul className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-ivory-200/90 transition-colors hover:text-gold-500"
                >
                  {t.nav[item.key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gold-500">
            {t.footer.visit}
          </h2>
          <address className="mt-3 not-italic leading-relaxed text-ivory-200/90">
            {SITE.address.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </div>
      </div>
      <div className="border-t border-forest-700">
        <p className="mx-auto max-w-6xl px-4 py-4 pb-24 text-sm text-ivory-200/70 md:pb-4">
          © {year} {SITE.name}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
