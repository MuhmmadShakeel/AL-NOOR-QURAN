"use client";
import { motion, useReducedMotion } from "framer-motion";
import {
  BookOpen,
  Check,
  Clock3,
  Heart,
  Monitor,
  UserRound,
} from "lucide-react";
const icons = [BookOpen, Heart, Clock3, Monitor, UserRound, Check];
export default function FeatureCard({
  title,
  description,
  index = 0,
  dark = false,
}: {
  title: string;
  description: string;
  index?: number;
  dark?: boolean;
}) {
  const Icon = icons[index % icons.length];
  const reduced = useReducedMotion();
  const variants = [
    { opacity: 0, y: 25 },
    { opacity: 0, x: -20 },
    { opacity: 0, scale: 0.92 },
    { opacity: 0, x: 20 },
    { opacity: 0, scale: 1.05 },
  ];
  return (
    <motion.article
      initial={reduced ? false : variants[index % 5]}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className={`group rounded-2xl border p-7 transition-colors duration-300 ${dark ? "border-white/15 hover:border-gold/60" : "border-forest/15 hover:border-forest/50"}`}
    >
      <div className="mb-8 flex items-center justify-between">
        <Icon className="text-gold" size={28} strokeWidth={1.4} />
        <span className="text-xs opacity-40">0{index + 1}</span>
      </div>
      <h3 className="mb-3 font-display text-2xl">{title}</h3>
      <p className="text-sm leading-7 opacity-65">{description}</p>
    </motion.article>
  );
}
