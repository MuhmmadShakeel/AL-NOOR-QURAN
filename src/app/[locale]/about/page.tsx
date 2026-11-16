import PageHero from "@/components/PageHero";
import History from "@/components/about/History";
import Values from "@/components/about/Values";
import Tutors from "@/components/about/Tutors";
import JourneyCTA from "@/components/JourneyCTA";
import { pageMetadata } from "@/lib/metadata";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return pageMetadata((await params).locale, "about");
}
export default async function About({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const ur = locale === "ur";
  return (
    <main id="main">
      <PageHero
        id="about"
        locale={locale}
        title={
          ur ? "النور قرآن اکیڈمی کے بارے میں" : "About Al Noor Quran Academy"
        }
        description={
          ur
            ? "النور قرآن اکیڈمی میں ہم قرآن کی تعلیم کو ذاتی، بامقصد اور قابلِ رسائی بنانے کی کوشش کرتے ہیں۔"
            : "Get to know the intention behind Al Noor Quran Academy: making Quran education personal, purposeful, and accessible."
        }
      />
      <History locale={locale} />
      <Values locale={locale} />
      <Tutors locale={locale} />
      <JourneyCTA locale={locale} />
    </main>
  );
}
