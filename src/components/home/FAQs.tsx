import { ChevronDown } from "lucide-react";
import { faqs, txt } from "@/lib/content";
export function FAQList({ locale }: { locale: string }) {
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <details key={i} className="faq-row">
          <summary>
            {txt(faq.q, locale)}
            <ChevronDown size={16} />
          </summary>
          <p className="px-6 pb-6 text-xs leading-7 text-muted">
            {txt(faq.a, locale)}
          </p>
        </details>
      ))}
    </div>
  );
}
export default function FAQs({ locale }: { locale: string }) {
  const ur = locale === "ur";
  return (
    <section
      id="faqs"
      className="px-5 py-16 sm:px-8"
      aria-labelledby="faqs-title"
    >
      <div className="mx-auto max-w-[760px]">
        <h2 id="faqs-title" className="section-title mb-9 text-center">
          {ur ? "آپ کے سوال، واضح جواب۔" : "Frequently asked questions"}
        </h2>
        <FAQList locale={locale} />
      </div>
    </section>
  );
}
