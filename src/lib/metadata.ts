import type { Metadata } from "next";
const content = {
  home: [
    ["Learn the Quran, from home", "گھر سے قرآن سیکھیں"],
    [
      "Personal Quran learning with Al Noor Quran Academy. Explore Madni Qaida, Nazra, Tajweed, Hifz and Islamic studies in English and Urdu.",
      "النور قرآن اکیڈمی کے ساتھ مدنی قاعدہ، ناظرہ، تجوید، حفظ اور اسلامی تعلیمات اردو اور انگریزی میں سیکھیں۔",
    ],
  ],
  services: [
    ["Quran programs & learning plans", "قرآن کے کورسز اور تعلیمی منصوبے"],
    [
      "Discover Hifz, Tajweed, Nazra, Islamic studies for kids and personal online Quran classes. Contact Al Noor for fees and availability.",
      "حفظ، تجوید، ناظرہ، بچوں کی اسلامی تعلیمات اور انفرادی آن لائن کلاسز دریافت کریں۔",
    ],
  ],
  about: [
    ["Our approach to Quran education", "ہمارا طریقۂ تعلیم"],
    [
      "Learn about Al Noor Quran Academy, our educational values, teaching approach, and tutor information.",
      "النور قرآن اکیڈمی، ہماری تعلیمی اقدار، طریقۂ تدریس اور اساتذہ کی معلومات جانیے۔",
    ],
  ],
  contact: [
    ["Contact & request a trial", "رابطہ اور آزمائشی کلاس"],
    [
      "Contact Al Noor Quran Academy to discuss your learning goals, request a trial lesson, and arrange a suitable schedule.",
      "اپنے تعلیمی اہداف، آزمائشی سبق اور مناسب شیڈول کے لیے النور قرآن اکیڈمی سے رابطہ کریں۔",
    ],
  ],
};
export function pageMetadata(
  locale: string,
  page: keyof typeof content,
): Metadata {
  const index = locale === "ur" ? 1 : 0;
  const [titles, descriptions] = content[page];
  const title = titles[index];
  const description = descriptions[index];
  const path = page === "home" ? "" : `/${page}`;
  return {
    title,
    description,
    alternates: { languages: { en: `/en${path}`, ur: `/ur${path}` } },
    openGraph: {
      title: `${title} | Al Noor Quran Academy`,
      description,
      locale: locale === "ur" ? "ur_PK" : "en_US",
      type: "website",
      images: [
        {
          url: "/media/alnoor%20quran.jpeg",
          width: 1600,
          height: 1600,
          alt: "Al Noor Quran Academy",
        },
      ],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
