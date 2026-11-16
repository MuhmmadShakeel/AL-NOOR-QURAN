import Image from "next/image";
import { BookOpen, GraduationCap } from "lucide-react";
export default function PageHero({
  id,
  title,
  description,
  locale,
}: {
  id: string;
  title: string;
  description: string;
  locale: string;
  image?: number;
}) {
  const ur = locale === "ur";
  const about = id === "about";
  return (
    <section
      className="px-5 py-14 sm:px-8 lg:py-20"
      aria-labelledby={id + "-title"}
    >
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <span className="eyebrow eyebrow-gold">
            {about
              ? ur
                ? "ہماری اکیڈمی"
                : "About our academy"
              : ur
                ? "کورسز کی فہرست"
                : "Curriculum list"}
          </span>
          <h1 id={id + "-title"} className="hero-title mt-7">
            {title}
          </h1>
          <p className="mt-6 max-w-[490px] text-sm leading-7 text-muted">
            {description}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <span className="flex items-center gap-3 rounded-xl border border-forest/10 bg-white px-4 py-3 text-[9px] font-bold uppercase tracking-wider">
              <GraduationCap size={18} />
              {ur ? "ذاتی رہنمائی" : "Personal guidance"}
            </span>
            <span className="flex items-center gap-3 rounded-xl border border-forest/10 bg-white px-4 py-3 text-[9px] font-bold uppercase tracking-wider">
              <BookOpen size={18} />
              {ur ? "درست تلاوت" : "Thoughtful practice"}
            </span>
          </div>
        </div>
        <div className="relative">
          <div className="framed-media bg-white">
            <Image
              src={about ? "/media/quran.jpeg" : "/media/read-q.jpeg"}
              alt={
                ur
                  ? "النور قرآن اکیڈمی کا اصل تعلیمی پوسٹر"
                  : "Al Noor Quran Academy original Quran learning artwork"
              }
              width={1570}
              height={1600}
              priority
              className="max-h-[420px] w-full object-contain"
            />
          </div>
          {about && (
            <div className="absolute -bottom-5 start-0 rounded-xl border border-forest/5 bg-white px-7 py-5 shadow-lg sm:-start-6">
              <BookOpen className="mx-auto mb-3 text-gold" size={26} />
              <p className="text-sm font-bold">
                {ur
                  ? "علم جو دل میں اترے۔"
                  : "Knowledge that touches the heart."}
              </p>
              <p className="mt-2 text-center text-[10px] text-muted">
                {ur ? "النور قرآن اکیڈمی" : "Al Noor Quran Academy"}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
