"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/i18n/LanguageProvider";
import { MOBILE_NAV_ITEMS, isActivePath } from "@/lib/nav";

export default function MobileNav() {
  const { t } = useLanguage();
  const pathname = usePathname() ?? "/";

  return (
    <nav
      aria-label={t.common.mobileNav}
      className="fixed inset-x-0 bottom-0 z-30 border-t border-ivory-200 bg-ivory-100 pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <ul className="grid grid-cols-5">
        {MOBILE_NAV_ITEMS.map((item) => {
          const active = isActivePath(pathname, item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`flex min-h-14 items-center justify-center px-1 text-center text-xs font-medium ${
                  active ? "text-forest-900" : "text-stone-600"
                }`}
              >
                {t.nav[item.key]}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
