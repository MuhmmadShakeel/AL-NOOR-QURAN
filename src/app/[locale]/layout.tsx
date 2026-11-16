import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { academy } from "@/lib/content";
import "../globals.css";
export const metadata: Metadata = {
  title: {
    default: "Al Noor Quran Academy",
    template: "%s | Al Noor Quran Academy",
  },
  applicationName: "Al Noor Quran Academy",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
};
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Al Noor Quran Academy",
    alternateName: "النور قرآن اکیڈمی",
    description:
      locale === "ur"
        ? "اردو اور انگریزی میں آن لائن قرآن کی تعلیم"
        : "Online Quran education in English and Urdu",
    telephone: academy.phone,
    email: academy.email,
    sameAs: [academy.facebook, academy.instagram],
    availableLanguage: ["English", "Urdu"],
  };
  return (
    <html lang={locale} dir={locale === "ur" ? "rtl" : "ltr"}>
      <body className="bg-paper font-sans text-forest antialiased">
        <NextIntlClientProvider>
          <a
            href="#main"
            className="sr-only fixed start-4 top-4 z-[100] rounded bg-gold px-5 py-3 text-forest focus:not-sr-only"
          >
            {locale === "ur" ? "مرکزی مواد پر جائیں" : "Skip to content"}
          </a>
          <Navbar />
          {children}
          <Footer locale={locale} />
        </NextIntlClientProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
