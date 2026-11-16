import Image from "next/image";
export default function History({ locale }: { locale: string }) {
  const ur = locale === "ur";
  return (
    <section
      aria-labelledby="history-title"
      className="bg-[#f2f6f2] px-5 py-16 sm:px-8 lg:py-20"
    >
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <Image
            src="/media/read-q.jpeg"
            alt={
              ur
                ? "النور کی آن لائن تعلیم"
                : "Al Noor Quran Academy learning artwork"
            }
            width={1570}
            height={1600}
            className="max-h-[360px] w-full object-contain"
          />
        </div>
        <div className="border-s-2 border-gold ps-7">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#9b7a2a]">
            {ur ? "ہماری بنیاد" : "Our roots"}
          </span>
          <h2 id="history-title" className="section-title mt-4">
            {ur
              ? "ایک نیت۔ علم کی روشنی ہر گھر تک۔"
              : "One intention. Bring learning closer."}
          </h2>
          <p className="mt-6 text-sm leading-7 text-muted">
            {ur
              ? "النور قرآن اکیڈمی آن لائن قرآن کی تعلیم کو آسان بنانے کے لیے کوشاں ہے۔ ہماری بنیاد درست تلاوت، صبر سے رہنمائی اور عملی مشق ہے۔"
              : "Al Noor Quran Academy is dedicated to making online Quran learning approachable. Our educational focus brings together foundational reading, careful recitation, and purposeful practice."}
          </p>
          <p className="mt-5 text-sm leading-7 text-muted">
            {ur
              ? "عربی حروف اور مدنی قاعدہ کی سمجھ۔ ناظرہ اور تجوید کے ساتھ روانی۔ حفظ، فہم اور اسلامی تعلیمات کا سفر۔"
              : "Begin with Arabic letters and Madni Qaida. Build fluency through Nazra and Tajweed. Continue into memorization and Islamic learning."}
          </p>
        </div>
      </div>
    </section>
  );
}
