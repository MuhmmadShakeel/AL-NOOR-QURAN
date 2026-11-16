import type { ReactNode } from "react";
export default function Section({
  id,
  children,
  dark = false,
  className = "",
}: {
  id: string;
  children: ReactNode;
  dark?: boolean;
  className?: string;
  variant?: number;
}) {
  return (
    <section
      id={id}
      aria-labelledby={id + "-title"}
      className={
        "scroll-mt-24 px-5 py-16 sm:px-8 lg:py-24 " +
        (dark ? "bg-forest text-white " : "") +
        className
      }
    >
      <div className="mx-auto w-full max-w-[1200px]">{children}</div>
    </section>
  );
}
