import { BookOpen, Heart, UserRound, Globe2, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { programs } from "@/lib/programs";
import { txt } from "@/lib/content";
import Section from "../Section";
const icons = [BookOpen, Globe2, BookOpen, Heart, UserRound];
export default function Curriculum({ locale }: { locale: string }) {
  const ur = locale === "ur";
  return (
    <Section id="curriculum" className="!pt-8">
      <div className="mb-9 flex items-end justify-between gap-6">
        <div>
          <h2 id="curriculum-title" className="section-title">
            {ur
              ? "واضح طریقہ۔ بامقصد پیش رفت۔"
              : "A clear method. A purposeful journey."}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
            {ur
              ? "پہلے بنیاد سمجھیں، پھر استاد کی رہنمائی سے مشق کریں، اور دہرائی سے مضبوط بنائیں۔"
              : "Understand the foundations, practice with guidance, and strengthen learning through revision."}
          </p>
        </div>
        <Link
          href="/services"
          className="hidden whitespace-nowrap text-[10px] font-bold text-[#987526] sm:block"
        >
          {ur ? "تمام کورسز" : "All courses"} ↗
        </Link>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {programs.map((p, i) => {
          const Icon = icons[i];
          return (
            <Link
              key={p.id}
              href={"/services#" + p.id}
              className={
                "curriculum-card group flex flex-col " +
                (i === 0 ? "md:col-span-2 !bg-forest !text-white" : "")
              }
            >
              <Icon
                size={27}
                className={i === 0 ? "text-gold" : "text-forest/75"}
              />
              <h3
                className={
                  "mb-3 mt-5 text-lg font-bold " + (i === 0 ? "text-gold" : "")
                }
              >
                {txt(p.title, locale)}
              </h3>
              <p
                className={
                  "max-w-[460px] text-xs leading-6 " +
                  (i === 0 ? "text-white/60" : "text-muted")
                }
              >
                {txt(p.description, locale)}
              </p>
              <span className="mt-auto flex items-center justify-between pt-6 text-[9px] font-bold uppercase tracking-wider text-[#a1833a]">
                {ur ? "کورس دریافت کریں" : "Explore program"}
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1 rtl:rotate-180"
                />
              </span>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
