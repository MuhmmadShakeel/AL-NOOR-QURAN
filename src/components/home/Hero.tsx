import Image from "next/image";
import { BookOpen, GraduationCap, Globe2 } from "lucide-react";
import Button from "../Button";
export default function Hero({ locale }: { locale: string }) {
  const ur = locale === "ur";
  return (
    <section
      className="px-5 pb-16 pt-12 sm:px-8 lg:pb-20 lg:pt-20"
      aria-labelledby="welcome-title"
    >
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[1fr_.95fr] lg:gap-20">
        <div>
          <span className="eyebrow">
            <span className="size-1.5 rounded-full bg-forest/60" />
            {ur ? "النور قرآن اکیڈمی" : "Al Noor Quran Academy"}
          </span>
          <p className="mb-3 mt-7 text-[10px] font-bold uppercase tracking-[1.4px] text-[#a78232]">
            {ur
              ? "ذاتی توجہ • اردو اور انگریزی • آن لائن تعلیم"
              : "Personal guidance. English & Urdu. Learn from home."}
          </p>
          <h1 id="welcome-title" className="hero-title">
            {ur
              ? "قرآن سے جڑیں، پائیں دل کا سکون۔"
              : "Learn the Quran. Find a deeper connection."}
          </h1>
          <p className="mt-6 max-w-[470px] text-sm leading-7 text-muted">
            {ur
              ? "النور قرآن اکیڈمی کے ساتھ قرآن سیکھنے کا بامقصد سفر۔ ذاتی رہنمائی، آسان اسباق، اور آپ کے گھر کا سکون۔"
              : "A meaningful journey, one ayah at a time. Discover personal Quran learning with Al Noor Quran Academy, from the comfort of your home."}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button>
              {ur ? "آزمائشی کلاس حاصل کریں" : "Begin your free trial"}
            </Button>
            <Button href="/services" outline>
              {ur ? "کورسز دیکھیں" : "View courses"}
            </Button>
          </div>
          <div className="mt-7 flex items-center gap-3">
            <div className="flex -space-x-2 rtl:space-x-reverse">
              {[BookOpen, GraduationCap, Globe2].map((Icon, i) => (
                <span
                  key={i}
                  className="flex size-8 items-center justify-center rounded-full border-2 border-paper bg-[#e5eee7] text-forest"
                >
                  <Icon size={12} />
                </span>
              ))}
            </div>
            <span className="text-[9px] font-semibold uppercase tracking-wider text-muted">
              {ur
                ? "اخلاص کے ساتھ سیکھیں۔ مقصد کے ساتھ آگے بڑھیں۔"
                : "Learn with sincerity. Grow with purpose."}
            </span>
          </div>
        </div>
        <div className="framed-media bg-[#eef1e8]">
          <Image
            src="/media/read-q.jpeg"
            alt={
              ur
                ? "النور قرآن اکیڈمی کا اصل تعلیمی پوسٹر"
                : "Al Noor Quran Academy original Quran learning artwork"
            }
            width={1570}
            height={1600}
            priority
            className="max-h-[510px] w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
