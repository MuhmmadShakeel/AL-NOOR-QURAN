"use client";
import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { txt } from "@/lib/content";
import { programs } from "@/lib/programs";
import { Check } from "lucide-react";
export default function CourseCard({
  program,
  locale,
}: {
  program: (typeof programs)[number];
  locale: string;
}) {
  const ur = locale === "ur";
  const [expanded, setExpanded] = useState(false);
  return (
    <article id={program.id} className="course-card scroll-mt-24">
      <Image
        src={"/images/services/" + program.image + ".svg"}
        alt={txt(program.title, locale)}
        width={720}
        height={384}
        className="course-cover"
      />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-bold">{txt(program.title, locale)}</h3>
        <p className="mt-3 text-xs leading-6 text-muted">
          {txt(program.description, locale)}
        </p>
        {expanded && (
          <div id={program.id + "-outline"} className="mt-3 text-xs">
            <ul className="mt-3 space-y-2">
              {program.points.map((p) => (
                <li key={p[0]} className="flex items-center gap-2 text-muted">
                  <Check size={13} className="text-forest" />
                  {txt(p, locale)}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="mt-auto grid grid-cols-2 gap-2 pt-5">
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
            aria-controls={program.id + "-outline"}
            className="course-button hover:bg-forest/5"
          >
            {ur ? "مزید تفصیل" : "More details"}
          </button>
          <Link
            href={"/contact?program=" + program.id + "#inquiry"}
            className="course-button border-transparent bg-gold text-forest hover:brightness-95"
          >
            {ur ? "رابطہ کریں" : "Join now"}
          </Link>
        </div>
      </div>
    </article>
  );
}
