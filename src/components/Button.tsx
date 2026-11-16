import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
export default function Button({
  children,
  href = "/contact#inquiry",
  outline = false,
}: {
  children: React.ReactNode;
  href?: string;
  outline?: boolean;
}) {
  return (
    <Link
      href={href}
      className={
        "action-button " + (outline ? "action-outline" : "action-primary")
      }
    >
      {children}
      <ArrowRight size={15} className="rtl:rotate-180" />
    </Link>
  );
}
