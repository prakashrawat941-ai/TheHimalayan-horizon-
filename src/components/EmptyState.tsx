"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import type { Messages } from "@/i18n/messages";

export default function EmptyState({ kind }: { kind: keyof Messages["empty"] }) {
  const { t } = useLanguage();

  return (
    <div
      role="status"
      className="rounded-2xl border border-dashed border-stone-300 bg-white p-6 text-stone-700"
    >
      {t.empty[kind]}
    </div>
  );
}
