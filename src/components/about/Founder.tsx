import Section from "../Section";
import Heading from "../Heading";
import { Quote } from "lucide-react";
export default function Founder({ locale }: { locale: string }) {
  const ur = locale === "ur";
  return (
    <Section id="founder" dark variant={2}>
      <Heading
        id="founder"
        title={ur ? "قیادت کا پیغام۔" : "A message from the academy."}
      />
      <div className="rounded-3xl border border-gold/35 p-8 sm:p-14 lg:p-20">
        <Quote size={44} strokeWidth={1} className="mb-7 text-gold" />
        <p className="max-w-4xl font-display text-3xl leading-relaxed sm:text-4xl">
          {ur
            ? "ہماری تعلیمی سوچ سادہ ہے: ہر طالب علم کو عزت، صبر اور واضح رہنمائی ملے، تاکہ قرآن سے اس کا تعلق مضبوط ہو۔"
            : "Our educational philosophy is simple: every learner deserves respect, patience, and clear guidance as they build a meaningful connection with the Quran."}
        </p>
        <div className="mt-10 border-t border-white/20 pt-7">
          <p className="text-gold">
            {ur ? "النور قرآن اکیڈمی" : "Al Noor Quran Academy"}
          </p>
          <p className="mt-2 text-sm leading-7 text-white/55">
            {ur
              ? "اکیڈمی کا تعلیمی عزم۔ بانی کا نام، تعارف اور منظور شدہ پیغام تصدیق کے بعد شامل کیے جائیں گے۔"
              : "Academy learning commitment. A named founder profile and approved personal message will be added after confirmation."}
          </p>
        </div>
      </div>
    </Section>
  );
}
