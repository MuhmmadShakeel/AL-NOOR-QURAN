import Hero from "@/components/home/Hero";
import WhyUs from "@/components/home/WhyUs";
import Courses from "@/components/home/Courses";
import HelpStrip from "@/components/home/HelpStrip";
import Intake from "@/components/home/Intake";
import Testimonials from "@/components/home/Testimonials";
import Curriculum from "@/components/home/Curriculum";
import FAQs from "@/components/home/FAQs";
import { pageMetadata } from "@/lib/metadata";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return pageMetadata((await params).locale, "home");
}
export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <main id="main">
      <Hero locale={locale} />
      <WhyUs locale={locale} />
      <Courses locale={locale} />
      <HelpStrip locale={locale} />
      <Intake locale={locale} />
      <Testimonials locale={locale} />
      <Curriculum locale={locale} />
      <FAQs locale={locale} />
    </main>
  );
}
