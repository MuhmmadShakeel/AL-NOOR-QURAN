import Section from "../Section";
import ContactForm from "../contact/ContactForm";
export default function Intake({ locale }: { locale: string }) {
  const ur = locale === "ur";
  const steps = ur
    ? [
        ["ہم سے بات کریں", "اپنے اہداف، زبان اور اوقات بتائیں۔"],
        ["تعارفی کلاس لیں", "طریقۂ تدریس سمجھیں اور سوال پوچھیں۔"],
        ["اپنی رفتار سے بڑھیں", "مشق اور دہرائی کو معمول بنائیں۔"],
      ]
    : [
        [
          "Let’s get acquainted",
          "Tell us your goals, language, and available times.",
        ],
        [
          "Try an introductory lesson",
          "Meet your learning approach and ask your questions.",
        ],
        [
          "Build a meaningful routine",
          "Make room for steady practice and revision.",
        ],
      ];
  return (
    <Section id="begin" className="!py-8">
      <div className="dark-panel grid gap-10 p-7 sm:p-10 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:p-12">
        <div>
          <span className="eyebrow border-white/10 bg-white/5 text-gold">
            {ur ? "آسان آغاز" : "A simple beginning"}
          </span>
          <h2 id="begin-title" className="section-title mt-5">
            {ur
              ? "آپ کا اگلا باب، ایک آیت سے۔"
              : "Your next chapter starts with one ayah."}
          </h2>
          <p className="mt-4 text-xs leading-6 text-white/60">
            {ur
              ? "بہترین وقت کا انتظار نہ کریں۔ قرآن سیکھنے کے سفر کا پہلا قدم آج اٹھائیں۔"
              : "You don’t need to know where every step will lead. Just begin."}
          </p>
          <ol className="mt-8 space-y-7">
            {steps.map(([title, body], i) => (
              <li key={title} className="flex gap-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-gold">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-sm font-bold">{title}</h3>
                  <p className="mt-2 text-xs leading-6 text-white/60">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <ContactForm locale={locale} compact />
      </div>
    </Section>
  );
}
