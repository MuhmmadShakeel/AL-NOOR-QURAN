"use client";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { Menu, X, Globe2 } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { txt } from "@/lib/content";
import Logo from "./Logo";
const links = [
  { href: "/", label: ["Home", "صفحۂ اول"] },
  { href: "/services", label: ["Courses", "کورسز"] },
  { href: "/about", label: ["About", "تعارف"] },
  { href: "/contact", label: ["Contact", "رابطہ"] },
] as const;
export default function Navbar() {
  const locale = useLocale();
  const path = usePathname();
  const ur = locale === "ur";
  const [open, setOpen] = useState(false);
  const [suffix, setSuffix] = useState("");
  useEffect(() => {
    const sync = () => setSuffix(window.location.search + window.location.hash);
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [path]);
  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <div className="mx-auto flex h-[76px] max-w-[1320px] items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href="/"
          aria-label={
            ur ? "النور قرآن اکیڈمی، صفحۂ اول" : "Al Noor Quran Academy home"
          }
          onClick={() => setOpen(false)}
        >
          <Logo locale={locale} />
        </Link>
        <nav
          aria-label={ur ? "مرکزی نیویگیشن" : "Main navigation"}
          className="hidden items-center gap-8 md:flex"
        >
          {links.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={path === n.href ? "page" : undefined}
              className={"nav-link " + (path === n.href ? "nav-active" : "")}
            >
              {txt(n.label, locale)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href={path + suffix}
            locale={ur ? "en" : "ur"}
            className="flex items-center gap-1.5 text-xs font-semibold"
            aria-label={ur ? "Switch to English" : "اردو میں پڑھیں"}
          >
            <Globe2 size={14} />
            {ur ? "EN" : "اردو"}
          </Link>
          <Link
            href="/contact#inquiry"
            className="header-trial hidden sm:inline-flex"
          >
            {ur ? "آزمائشی کلاس" : "Book free trial"}
          </Link>
          <button
            className="p-2 md:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={
              ur
                ? open
                  ? "مینو بند کریں"
                  : "مینو کھولیں"
                : open
                  ? "Close menu"
                  : "Open menu"
            }
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          aria-label={ur ? "موبائل نیویگیشن" : "Mobile navigation"}
          className="border-t border-forest/10 bg-white px-5 py-4 md:hidden"
        >
          {links.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              aria-current={path === n.href ? "page" : undefined}
              className="block rounded-lg px-3 py-3 text-sm font-bold hover:bg-forest/5"
            >
              {txt(n.label, locale)}
            </Link>
          ))}
          <Link
            href="/contact#inquiry"
            onClick={() => setOpen(false)}
            className="header-trial mt-3 inline-flex"
          >
            {ur ? "آزمائشی کلاس" : "Book free trial"}
          </Link>
        </nav>
      )}
    </header>
  );
}
