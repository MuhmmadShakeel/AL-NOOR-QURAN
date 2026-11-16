export type Text = readonly [string, string];
export const txt = (value: Text, locale: string) =>
  value[locale === "ur" ? 1 : 0];
export const academy = {
  phone: "+923017903267",
  displayPhone: "+92 301 7903267",
  email: "info.alnoorofficial@gmail.com",
  facebook: "https://www.facebook.com/share/1S9gkNTScY/",
  instagram: "https://www.instagram.com/officialalnoorquran",
};
export const nav = [
  { href: "/", label: ["Home", "صفحۂ اول"] },
  { href: "/services", label: ["Our programs", "ہمارے کورسز"] },
  { href: "/about", label: ["About us", "ہمارے بارے میں"] },
  { href: "/contact", label: ["Contact", "رابطہ"] },
] as const;
export const assets = [
  {
    file: "quran.jpeg",
    alt: [
      "Quran and Tajweed learning course artwork",
      "قرآن اور تجوید کی تعلیم کا پوسٹر",
    ],
  },
  {
    file: "alnoor quran.jpeg",
    alt: [
      "Al Noor Quran Academy official course information",
      "النور قرآن اکیڈمی کے کورسز کی معلومات",
    ],
  },
  {
    file: "madni.jpeg",
    alt: [
      "Madni Qaida foundational Arabic reading program",
      "مدنی قاعدہ اور بنیادی عربی پڑھنے کا کورس",
    ],
  },
  {
    file: "nazra.jpeg",
    alt: ["Nazra Quran guided reading course", "ناظرہ قرآن پڑھنے کا کورس"],
  },
  {
    file: "read-q.jpeg",
    alt: [
      "Quran reading and recitation learning artwork",
      "قرآن کی تلاوت اور تعلیم کا پوسٹر",
    ],
  },
  {
    file: "seerat.jpeg",
    alt: [
      "Seerat and Islamic studies educational artwork",
      "سیرت اور اسلامی تعلیمات کا پوسٹر",
    ],
  },
  {
    file: "free trial.jpeg",
    alt: [
      "Al Noor introductory trial lesson information",
      "النور کے تعارفی آزمائشی سبق کی معلومات",
    ],
  },
  {
    file: "all services.jpeg",
    alt: [
      "Al Noor Quran Academy complete program collection",
      "النور قرآن اکیڈمی کے تمام کورسز",
    ],
  },
  {
    file: "placeholder-classroom.svg",
    alt: [
      "Placeholder for a teacher guiding an online Quran lesson",
      "آن لائن قرآن پڑھاتے استاد کی تصویر کی جگہ",
    ],
  },
  {
    file: "placeholder-tutors.svg",
    alt: [
      "Placeholder for the academy certified teaching team photograph",
      "اکیڈمی کے مستند اساتذہ کی تصویر کی جگہ",
    ],
  },
] as const;
export const faqs: { q: Text; a: Text }[] = [
  {
    q: [
      "Can a complete beginner join?",
      "کیا بالکل نئے طالب علم داخلہ لے سکتے ہیں؟",
    ],
    a: [
      "Yes. Start with Madni Qaida and build confidence in Arabic letters before moving to Quran reading.",
      "جی ہاں۔ مدنی قاعدہ سے عربی حروف سیکھیں، پھر اعتماد کے ساتھ قرآن پڑھنا شروع کریں۔",
    ],
  },
  {
    q: ["How do online lessons work?", "آن لائن کلاسز کیسے ہوتی ہیں؟"],
    a: [
      "Contact the academy to discuss your level, preferred language and available times. The team will confirm the lesson platform and arrange an introduction.",
      "اپنی استعداد، زبان اور دستیاب اوقات کے بارے میں اکیڈمی سے رابطہ کریں۔ ٹیم کلاس کے پلیٹ فارم اور تعارفی سبق کی تصدیق کرے گی۔",
    ],
  },
  {
    q: [
      "Are classes available in English and Urdu?",
      "کیا کلاسز اردو اور انگریزی میں دستیاب ہیں؟",
    ],
    a: [
      "You can request English or Urdu instruction. Tutor and time availability will be confirmed before enrollment.",
      "آپ اردو یا انگریزی میں تدریس کی درخواست کر سکتے ہیں۔ داخلے سے پہلے استاد اور وقت کی دستیابی کی تصدیق کی جائے گی۔",
    ],
  },
  {
    q: [
      "What are the fees and class timings?",
      "فیس اور کلاس کے اوقات کیا ہیں؟",
    ],
    a: [
      "Fees depend on your program and lesson schedule. Ask for a personalized quote and a time that fits your routine.",
      "فیس کا انحصار کورس اور کلاس کے شیڈول پر ہے۔ اپنی ضرورت کے مطابق فیس اور وقت کی معلومات حاصل کریں۔",
    ],
  },
];
