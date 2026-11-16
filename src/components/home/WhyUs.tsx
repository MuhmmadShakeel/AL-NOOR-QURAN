import {
  BookOpen,
  Clock3,
  Heart,
  Globe2,
  UserRound,
  Check,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Section from "../Section";
import Button from "../Button";
export default function WhyUs({ locale }: { locale: string }) {
  const ur = locale === "ur";
  return (
    <Section id="why-us" className="!pt-10">
      <div className="mx-auto mb-11 max-w-[650px] text-center">
        <span className="eyebrow eyebrow-gold">
          {ur ? "ہمیں کیوں منتخب کریں" : "Why choose us"}
        </span>
        <h2 id="why-us-title" className="section-title mt-4">
          {ur ? "سیکھنے کا ایک بہتر احساس۔" : "A thoughtful way to learn."}
        </h2>
        <p className="mt-4 text-sm leading-7 text-muted">
          {ur
            ? "مضبوط بنیاد، پُرسکون ماحول، اور ہر قدم پر توجہ۔"
            : "The right foundation. A welcoming environment. Attention to the little things that help you grow."}
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        <article className="bento-card bento-dark grid items-center gap-6 md:col-span-2 sm:grid-cols-[1.1fr_.9fr]">
          <div>
            <span className="eyebrow border-white/10 bg-white/5 text-gold">
              {ur ? "انفرادی رہنمائی" : "1-on-1 focus"}
            </span>
            <h3 className="mb-4 mt-5">
              {ur
                ? "آپ کے مقاصد اہم ہیں۔"
                : "One learner. One thoughtful learning path."}
            </h3>
            <p>
              {ur
                ? "اپنی استعداد اور مقصد کے مطابق رہنمائی۔"
                : "Discuss a learning path suited to your level and aspirations."}
            </p>
          </div>
          <div className="rounded-xl border border-white/5 bg-[#0c5443] p-5">
            <div className="flex items-center justify-between text-[8px] font-bold uppercase tracking-wider text-white/55">
              <span>{ur ? "رہنمائی میں مشق" : "Guided practice"}</span>
              <BookOpen size={13} className="text-gold" />
            </div>
            <div className="mb-3 mt-6 flex justify-between text-[9px]">
              <span className="text-white/60">
                {ur ? "سبق اور دہرائی" : "Learning & revision"}
              </span>
              <Check size={12} className="text-gold" />
            </div>
            <div className="h-1 rounded bg-white/10">
              <div className="h-1 w-3/4 rounded bg-gold" />
            </div>
            <div className="mt-5 flex gap-2" aria-hidden="true">
              {"ا ب ت".split(" ").map((x) => (
                <span
                  key={x}
                  className="flex size-8 items-center justify-center rounded bg-forest text-gold"
                >
                  {x}
                </span>
              ))}
            </div>
            <p className="mt-4 rounded-lg bg-forest/50 p-3 !text-[10px]">
              {ur
                ? "دہرائی اور مسلسل مشق سے مضبوط بنیاد۔"
                : "Strengthen understanding through repetition and guided practice."}
            </p>
          </div>
        </article>
        <article className="bento-card">
          <span className="icon-tile">
            <Heart size={21} />
          </span>
          <h3 className="mb-3 mt-5">
            {ur ? "صبر سے رہنمائی" : "Patient guidance"}
          </h3>
          <p>
            {ur
              ? "سوال پوچھنے اور اعتماد بڑھانے کی حوصلہ افزائی۔"
              : "A welcoming space to ask questions and develop confidence."}
          </p>
          <div className="mt-6 flex items-center gap-2 text-[9px] font-bold text-forest/60">
            <UserRound size={15} />
            {ur ? "ذاتی توجہ" : "Personal attention"}
          </div>
        </article>
        <article className="bento-card">
          <span className="icon-tile">
            <Clock3 size={21} />
          </span>
          <h3 className="mb-3 mt-5">
            {ur ? "آپ کا معمول" : "A routine that fits"}
          </h3>
          <p>
            {ur
              ? "داخلے سے پہلے موزوں اوقات پر گفتگو کریں۔"
              : "Discuss suitable lesson times before you enroll."}
          </p>
          <div className="mt-6 grid grid-cols-5 gap-1" aria-hidden="true">
            {[1, 2, 3, 4, 5].map((n) => (
              <span
                key={n}
                className="h-5 rounded bg-forest/5 text-center text-[8px] leading-5 text-forest/50"
              >
                0{n}
              </span>
            ))}
          </div>
        </article>
        <article className="bento-card grid items-center gap-7 sm:grid-cols-[1fr_.7fr] md:col-span-2">
          <div>
            <span className="eyebrow eyebrow-gold">
              {ur ? "عملی مشق" : "Practice with purpose"}
            </span>
            <h3 className="mb-3 mt-4">
              {ur ? "واضح بنیاد" : "A clear foundation"}
            </h3>
            <p>
              {ur
                ? "عربی حروف سے درست تلاوت تک مرحلہ وار پیش رفت۔"
                : "Build from Arabic letters toward confident, thoughtful recitation."}
            </p>
          </div>
          <div className="rounded-xl bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-[10px] font-bold">
              <BookOpen size={15} />
              {ur ? "آپ کا تعلیمی سفر" : "Your learning journey"}
            </div>
            {[
              [ur ? "بنیاد" : "Foundation", 100],
              [ur ? "مشق" : "Practice", 75],
              [ur ? "دہرائی" : "Revision", 55],
            ].map(([t, w]) => (
              <div key={t} className="mt-4">
                <div className="mb-2 text-[9px] text-muted">{t}</div>
                <div className="h-1 rounded bg-forest/5">
                  <div
                    className="h-1 rounded bg-gold"
                    style={{ width: w + "%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </article>
        <article className="bento-card grid items-center gap-6 sm:grid-cols-[1.2fr_.8fr] md:col-span-2">
          <div>
            <span className="eyebrow">
              {ur ? "گھر سے تعلیم" : "Learn from home"}
            </span>
            <h3 className="mb-3 mt-4">
              {ur
                ? "آپ کا گھر۔ آپ کی درسگاہ۔"
                : "Your home. Your place to grow."}
            </h3>
            <p>
              {ur
                ? "اپنے مانوس ماحول میں سیکھنے کی سہولت۔"
                : "Make learning part of life in a familiar environment."}
            </p>
          </div>
          <div className="rounded-xl border border-gold/30 bg-white p-5 text-center">
            <Globe2 className="mx-auto mb-3 text-forest/60" size={31} />
            <span className="text-[10px] font-bold">
              {ur ? "اردو اور انگریزی" : "English & Urdu"}
            </span>
            <div className="mx-auto mt-3 h-px w-12 bg-gold" />
            <p className="mt-3 !text-[10px]">
              {ur ? "ذاتی رہنمائی" : "Personal guidance"}
            </p>
          </div>
        </article>
        <article className="bento-card !bg-[#9b791d] !text-white dark-panel !shadow-none">
          <span className="eyebrow border-white/15 bg-white/10 text-white">
            <Sparkles size={10} />
            {ur ? "آزمائشی کلاس" : "Free trial"}
          </span>
          <h3 className="mb-3 mt-5">
            {ur ? "ایک خوبصورت آغاز، آج سے۔" : "A meaningful beginning."}
          </h3>
          <p className="!text-white/75">
            {ur
              ? "قرآن سیکھنے کے سفر کا پہلا قدم آج اٹھائیں۔"
              : "Speak with our team and request your introductory Quran lesson today."}
          </p>
          <div className="mt-6">
            <Button>{ur ? "آزمائشی کلاس" : "Book free trial"}</Button>
          </div>
        </article>
      </div>
    </Section>
  );
}
