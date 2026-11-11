"use client";

import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function NotFoundContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader page="notFound" />
      <Link
        href="/"
        className="inline-flex rounded-full bg-forest-800 px-5 py-2.5 font-semibold text-ivory-100 transition-colors hover:bg-forest-700"
      >
        {t.pages.notFound.back}
      </Link>
    </>
  );
}
