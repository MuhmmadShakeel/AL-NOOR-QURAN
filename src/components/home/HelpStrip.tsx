import { Headphones, MessageCircle } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { academy } from "@/lib/content";
export default function HelpStrip({ locale }: { locale: string }) {
  const ur = locale === "ur";
  return (
    <div className="mx-auto max-w-[1200px] px-5 pt-12 sm:px-0">
      <div className="flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-forest/10 border-s-4 border-s-forest bg-white p-6">
        <div className="flex max-w-[710px] items-start gap-4">
          <Headphones size={25} className="mt-1 shrink-0" />
          <div>
            <h2 className="text-sm font-bold">
              {ur
                ? "اپنا کورس منتخب کرنے میں رہنمائی چاہیے؟"
                : "Need help finding your starting point?"}
            </h2>
            <p className="mt-2 text-xs leading-6 text-muted">
              {ur
                ? "کورس کے انتخاب، کلاس کے اوقات یا ابتدائی سبق کے بارے میں بات کریں۔"
                : "Questions about programs, lesson times, or where to begin? Let’s talk about your next step toward the Quran."}
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <Link href="/contact" className="header-trial">
            {ur ? "رابطہ کریں" : "Get in touch"}
          </Link>
          <a
            href={"https://wa.me/" + academy.phone.slice(1)}
            target="_blank"
            rel="noreferrer"
            className="course-button gap-2"
          >
            <MessageCircle size={14} />
            {ur ? "واٹس ایپ" : "WhatsApp"}
          </a>
        </div>
      </div>
    </div>
  );
}
