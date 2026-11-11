import { NavLink, Outlet } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageProvider";

const NAV_ITEMS = [
  { to: "/", label: "home", end: true },
  { to: "/villages", label: "villages", end: false },
  { to: "/homestays", label: "homestays", end: false },
  { to: "/plan", label: "plan", end: false },
  { to: "/contact", label: "contact", end: false },
] as const;

export default function Layout() {
  const { language, setLanguage, t } = useLanguage();
  const nextLanguage = language === "en" ? "hi" : "en";
  const nextLabel = language === "en" ? t.language.hindi : t.language.english;

  return (
    <div className="flex min-h-dvh flex-col">
      <header className="sticky top-0 z-20 border-b border-stone-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <NavLink to="/" className="font-semibold text-emerald-900">
            {t.appName}
          </NavLink>
          <div className="flex items-center gap-6">
            <nav aria-label="Main" className="hidden items-center gap-5 md:flex">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `text-sm font-medium ${
                      isActive ? "text-emerald-900" : "text-stone-600 hover:text-emerald-800"
                    }`
                  }
                >
                  {t.nav[item.label]}
                </NavLink>
              ))}
            </nav>
            <button
              type="button"
              onClick={() => setLanguage(nextLanguage)}
              className="rounded-full border border-emerald-800 px-3 py-1 text-sm font-medium text-emerald-900"
            >
              {nextLabel}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-28 pt-6 md:pb-12">
        <Outlet />
      </main>

      <nav
        aria-label="Mobile"
        className="fixed inset-x-0 bottom-0 z-20 border-t border-stone-200 bg-white pb-[env(safe-area-inset-bottom)] md:hidden"
      >
        <ul className="grid grid-cols-5">
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `flex min-h-14 items-center justify-center px-1 text-center text-xs font-medium ${
                    isActive ? "text-emerald-900" : "text-stone-600"
                  }`
                }
              >
                {t.nav[item.label]}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
