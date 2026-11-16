"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ArrowLeft,
  Download,
  Mail,
} from "lucide-react";
import { academy, txt } from "@/lib/content";
import { programs } from "@/lib/programs";
export default function ContactForm({
  locale,
  compact = false,
}: {
  locale: string;
  compact?: boolean;
}) {
  const ur = locale === "ur";
  const [step, setStep] = useState(0);
  const [ready, setReady] = useState(false);
  const [inquiry, setInquiry] = useState("");
  const [mail, setMail] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get(
      "program",
    );
    const alias: Record<string, string> = {
      "plan-1": "qaida",
      "plan-2": "tajweed",
      "plan-3": "hifz",
    };
    const id = requested ? alias[requested] || requested : "";
    if (selectRef.current && programs.some((p) => p.id === id))
      selectRef.current.value = id;
  }, []);
  function next() {
    const current = formRef.current?.querySelectorAll<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >(
      "fieldset:not([hidden]) input,fieldset:not([hidden]) select,fieldset:not([hidden]) textarea",
    );
    if (current && Array.from(current).every((field) => field.reportValidity()))
      setStep((v) => v + 1);
  }
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (step < 2) {
      next();
      return;
    }
    if (!e.currentTarget.reportValidity()) return;
    const data = new FormData(e.currentTarget);
    const program = programs.find((p) => p.id === data.get("program"));
    const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nProgram: ${program ? txt(program.title, locale) : ur ? "مشورہ درکار ہے" : "Help me choose"}\nLanguage: ${data.get("language")}\nPreferred time and time zone: ${data.get("time")}\n\n${data.get("message")}`;
    setInquiry(body);
    setMail(
      `mailto:${academy.email}?subject=${encodeURIComponent("Quran lesson inquiry — " + data.get("name"))}&body=${encodeURIComponent(body)}`,
    );
    setReady(true);
  }
  function download() {
    const url = URL.createObjectURL(
      new Blob([inquiry], { type: "text/plain;charset=utf-8" }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = "al-noor-inquiry.txt";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return (
    <form
      noValidate
      ref={formRef}
      onSubmit={submit}
      onInput={() => setReady(false)}
      onChange={() => setReady(false)}
      className={compact ? "min-w-0" : "dark-panel p-7 sm:p-10"}
      aria-label={ur ? "آزمائشی کلاس کی درخواست" : "Free trial inquiry"}
    >
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-xl font-bold">
          {ur ? "آپ کا پہلا قدم" : "Let’s find your starting point"}
        </h2>
        <ol
          className="flex items-center gap-2"
          aria-label={ur ? "درخواست کے مراحل" : "Inquiry progress"}
        >
          {[0, 1, 2].map((n) => (
            <li
              key={n}
              aria-current={step === n ? "step" : undefined}
              className={
                "flex size-7 items-center justify-center rounded-full text-[10px] font-bold " +
                (step === n
                  ? "bg-gold text-forest"
                  : step > n
                    ? "bg-white/20 text-gold"
                    : "bg-white/10 text-white/40")
              }
            >
              {step > n ? <CheckCircle2 size={13} /> : n + 1}
            </li>
          ))}
        </ol>
      </div>
      <fieldset hidden={step !== 0}>
        <legend className="sr-only">
          {ur ? "رابطے کی معلومات" : "Contact details"}
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="field-label">
            {ur ? "مکمل نام" : "Full name"}
            <input
              className="field"
              name="name"
              required
              maxLength={100}
              autoComplete="name"
              placeholder={ur ? "آپ کا نام" : "Enter your name"}
            />
          </label>
          <label className="field-label">
            {ur ? "ای میل" : "Email address"}
            <input
              className="field"
              name="email"
              type="email"
              required
              maxLength={200}
              autoComplete="email"
              placeholder="you@example.com"
              dir="ltr"
            />
          </label>
        </div>
        <p className="mt-6 text-xs leading-6 text-white/55">
          {ur
            ? "اپنا پروگرام، زبان اور پسندیدہ وقت بتائیں۔"
            : "Tell us your program, preferred language, and ideal time."}
        </p>
      </fieldset>
      <fieldset hidden={step !== 1}>
        <legend className="sr-only">
          {ur ? "کورس اور اوقات" : "Program and schedule"}
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="field-label">
            {ur ? "کورس" : "Learning program"}
            <select
              ref={selectRef}
              name="program"
              className="field"
              defaultValue=""
              required
            >
              <option value="" disabled>
                {ur ? "کورس منتخب کریں" : "Select a program"}
              </option>
              {programs.map((p) => (
                <option key={p.id} value={p.id}>
                  {txt(p.title, locale)}
                </option>
              ))}
              <option value="help">
                {ur ? "مشورہ درکار ہے" : "Help me choose"}
              </option>
            </select>
          </label>
          <label className="field-label">
            {ur ? "تدریسی زبان" : "Teaching language"}
            <select
              name="language"
              className="field"
              defaultValue={ur ? "Urdu" : "English"}
            >
              <option value="English">{ur ? "انگریزی" : "English"}</option>
              <option value="Urdu">{ur ? "اردو" : "Urdu"}</option>
            </select>
          </label>
          <label className="field-label sm:col-span-2">
            {ur ? "پسندیدہ وقت اور ٹائم زون" : "Preferred time & time zone"}
            <input
              name="time"
              className="field"
              maxLength={150}
              placeholder={
                ur ? "مثلاً شام ۶ بجے، پاکستان" : "e.g. 6 pm, Pakistan time"
              }
            />
          </label>
        </div>
      </fieldset>
      <fieldset hidden={step !== 2}>
        <legend className="sr-only">
          {ur ? "آپ کے مقاصد" : "Your learning goals"}
        </legend>
        <label className="field-label">
          {ur ? "آپ کے مقاصد" : "Tell us a little about your goals"}
          <textarea
            name="message"
            className="field resize-y"
            rows={4}
            maxLength={2000}
            required
          />
        </label>
        <label className="mt-5 flex items-start gap-3 text-xs leading-6 text-white/65">
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-1 size-4 shrink-0 accent-gold"
          />
          {ur
            ? "میں اس درخواست کے بارے میں اکیڈمی کی جانب سے رابطے پر رضامند ہوں۔"
            : "I agree to be contacted by the academy about this inquiry."}
        </label>
      </fieldset>
      <div className="mt-8 flex gap-3 border-t border-white/10 pt-6">
        {step > 0 && (
          <button
            type="button"
            onClick={() => {
              setStep((v) => v - 1);
              setReady(false);
            }}
            className="rounded-lg border border-white/20 px-4 py-3"
            aria-label={ur ? "پچھلا مرحلہ" : "Previous step"}
          >
            <ArrowLeft size={16} className="rtl:rotate-180" />
          </button>
        )}
        {step < 2 ? (
          <button
            key="next"
            type="button"
            onClick={next}
            className="flex min-h-12 flex-1 items-center justify-center gap-4 rounded-lg bg-gold px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-forest"
          >
            {ur ? "اگلا مرحلہ" : "Continue to details"}
            <ArrowRight size={14} className="rtl:rotate-180" />
          </button>
        ) : (
          <button
            key="submit"
            type="submit"
            className="flex min-h-12 flex-1 items-center justify-center gap-4 rounded-lg bg-gold px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-forest"
          >
            {ur ? "درخواست تیار کریں" : "Prepare my inquiry"}
            <ArrowRight size={14} className="rtl:rotate-180" />
          </button>
        )}
      </div>
      <p className="mt-4 text-[10px] leading-5 text-white/50">
        {ur
          ? "یہ فارم پیغام تیار کرتا ہے، خودکار طور پر نہیں بھیجتا۔ معلومات سرور پر محفوظ نہیں ہوتیں۔"
          : "This form prepares your message; it does not send automatically. Your details are not stored on a server."}
      </p>
      {ready && (
        <div
          role="status"
          className="mt-5 rounded-xl border border-gold/30 bg-white/5 p-5"
        >
          <CheckCircle2 className="text-gold" size={24} />
          <p className="my-3 text-xs leading-6">
            {ur
              ? "آپ کی درخواست تیار ہے۔ مکمل کرنے کے لیے ای میل بھیجیں۔"
              : "Your inquiry is ready. Send your email to complete the request."}
          </p>
          <div className="flex flex-wrap gap-4 text-xs font-bold text-gold">
            <a
              href={mail}
              className="flex items-center gap-2 underline underline-offset-4"
            >
              <Mail size={14} />
              {ur ? "ای میل ایپ کھولیں" : "Open email app"}
            </a>
            <button
              type="button"
              onClick={download}
              className="flex items-center gap-2 underline underline-offset-4"
            >
              <Download size={14} />
              {ur ? "درخواست ڈاؤن لوڈ کریں" : "Download inquiry"}
            </button>
          </div>
        </div>
      )}
    </form>
  );
}
