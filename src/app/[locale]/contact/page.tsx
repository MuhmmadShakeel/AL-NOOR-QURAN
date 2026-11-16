import ContactDetails from "@/components/contact/ContactDetails";
import Support from "@/components/contact/Support";
import { pageMetadata } from "@/lib/metadata";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return pageMetadata((await params).locale, "contact");
}
export default async function Contact({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const ur = locale === "ur";
  return (
    <main id="main">
      <section
        className="px-5 pb-14 pt-16 text-center sm:px-8 lg:pb-20 lg:pt-24"
        aria-labelledby="contact-title"
      >
        <div className="mx-auto max-w-[800px]">
          <span className="eyebrow">{ur ? "رابطہ کریں" : "Get in touch"}</span>
          <h1 id="contact-title" className="hero-title mt-7 !text-[#9a7e32]">
            {ur
              ? "آپ کا سفر، ایک سلام سے۔"
              : "Your journey begins with a salaam."}
          </h1>
          <p className="mx-auto mt-6 max-w-[680px] text-sm leading-7 text-muted">
            {ur
              ? "کورس کے انتخاب، کلاس کے اوقات یا ابتدائی سبق کے بارے میں بات کریں۔ ہم آپ کی رہنمائی کے لیے حاضر ہیں۔"
              : "Questions about programs, lesson times, or where to begin? Let’s talk about your next step toward the Quran."}
          </p>
        </div>
      </section>
      <ContactDetails locale={locale} />
      <Support locale={locale} />
    </main>
  );
}
