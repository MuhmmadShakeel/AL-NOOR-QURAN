import { CircleHelp } from "lucide-react";
import { FAQList } from "../home/FAQs";
export default function Support({ locale }: { locale: string }) {
  const ur = locale === "ur";
  return (
    <section
      id="support"
      aria-labelledby="support-title"
      className="px-5 pb-24 pt-8 sm:px-8 lg:pb-40 lg:pt-14"
    >
      <div className="mx-auto grid max-w-[1200px] gap-10 rounded-[32px] border border-forest/5 bg-white p-6 shadow-[0_14px_24px_#063e320a] sm:p-10 lg:grid-cols-[.85fr_1.15fr] lg:p-12">
        <div>
          <span className="eyebrow">{ur ? "رہنمائی" : "Quick assistance"}</span>
          <h2 id="support-title" className="section-title mt-5">
            {ur ? "آپ کے سوال، واضح جواب۔" : "Frequently Asked Questions"}
          </h2>
          <p className="mt-5 text-sm leading-7 text-muted">
            {ur
              ? "داخلے سے پہلے جو جاننا ضروری ہے۔ مزید سوالات کے لیے ہم سے رابطہ کریں۔"
              : "Everything starts with a conversation. Here are answers to a few questions you may have."}
          </p>
          <div className="mt-7 flex items-center gap-4 rounded-2xl border border-forest/5 bg-[#edf3f0] p-5">
            <CircleHelp size={30} className="shrink-0 text-[#a28330]" />
            <div>
              <h3 className="text-sm font-bold">
                {ur ? "سپورٹ اور شیڈول" : "Support & scheduling"}
              </h3>
              <p className="mt-2 text-xs leading-6 text-muted">
                {ur
                  ? "کلاس کے اوقات باہمی مشاورت سے۔ پاکستان (UTC+5)۔"
                  : "Lesson times by arrangement. Pakistan (UTC+5)."}
              </p>
            </div>
          </div>
        </div>
        <FAQList locale={locale} />
      </div>
    </section>
  );
}
