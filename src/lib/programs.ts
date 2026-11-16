import type { Text } from "./content";
export const programs: {
  id: string;
  category: "quran" | "islamic" | "personal";
  title: Text;
  description: Text;
  image: string;
  points: Text[];
}[] = [
  {
    id: "qaida",
    category: "quran",
    title: ["Madni Qaida", "مدنی قاعدہ"],
    description: [
      "Begin with Arabic letters and Madni Qaida. Build a clear foundation before moving to Quran reading.",
      "عربی حروف اور مدنی قاعدہ سے آغاز کریں، پھر قرآن پڑھنے کی مضبوط بنیاد بنائیں۔",
    ],
    image: "qaida",
    points: [
      ["Letters and articulation", "حروف اور مخارج"],
      ["Achievable first goals", "آسان ابتدائی اہداف"],
      ["Guided reading practice", "استاد کے ساتھ مشق"],
    ],
  },
  {
    id: "tajweed",
    category: "quran",
    title: ["Nazra & Tajweed", "ناظرہ اور تجوید"],
    description: [
      "Develop clarity through Arabic articulation, pronunciation, elongation, and pauses.",
      "مخارج، تلفظ، مد اور وقف کی مشق کے ذریعے تلاوت کو بہتر بنائیں۔",
    ],
    image: "tajweed",
    points: [
      ["Letters and articulation", "حروف اور مخارج"],
      ["Madd and ghunnah", "مد اور غنہ"],
      ["Pausing and restarting", "وقف اور ابتدا"],
    ],
  },
  {
    id: "hifz",
    category: "quran",
    title: ["Hifz Quran", "حفظ قرآن"],
    description: [
      "Build a purposeful memorization routine with space for new learning, recent lessons, and long-term revision.",
      "نئے سبق، پچھلے سبق اور مسلسل دہرائی کے توازن کے ساتھ حفظ کا سفر ترتیب دیں۔",
    ],
    image: "hifz",
    points: [
      ["Manageable learning goals", "مناسب تعلیمی اہداف"],
      ["Consistent revision", "مسلسل دہرائی"],
      ["Attention to recitation", "تلاوت کی درستگی"],
    ],
  },
  {
    id: "kids",
    category: "islamic",
    title: ["Islamic Studies for Kids", "بچوں کی اسلامی تعلیم"],
    description: [
      "Introduce children to faith through approachable conversations, Seerat stories, everyday duas, and thoughtful habits.",
      "آسان گفتگو، سیرت کے واقعات اور روزمرہ دعاؤں سے بچوں میں ایمان، ادب اور نیکی کی محبت پیدا کریں۔",
    ],
    image: "kids",
    points: [
      ["Everyday duas", "روزمرہ کی دعائیں"],
      ["Stories from the Seerah", "سیرت النبی ﷺ"],
      ["Prayer foundations", "نماز کی بنیادی باتیں"],
    ],
  },
  {
    id: "personal",
    category: "personal",
    title: ["One-to-One Classes", "انفرادی کلاس"],
    description: [
      "Request one-to-one lessons shaped around your goals. Discuss your preferred language, tutor availability, and suitable times.",
      "اپنے مقاصد کے مطابق انفرادی کلاس کی درخواست کریں۔ زبان، وقت اور استاد کی دستیابی پہلے طے کریں۔",
    ],
    image: "personal",
    points: [
      ["Individual attention", "انفرادی رہنمائی"],
      ["English or Urdu", "اردو یا انگریزی"],
      ["Schedule consultation", "اوقات پر مشاورت"],
    ],
  },
];
