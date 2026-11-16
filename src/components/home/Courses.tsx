"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { programs } from "@/lib/programs";
import CourseCard from "../CourseCard";
import Section from "../Section";
export default function Courses({ locale }: { locale: string }) {
  const ur = locale === "ur";
  const track = useRef<HTMLDivElement>(null);
  function move(direction: number) {
    if (!track.current) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    track.current.scrollBy({
      left: direction * (ur ? -1 : 1) * (track.current.clientWidth + 20),
      behavior: reduce ? "instant" : "smooth",
    });
  }
  return (
    <Section id="courses" className="bg-white">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
        <div className="max-w-[690px]">
          <h2 id="courses-title" className="section-title">
            {ur
              ? "قرآن اور اسلامی تعلیمات کے کورسز"
              : "Quran & Islamic Studies Courses"}
          </h2>
          <p className="mt-4 text-xs leading-6 text-muted">
            {ur
              ? "مدنی قاعدہ سے تلاوت اور حفظ تک۔ اپنی استعداد اور مقصد کے مطابق کورس دریافت کریں۔"
              : "From your first Arabic letter to thoughtful recitation and memorization. Discover a starting point that meets you where you are."}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/services"
            className="me-2 flex items-center gap-2 text-[10px] font-bold text-[#987526]"
          >
            {ur ? "تمام کورسز" : "Browse all courses"}
            <ArrowUpRight size={13} />
          </Link>
          <button
            onClick={() => move(-1)}
            className="rounded-full border border-forest/15 p-2"
            aria-label={ur ? "پچھلے کورسز" : "Previous courses"}
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => move(1)}
            className="rounded-full border border-forest/15 p-2"
            aria-label={ur ? "اگلے کورسز" : "Next courses"}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
      <div
        ref={track}
        className="course-carousel"
        aria-label={ur ? "کورسز" : "Available courses"}
      >
        {programs.map((p) => (
          <CourseCard key={p.id} program={p} locale={locale} />
        ))}
      </div>
    </Section>
  );
}
