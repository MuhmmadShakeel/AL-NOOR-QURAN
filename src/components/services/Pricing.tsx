import Section from "../Section";
import Heading from "../Heading";
import Button from "../Button";
import { Check } from "lucide-react";
export default function Pricing({ locale }: { locale: string }) {
  const ur = locale === "ur";
  return (
    <Section id="plans" variant={2}>
      <Heading
        id="plans"
        center
        title={
          ur
            ? "اپنے سفر کے لیے مناسب منصوبہ۔"
            : "A learning plan that fits your life."
        }
        description={
          ur
            ? "یہ مجوزہ شیڈول ہیں۔ فیس، کلاس کا دورانیہ اور دستیابی داخلے سے پہلے اکیڈمی سے طے کریں۔"
            : "Explore suggested learning structures. Fees, lesson duration, and availability are confirmed directly with the academy before enrollment."
        }
      />
      <div className="grid gap-6 md:grid-cols-3">
        {(ur
          ? [
              [
                "بنیاد",
                "ابتدائی طلبہ کے لیے",
                "حروف کی پہچان",
                "قاعدہ کی مشق",
                "آسان اہداف",
              ],
              [
                "مسلسل پیش رفت",
                "باقاعدہ مشق کے لیے",
                "تلاوت پر توجہ",
                "سبق اور دہرائی",
                "ذاتی رہنمائی",
              ],
              [
                "گہرا مطالعہ",
                "بڑے اہداف کے لیے",
                "حفظ کی منصوبہ بندی",
                "مضبوط دہرائی",
                "ذاتی شیڈول",
              ],
            ]
          : [
              [
                "Foundation",
                "For a confident beginning",
                "Letter recognition",
                "Qaida practice",
                "Achievable first goals",
              ],
              [
                "Steady progress",
                "For a consistent routine",
                "Recitation focus",
                "Learning and revision",
                "Individual guidance",
              ],
              [
                "Focused study",
                "For a deeper commitment",
                "Hifz planning",
                "Structured revision",
                "A personalized schedule",
              ],
            ]
        ).map(([title, sub, ...features], i) => (
          <article
            key={title}
            className={`flex flex-col rounded-2xl border p-8 ${i === 1 ? "border-forest bg-forest text-white" : "border-forest/20"}`}
          >
            <h3 className="font-display text-3xl">{title}</h3>
            <p className="mt-3 text-sm opacity-60">{sub}</p>
            <p className="mb-7 mt-9 text-2xl text-gold">
              {ur ? "فیس معلوم کریں" : "Let’s discuss fees"}
            </p>
            <ul className="mb-9 space-y-4">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <Check size={16} className="text-gold" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <Button href={`/contact?program=plan-${i + 1}#inquiry`}>
                {ur ? "منصوبہ دریافت کریں" : "Discuss this plan"}
              </Button>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
