import Section from "../Section";
import Heading from "../Heading";
import Media from "../Media";
import Button from "../Button";
export default function Overview({ locale }: { locale: string }) {
  const ur = locale === "ur";
  return (
    <Section id="experience" dark variant={4}>
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <Heading
            id="experience"
            title={
              ur ? "آپ کا گھر۔ آپ کی درسگاہ۔" : "Your home. Your place to grow."
            }
            description={
              ur
                ? "آن لائن تعلیم کو سادہ رکھیں۔ ایک گفتگو سے شروعات کریں، اپنا راستہ چنیں، اور مستقل مشق کے ساتھ آگے بڑھیں۔"
                : "A simple digital learning experience that keeps the focus on what matters: your connection with the Quran."
            }
          />
          <ol className="mb-9 space-y-6">
            {(ur
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
                ]
            ).map(([title, body], i) => (
              <li key={title} className="flex gap-5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl">{title}</h3>
                  <p className="mt-1 text-sm leading-7 text-white/60">{body}</p>
                </div>
              </li>
            ))}
          </ol>
          <Button>{ur ? "پہلا قدم اٹھائیں" : "Take the first step"}</Button>
        </div>
        <Media index={8} locale={locale} />
      </div>
    </Section>
  );
}
