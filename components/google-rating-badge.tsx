import { Star } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function GoogleRatingBadge({
  variant = "light",
  showLink = true,
}: {
  variant?: "light" | "dark";
  showLink?: boolean;
}) {
  const { value, count } = siteConfig.rating;
  const Component: "a" | "div" = showLink ? "a" : "div";
  const componentProps =
    showLink
      ? {
          href: siteConfig.googleBusinessUrl,
          target: "_blank",
          rel: "noopener noreferrer",
        }
      : {};

  return (
    <Component
      {...componentProps}
      className={cn(
        "inline-flex w-fit items-center gap-2.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
        variant === "dark"
          ? "border-amber-400/30 bg-amber-400/10 text-amber-100 hover:bg-amber-400/15"
          : "border-amber-200 bg-amber-50 text-amber-900 hover:bg-amber-100 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-100",
      )}
    >
      <span className="flex items-center" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-3.5 w-3.5",
              i < Math.round(value) ? "fill-amber-400 text-amber-400" : "text-amber-300/40",
            )}
          />
        ))}
      </span>
      <span>
        <strong className="font-semibold">{value.toFixed(1)}</strong> on Google
        <span className="ml-1 opacity-70">· {count} reviews</span>
      </span>
    </Component>
  );
}
