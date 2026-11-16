import Section from "../Section";
import Heading from "../Heading";
import Media from "../Media";
import Button from "../Button";
import { Check } from "lucide-react";
export default function ProgramSection({
  id,
  title,
  description,
  points,
  image,
  locale,
  dark = false,
  reverse = false,
  variant = 1,
}: {
  id: string;
  title: string;
  description: string;
  points: string[];
  image: number;
  locale: string;
  dark?: boolean;
  reverse?: boolean;
  variant?: number;
}) {
  return (
    <Section id={id} dark={dark} variant={variant}>
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div className={reverse ? "lg:order-2" : ""}>
          <Heading {...{ id, title, description }} />
          <ul className="mb-9 grid gap-5 sm:grid-cols-2">
            {points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-sm leading-7"
              >
                <Check size={18} className="mt-1 shrink-0 text-gold" />
                {point}
              </li>
            ))}
          </ul>
          <Button href={`/contact?program=${id}#inquiry`}>
            {locale === "ur"
              ? "اس کورس کے بارے میں پوچھیں"
              : "Ask about this program"}
          </Button>
        </div>
        <div className={reverse ? "lg:order-1" : ""}>
          <Media index={image} locale={locale} />
        </div>
      </div>
    </Section>
  );
}
