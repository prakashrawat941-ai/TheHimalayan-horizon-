import { useLanguage } from "../i18n/LanguageProvider";
import type { Messages } from "../i18n/messages";

type NavKey = keyof Messages["nav"];

export default function PlaceholderPage({ titleKey }: { titleKey: NavKey }) {
  const { t } = useLanguage();

  return (
    <section className="rounded-2xl border border-dashed border-stone-300 bg-white p-6">
      <h1 className="text-2xl font-semibold text-emerald-900">{t.nav[titleKey]}</h1>
      <p className="mt-2 font-medium text-stone-700">{t.placeholder.comingSoon}</p>
      <p className="mt-1 text-stone-600">{t.placeholder.comingSoonText}</p>
    </section>
  );
}
