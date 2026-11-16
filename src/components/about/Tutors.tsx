import { UserRound, Globe2, Heart } from "lucide-react";
import Section from "../Section";
export default function Tutors({ locale }: { locale: string }) {
  const ur = locale === "ur";
  const cards = [
    {
      icon: UserRound,
      title: ur ? "قرآن کی تدریس" : "Quran teaching expertise",
      body: ur
        ? "استاد کی تجوید، ناظرہ اور حفظ کی مہارت کے بارے میں پوچھیں۔"
        : "Ask about experience in Tajweed, Nazra, and Hifz.",
    },
    {
      icon: Heart,
      title: ur
        ? "بچوں کے لیے موزوں رہنمائی"
        : "An approach suited to children",
      body: ur
        ? "اپنے بچے کی عمر اور تعلیمی ضروریات بتائیں۔"
        : "Discuss your child’s age, confidence, and learning needs.",
    },
    {
      icon: Globe2,
      title: ur ? "صحیح انتخاب" : "A comfortable match",
      body: ur
        ? "زبان اور اوقات کی دستیابی پہلے معلوم کریں۔"
        : "Confirm language preferences and schedule availability.",
    },
  ];
  return (
    <Section id="tutors" className="bg-white">
      <div className="mb-9 max-w-[720px]">
        <span className="eyebrow eyebrow-gold">
          {ur ? "ذاتی رہنمائی" : "Personal guidance"}
        </span>
        <h2 id="tutors-title" className="section-title mt-4">
          {ur
            ? "اچھے استاد سے، بہتر آغاز۔"
            : "Good guidance makes a difference."}
        </h2>
        <p className="mt-4 text-sm leading-7 text-muted">
          {ur
            ? "اپنے استاد سے ملیں، طریقۂ تدریس سمجھیں اور داخلے سے پہلے قابلیت کے بارے میں پوچھیں۔ تصدیق شدہ اساتذہ کے تعارف جلد شامل کیے جائیں گے۔"
            : "Meet your tutor, understand their approach, and ask about qualifications before enrolling. Verified tutor profiles and certification details are awaiting publication."}
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {cards.map(({ icon: Icon, title, body }) => (
          <article key={title} className="curriculum-card">
            <span className="icon-tile">
              <Icon size={21} />
            </span>
            <h3 className="mb-3 mt-5 text-base font-bold">{title}</h3>
            <p className="text-xs leading-6 text-muted">{body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
