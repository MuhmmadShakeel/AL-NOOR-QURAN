import { Facebook, Instagram, MessageCircle, ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { academy, txt } from "@/lib/content";
import { programs } from "@/lib/programs";
import Logo from "./Logo";
export default function Footer({ locale }: { locale: string }) {
  const ur = locale === "ur";
  return (
    <>
      <footer className="bg-forest px-5 pt-16 text-white sm:px-8 lg:pt-20">
        <div className="mx-auto grid max-w-[1200px] gap-10 pb-16 sm:grid-cols-2 lg:grid-cols-[1.25fr_.8fr_.9fr_1.1fr_1.3fr]">
          <div>
            <Logo locale={locale} />
            <p className="mt-6 max-w-[240px] text-xs leading-6 text-white/65">
              {ur
                ? "قرآن سے ایک ایسا تعلق جو زندگی کو روشن کر دے۔ اپنے گھر سے، اپنی رفتار کے مطابق علم کا سفر شروع کریں۔"
                : "A lifelong connection with the Quran. Thoughtful learning, personal guidance, and a little progress every day."}
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={academy.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="social-link"
              >
                <Facebook size={15} />
              </a>
              <a
                href={academy.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="social-link"
              >
                <Instagram size={15} />
              </a>
            </div>
          </div>
          <div>
            <h2 className="footer-label">{ur ? "اکیڈمی" : "Company"}</h2>
            <div className="footer-links">
              <Link href="/about">{ur ? "ہمارے بارے میں" : "About us"}</Link>
              <Link href="/services">{ur ? "ہمارے کورسز" : "Our courses"}</Link>
              <Link href="/#faqs">{ur ? "عام سوالات" : "FAQs"}</Link>
              <Link href="/contact">{ur ? "رابطہ" : "Contact"}</Link>
            </div>
          </div>
          <div>
            <h2 className="footer-label">{ur ? "رہنمائی" : "Support"}</h2>
            <div className="footer-links">
              <a
                href={"https://wa.me/" + academy.phone.slice(1)}
                target="_blank"
                rel="noreferrer"
              >
                {ur ? "واٹس ایپ" : "WhatsApp support"}
              </a>
              <a href={"mailto:" + academy.email}>
                {ur ? "ای میل کریں" : "Email us"}
              </a>
              <a href={"tel:" + academy.phone}>
                {ur ? "فون کریں" : "Call the academy"}
              </a>
              <Link href="/contact#support">
                {ur ? "اوقات کی مشاورت" : "Support & scheduling"}
              </Link>
            </div>
          </div>
          <div>
            <h2 className="footer-label">{ur ? "کورسز" : "Quick links"}</h2>
            <div className="footer-links">
              {programs.map((p) => (
                <Link key={p.id} href={"/services#" + p.id}>
                  {txt(p.title, locale)}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="footer-label">
              {ur ? "آئیے آغاز کریں" : "Let?s start learning"}
            </h2>
            <p className="text-xs leading-6 text-white/65">
              {ur
                ? "اپنا پروگرام، زبان اور پسندیدہ وقت بتائیں۔"
                : "Tell us your program, preferred language, and ideal time."}
            </p>
            <Link
              href="/contact#inquiry"
              className="mt-5 flex items-center justify-between rounded-lg bg-gold px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-forest"
            >
              {ur ? "آزمائشی کلاس" : "Request your free trial"}
              <ArrowUpRight size={15} />
            </Link>
            <a
              href={"tel:" + academy.phone}
              className="mt-4 block text-sm text-white/75"
              dir="ltr"
            >
              {academy.displayPhone}
            </a>
          </div>
        </div>
        <div className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-3 border-t border-white/10 py-6 text-[10px] text-white/55">
          <p>
            ? {new Date().getFullYear()}{" "}
            {ur
              ? "النور قرآن اکیڈمی۔ تمام حقوق محفوظ ہیں۔"
              : "Al Noor Quran Academy. All rights reserved."}
          </p>
          <span>
            {ur
              ? "اخلاص کے ساتھ سیکھیں۔"
              : "Learn with sincerity. Grow with purpose."}
          </span>
        </div>
      </footer>
      <a
        className="whatsapp-float"
        href={"https://wa.me/" + academy.phone.slice(1)}
        target="_blank"
        rel="noreferrer"
        aria-label={ur ? "واٹس ایپ پر رابطہ" : "Chat with Al Noor on WhatsApp"}
      >
        <MessageCircle size={27} />
      </a>
    </>
  );
}
