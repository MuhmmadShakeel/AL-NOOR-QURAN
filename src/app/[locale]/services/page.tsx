import PageHero from "@/components/PageHero";
import Catalog from "@/components/services/Catalog";
import FAQs from "@/components/home/FAQs";
import JourneyCTA from "@/components/JourneyCTA";
import { pageMetadata } from "@/lib/metadata";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return pageMetadata((await params).locale, "services");
}
export default async function Services({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const ur = locale === "ur";
  return (
    <main id="main">
      <PageHero
        id="programs"
        locale={locale}
        title={
          ur
            ? "ہر مرحلے پر علم کی روشنی۔"
            : "A path for every stage of your journey."
        }
        description={
          ur
            ? "مدنی قاعدہ سے تلاوت اور حفظ تک۔ اپنی استعداد اور مقصد کے مطابق کورس دریافت کریں۔"
            : "From your first Arabic letter to thoughtful recitation and memorization. Discover a starting point that meets you where you are."
        }
      />
      <Catalog locale={locale} />
      <FAQs locale={locale} />
      <JourneyCTA locale={locale} />
    </main>
  );
}
