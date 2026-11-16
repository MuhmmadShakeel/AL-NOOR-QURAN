import Button from "./Button";
export default function JourneyCTA({ locale }: { locale: string }) {
  const ur = locale === "ur";
  return (
    <section
      className="px-5 py-16 sm:px-8 lg:py-20"
      aria-labelledby="journey-title"
    >
      <div className="dark-panel mx-auto max-w-[1200px] px-6 py-14 text-center sm:px-12 lg:py-20">
        <h2
          id="journey-title"
          className="mx-auto max-w-[720px] text-3xl font-extrabold tracking-tight sm:text-[40px] sm:leading-tight"
        >
          {ur
            ? "ایک خوبصورت آغاز، آج سے۔"
            : "Your next chapter starts with one ayah."}
        </h2>
        <p className="mx-auto mt-5 max-w-[600px] text-sm leading-7 text-white/65">
          {ur
            ? "اپنا پروگرام، زبان اور پسندیدہ وقت بتائیں۔ آزمائشی کلاس کے لیے رابطہ کریں۔"
            : "Tell us your program, preferred language, and ideal time. Speak with our team and request your introductory Quran lesson today."}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button>{ur ? "آزمائشی کلاس" : "Book free trial"}</Button>
          <Button href="/contact" outline>
            {ur ? "رابطہ کریں" : "Contact us"}
          </Button>
        </div>
      </div>
    </section>
  );
}
