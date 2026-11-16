import { BookOpen, Sparkle } from "lucide-react";
export default function Logo({ locale = "en" }: { locale?: string }) {
  return (
    <span className="inline-flex items-center gap-3">
      <span className="relative flex size-12 items-center justify-center rounded-t-full border border-gold/60 text-gold">
        <BookOpen size={26} />
        <Sparkle size={12} className="absolute -top-1 end-0 bg-forest" />
      </span>
      <span>
        <span className="block font-display text-xl font-bold tracking-wide">
          {locale === "ur" ? "النور" : "AL NOOR"}
        </span>
        <span className="block text-[10px] tracking-[.19em] uppercase">
          {locale === "ur" ? "قرآن اکیڈمی" : "Quran Academy"}
        </span>
      </span>
    </span>
  );
}
