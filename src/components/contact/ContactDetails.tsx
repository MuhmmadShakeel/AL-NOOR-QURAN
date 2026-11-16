import Image from "next/image";
import { Phone, Mail, Clock3 } from "lucide-react";
import { academy } from "@/lib/content";
import ContactForm from "./ContactForm";
export default function ContactDetails({ locale }: { locale: string }) {
  const ur = locale === "ur";
  return (
    <section
      id="inquiry"
      className="scroll-mt-28 px-5 pb-16 sm:px-8"
      aria-label={
        ur ? "درخواست اور رابطے کی تفصیلات" : "Inquiry and contact details"
      }
    >
      <div className="mx-auto grid max-w-[1200px] items-start gap-6 lg:grid-cols-[1.9fr_.92fr]">
        <ContactForm locale={locale} />
        <aside className="space-y-6">
          <div className="dark-panel p-7 sm:p-8">
            <h2 className="mb-7 text-base font-bold uppercase tracking-widest text-gold">
              {ur ? "براہ راست رابطہ" : "Direct support"}
            </h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="icon-tile !rounded-full !bg-white/10 !text-gold">
                  <Phone size={20} />
                </span>
                <div>
                  <p className="mb-2 text-[9px] font-bold uppercase tracking-wider text-white/45">
                    {ur ? "فون اور واٹس ایپ" : "Phone & WhatsApp"}
                  </p>
                  <a
                    href={"tel:" + academy.phone}
                    dir="ltr"
                    className="block text-sm font-bold"
                  >
                    {academy.displayPhone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="icon-tile shrink-0 !rounded-full !bg-white/10 !text-gold">
                  <Mail size={20} />
                </span>
                <div className="min-w-0">
                  <p className="mb-2 text-[9px] font-bold uppercase tracking-wider text-white/45">
                    {ur ? "ای میل" : "Email address"}
                  </p>
                  <a
                    href={"mailto:" + academy.email}
                    className="break-all text-xs font-bold"
                  >
                    {academy.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="icon-tile !rounded-full !bg-white/10 !text-gold">
                  <Clock3 size={20} />
                </span>
                <div>
                  <p className="mb-2 text-[9px] font-bold uppercase tracking-wider text-white/45">
                    {ur ? "دفتری اوقات" : "Office hours"}
                  </p>
                  <p className="text-xs font-bold">
                    {ur ? "ٹیم سے تصدیق کریں" : "Confirm with the team"}
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-7 border-t border-white/10 pt-5 text-xs leading-6 text-white/60">
              {ur
                ? "اپنا پسندیدہ وقت اور ٹائم زون بھیجیں۔ ٹیم دستیابی کے مطابق رابطے کے وقت کی تصدیق کرے گی۔"
                : "Share a preferred time and your time zone. The academy will confirm a suitable time for a conversation based on availability."}
            </p>
          </div>
          <div className="overflow-hidden rounded-[26px] border border-forest/10 bg-white">
            <Image
              src="/images/shared/community.svg"
              alt={
                ur
                  ? "قرآن کی تعلیم کے لیے اصل گرافک"
                  : "Original Al Noor Quran learning illustration"
              }
              width={720}
              height={384}
              className="w-full"
            />
          </div>
        </aside>
      </div>
    </section>
  );
}
