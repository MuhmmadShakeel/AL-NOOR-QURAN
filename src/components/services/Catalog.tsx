"use client";
import { useState } from "react";
import { programs } from "@/lib/programs";
import CourseCard from "../CourseCard";
export default function Catalog({ locale }: { locale: string }) {
  const ur = locale === "ur";
  const [filter, setFilter] = useState("all");
  const categories = [
    ["all", ur ? "تمام کورسز" : "All programs"],
    ["quran", ur ? "قرآن کی تعلیم" : "Quran studies"],
    ["islamic", ur ? "اسلامی تعلیمات" : "Islamic studies"],
    ["personal", ur ? "انفرادی کلاس" : "One-to-one learning"],
  ];
  return (
    <section
      id="course-list"
      className="bg-white px-5 py-16 sm:px-8 lg:py-20"
      aria-labelledby="course-list-title"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto mb-8 max-w-[660px] text-center">
          <span className="eyebrow eyebrow-gold">
            {ur ? "ہمارے کورسز" : "Explore courses"}
          </span>
          <h2 id="course-list-title" className="section-title mt-4">
            {ur ? "ہمارے آن لائن کورسز" : "Our Online Quran Courses"}
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            {ur
              ? "اپنی استعداد اور مقصد کے مطابق کورس دریافت کریں۔"
              : "Discover a starting point that meets you where you are."}
          </p>
        </div>
        <div
          className="mb-10 flex flex-wrap justify-center gap-2"
          aria-label={ur ? "کورس کی اقسام" : "Course categories"}
        >
          {categories.map(([id, title]) => (
            <button
              key={id}
              onClick={() => setFilter(id)}
              className="filter-chip"
              aria-pressed={filter === id}
            >
              {title}
            </button>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs
            .filter((p) => filter === "all" || p.category === filter)
            .map((p) => (
              <CourseCard key={p.id} program={p} locale={locale} />
            ))}
        </div>
      </div>
    </section>
  );
}
