import Section from "../Section";
import Heading from "../Heading";
import FeatureCard from "../FeatureCard";
import Button from "../Button";
export default function Methods({ locale }: { locale: string }) {
  const ur = locale === "ur";
  return (
    <Section id="methods" dark variant={4}>
      <Heading
        id="methods"
        center
        title={
          ur
            ? "واضح طریقہ۔ بامقصد پیش رفت۔"
            : "A clear method. A purposeful journey."
        }
        description={
          ur
            ? "پہلے بنیاد سمجھیں، پھر استاد کی رہنمائی سے مشق کریں، اور دہرائی سے مضبوط بنائیں۔ کسی بیرونی ادارے کی منظوری کا دعویٰ نہیں کیا گیا۔"
            : "Understand the foundations, practice with guidance, and strengthen learning through revision. No external accreditation is claimed without verification."
        }
      />
      <div className="grid gap-6 md:grid-cols-3">
        {(ur
          ? [
              ["بنیادی جائزہ", "طالب علم کی استعداد اور اہداف پر گفتگو۔"],
              ["رہنمائی میں مشق", "حروف، تلفظ اور تلاوت پر مرحلہ وار توجہ۔"],
              ["مستقل دہرائی", "مشق اور نظرثانی کے ذریعے علم کو پختہ کریں۔"],
            ]
          : [
              [
                "Understand the starting point",
                "Discuss the learner’s current level and goals.",
              ],
              [
                "Practice with guidance",
                "Work step by step on letters, pronunciation, and recitation.",
              ],
              [
                "Return and revise",
                "Make repetition and revision a lasting habit.",
              ],
            ]
        ).map(([title, description], index) => (
          <FeatureCard key={title} dark {...{ title, description, index }} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button>
          {ur ? "ہمارا طریقہ جانیے" : "Discuss our teaching approach"}
        </Button>
      </div>
    </Section>
  );
}
