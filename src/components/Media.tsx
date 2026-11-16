import Image from "next/image";
import { assets, txt } from "@/lib/content";
export default function Media({
  index,
  locale,
  priority = false,
  arch = false,
}: {
  index: number;
  locale: string;
  priority?: boolean;
  arch?: boolean;
}) {
  const asset = assets[index];
  return (
    <div
      className={`relative overflow-hidden border border-gold/25 bg-white/5 ${arch ? "rounded-t-[45%] rounded-b-2xl" : "rounded-2xl"}`}
    >
      <Image
        src={`/media/${asset.file}`}
        alt={txt(asset.alt, locale)}
        width={800}
        height={820}
        priority={priority}
        sizes="(max-width: 768px) 100vw, 45vw"
        className="h-auto max-h-[65vh] w-full object-contain transition-transform duration-700 hover:scale-[1.025]"
      />
    </div>
  );
}
