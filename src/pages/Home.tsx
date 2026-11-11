import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageProvider";

const CARDS = [
  { to: "/villages", title: "exploreVillages", text: "exploreVillagesText" },
  { to: "/homestays", title: "homestays", text: "homestaysText" },
  { to: "/plan", title: "planner", text: "plannerText" },
] as const;

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="space-y-8">
      <section className="rounded-3xl bg-linear-to-br from-emerald-900 to-emerald-700 p-6 text-white md:p-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-200">
          {t.appName}
        </p>
        <h1 className="mt-2 text-3xl font-bold md:text-5xl">{t.tagline}</h1>
        <p className="mt-4 max-w-2xl text-emerald-50 md:text-lg">{t.home.intro}</p>
        <Link
          to="/plan"
          className="mt-6 inline-flex rounded-full bg-amber-400 px-5 py-2.5 font-semibold text-emerald-950"
        >
          {t.home.planner}
        </Link>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {CARDS.map((card) => (
          <Link
            key={card.to}
            to={card.to}
            className="block rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:border-emerald-700"
          >
            <h2 className="text-lg font-semibold text-emerald-900">{t.home[card.title]}</h2>
            <p className="mt-1 text-stone-600">{t.home[card.text]}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
