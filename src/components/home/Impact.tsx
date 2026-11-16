import Section from "../Section";
import Heading from "../Heading";
export default function Impact({ locale }: { locale: string }) {
  const ur = locale === "ur";
  const items = ur
    ? [
        ["01", "توجہ کا مرکز", "ہر سبق میں طالب علم کی ضروریات مقدم۔"],
        ["02", "تدریسی زبانیں", "اردو یا انگریزی میں سیکھنے کی درخواست کریں۔"],
        ["04", "سیکھنے کے راستے", "قاعدہ، ناظرہ، حفظ اور اسلامی تعلیمات۔"],
        ["∞", "زندگی بھر کا تعلق", "قرآن کی طرف ہر چھوٹا قدم قیمتی ہے۔"],
      ]
    : [
        [
          "01",
          "Learner at the center",
          "Individual needs guide every learning conversation.",
        ],
        ["02", "Learning languages", "Request instruction in English or Urdu."],
        [
          "04",
          "Core learning paths",
          "Foundations, reading, memorization, and Islamic studies.",
        ],
        [
          "∞",
          "Lifelong possibilities",
          "Every small step toward the Quran matters.",
        ],
      ];
  return (
    <Section id="impact" dark variant={2}>
      <Heading
        id="impact"
        center
        title={
          ur ? "چھوٹے قدم۔ بامقصد تبدیلی۔" : "Small steps. Meaningful impact."
        }
        description={
          ur
            ? "ہماری توجہ محض اعداد پر نہیں، سیکھنے کے حقیقی تجربے پر ہے۔ تصدیق شدہ طلبہ کے اعداد جلد شامل کیے جائیں گے۔"
            : "Our focus is the quality of each learning journey. Verified student outreach figures will be shared when available."
        }
      />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(([number, title, body]) => (
          <article key={title} className="border-t border-gold/35 pt-8">
            <p className="font-display text-7xl text-gold" dir="ltr">
              {number}
            </p>
            <h3 className="mt-7 font-display text-xl">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-white/60">{body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
