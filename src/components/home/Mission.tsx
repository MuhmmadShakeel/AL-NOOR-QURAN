import Section from "../Section";
import Heading from "../Heading";
import Media from "../Media";
import Button from "../Button";
export default function Mission({ locale }: { locale: string }) {
  const ur = locale === "ur";
  return (
    <Section id="mission" variant={1}>
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Media index={4} locale={locale} />
        <div>
          <Heading
            id="mission"
            title={
              ur
                ? "صرف پڑھنا نہیں، قرآن سے تعلق۔"
                : "More than reading. A relationship with the Quran."
            }
            description={
              ur
                ? "ہم چاہتے ہیں کہ قرآن کی تعلیم ہر گھر تک پہنچے۔ ادب، صبر اور مسلسل مشق کے ساتھ ہر طالب علم کو آگے بڑھنے کا موقع ملے۔"
                : "We believe Quran learning should feel accessible, thoughtful, and deeply personal. Our approach brings patience, purposeful practice, and respect to every step of the journey."
            }
          />
          <div className="mb-9 grid grid-cols-2 gap-6 border-t border-forest/15 pt-7">
            <div>
              <h3 className="mb-2 font-display text-xl">
                {ur ? "ایمان سے رہنمائی" : "Rooted in faith"}
              </h3>
              <p className="text-sm leading-7 text-forest/65">
                {ur
                  ? "علم کے ساتھ اخلاق اور ادب۔"
                  : "Learning that nurtures character alongside understanding."}
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-display text-xl">
                {ur ? "آپ کے لیے آسان" : "Made for your life"}
              </h3>
              <p className="text-sm leading-7 text-forest/65">
                {ur
                  ? "آپ کے اہداف اور معمول کے مطابق تعلیم۔"
                  : "A learning path shaped around your goals and routine."}
              </p>
            </div>
          </div>
          <Button href="/about">{ur ? "ہماری کہانی" : "Get to know us"}</Button>
        </div>
      </div>
    </Section>
  );
}
