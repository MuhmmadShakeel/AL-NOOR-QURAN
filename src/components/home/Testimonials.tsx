import { Quote, BookOpen } from "lucide-react";
import Section from "../Section";
export default function Testimonials({ locale }: { locale: string }) {
  const ur = locale === "ur";
  const quotes = ur
    ? [
        "ایک پُرسکون جگہ جہاں بچہ اعتماد سے سوال پوچھ سکے۔",
        "ایسے اسباق جو روزمرہ زندگی کا حصہ بن سکیں۔",
        "ہر سبق میں مقصد اور اگلا قدم واضح ہو۔",
      ]
    : [
        "A patient space where a child can ask questions and grow in confidence.",
        "A learning routine that feels like a natural part of everyday life.",
        "A clear purpose for every lesson, and a thoughtful next step.",
      ];
  return (
    <Section id="testimonials">
      <div className="mb-10 text-center">
        <span className="eyebrow">
          {ur ? "سیکھنے کا سفر" : "Learning aspirations"}
        </span>
        <h2 id="testimonials-title" className="section-title mt-4">
          {ur ? "سیکھنے والوں کی آواز۔" : "The heart of a learning journey."}
        </h2>
        <p className="mx-auto mt-4 max-w-[620px] text-xs leading-6 text-muted">
          {ur
            ? "یہ نمونہ آراء کا ڈیزائن ہے، حقیقی طلبہ کے تبصرے نہیں۔ تصدیق شدہ اور اجازت یافتہ آراء یہاں شامل کی جائیں گی۔"
            : "These are illustrative learning aspirations, not verified student testimonials. Approved reviews will appear here."}
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {quotes.map((q, i) => (
          <article
            key={q}
            className="overflow-hidden rounded-xl border border-forest/10 bg-white"
          >
            <div className="flex aspect-[1.9] items-center justify-center bg-[#e7efe7]">
              <div className="rounded-full border-[10px] border-white/40 bg-forest p-5 text-gold">
                <BookOpen size={31} />
              </div>
            </div>
            <div className="p-6">
              <span className="eyebrow eyebrow-gold">
                {ur ? "نمونہ تبصرہ" : "Illustrative story"} 0{i + 1}
              </span>
              <Quote className="mb-3 mt-5 text-gold" size={21} />
              <blockquote className="text-sm font-semibold leading-7">
                {q}
              </blockquote>
              <p className="mt-5 border-t border-forest/10 pt-4 text-[10px] text-muted">
                {ur ? "اشاعت کی تصدیق باقی" : "Awaiting verified reviews"}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
