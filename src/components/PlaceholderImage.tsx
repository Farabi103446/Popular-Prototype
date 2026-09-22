import { Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PlaceholderImage({
  label,
  variant = "accent",
  className = "",
  height = "h-40",
}: {
  label: string;
  variant?: "accent" | "tertiary" | "primary" | "warm";
  className?: string;
  height?: string;
}) {
  const variants = {
    accent: "from-accent to-secondary text-primary",
    tertiary: "from-tertiary/10 to-tertiary/20 text-tertiary",
    primary: "from-primary to-tertiary/80 text-primary-foreground",
    warm: "from-amber-50 to-orange-100 text-amber-700 dark:from-accent dark:to-secondary dark:text-muted-foreground",
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center bg-gradient-to-br",
        variants[variant],
        height,
        className
      )}
      role="img"
      aria-label={label}
    >
      <div className="flex flex-col items-center gap-2 p-4 text-center">
        <ImageIcon className="h-8 w-8 opacity-60" aria-hidden="true" />
        <span className="max-w-[220px] text-xs font-semibold leading-snug opacity-80">
          {label}
        </span>
      </div>
    </div>
  );
}
