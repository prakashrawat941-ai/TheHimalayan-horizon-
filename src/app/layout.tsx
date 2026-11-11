import type { Metadata, Viewport } from "next";
import { Noto_Sans, Noto_Sans_Devanagari } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import MobileNav from "@/components/MobileNav";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { SITE, organizationJsonLd, siteUrl } from "@/lib/site";

const latin = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-latin",
  display: "swap",
});

const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-devanagari",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: SITE.name,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_IN",
    alternateLocale: ["hi_IN"],
  },
};

export const viewport: Viewport = {
  themeColor: "#1f4a3a",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${latin.variable} ${devanagari.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <LanguageProvider>
          <SiteHeader />
          <main id="main" className="mx-auto w-full max-w-6xl flex-1 px-4 pb-28 pt-6 md:pb-12">
            {children}
          </main>
          <SiteFooter />
          <MobileNav />
        </LanguageProvider>
        <JsonLd data={organizationJsonLd} />
      </body>
    </html>
  );
}
