import { Target, Eye, BookOpen, Heart, ShieldCheck } from "lucide-react";
import Section from "../Section";
export default function Values({ locale }: { locale: string }) {
  const ur = locale === "ur";
  const cards = [
    {
      icon: BookOpen,
      title: ur ? "واضح بنیاد" : "A clear foundation",
      body: ur
        ? "عربی حروف سے درست تلاوت تک مرحلہ وار پیش رفت۔"
        : "Build from Arabic letters toward confident, thoughtful recitation.",
    },
    {
      icon: Heart,
      title: ur ? "صبر سے رہنمائی" : "Patient guidance",
      body: ur
        ? "سوال پوچھنے اور اعتماد بڑھانے کی حوصلہ افزائی۔"
        : "A welcoming space to ask questions and develop confidence.",
    },
    {
      icon: ShieldCheck,
      title: ur ? "عملی مشق" : "Practice with purpose",
      body: ur
        ? "دہرائی اور مسلسل مشق سے مضبوط بنیاد۔"
        : "Strengthen understanding through repetition and guided practice.",
    },
  ];
  return (
    <Section id="values">
      <div className="mx-auto mb-11 max-w-[740px] text-center">
        <span className="eyebrow">
          {ur ? "ہمارا تعلیمی عزم" : "Our educational commitment"}
        </span>
        <h2 id="values-title" className="section-title mt-5">
          {ur
            ? "ایمان سے رہنمائی۔ مقصد کے ساتھ ترقی۔"
            : "Rooted in faith. Inspired by learning."}
        </h2>
        <p className="mt-4 text-sm leading-7 text-muted">
          {ur
            ? "قرآن کی تعلیم کو ذاتی، بامقصد اور قابلِ رسائی بنانا۔"
            : "Making Quran education personal, purposeful, and accessible."}
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <article className="rounded-[26px] border border-forest/10 border-s-2 border-s-gold bg-white p-8 sm:p-10">
          <span className="icon-tile !text-[#ab8836]">
            <Target size={23} />
          </span>
          <h3 className="mb-4 mt-5 text-xl font-bold">
            {ur ? "ہمارا مقصد" : "Our mission"}
          </h3>
          <p className="text-sm leading-7 text-muted">
            {ur
              ? "ہم چاہتے ہیں کہ قرآن کی تعلیم ہر گھر تک پہنچے۔ ادب، صبر اور مسلسل مشق کے ساتھ ہر طالب علم کو آگے بڑھنے کا موقع ملے۔"
              : "We believe Quran learning should feel accessible, thoughtful, and deeply personal. Our approach brings patience, purposeful practice, and respect to every step of the journey."}
          </p>
        </article>
        <article className="dark-panel p-8 sm:p-10">
          <span className="icon-tile !bg-white/10 !text-gold">
            <Eye size={23} />
          </span>
          <h3 className="mb-4 mt-5 text-xl font-bold text-gold">
            {ur ? "ہمارا تعلیمی عزم" : "Our learning commitment"}
          </h3>
          <p className="text-sm leading-7 text-white/65">
            {ur
              ? "ہماری تعلیمی سوچ سادہ ہے: ہر طالب علم کو عزت، صبر اور واضح رہنمائی ملے، تاکہ قرآن سے اس کا تعلق مضبوط ہو۔"
              : "Our educational philosophy is simple: every learner deserves respect, patience, and clear guidance as they build a meaningful connection with the Quran."}
          </p>
        </article>
      </div>
      <div className="mt-5 grid gap-5 md:grid-cols-3">
        {cards.map(({ icon: Icon, title, body }) => (
          <article
            key={title}
            className="rounded-[24px] border border-forest/10 border-t-2 border-t-gold bg-white p-7"
          >
            <span className="icon-tile">
              <Icon size={20} />
            </span>
            <h3 className="mb-3 mt-5 text-lg font-bold">{title}</h3>
            <p className="text-xs leading-6 text-muted">{body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
