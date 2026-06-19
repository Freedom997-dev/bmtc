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
          ? "border-blue-600/30 bg-blue-600/10 text-blue-100 hover:bg-blue-600/15"
          : "border-blue-200 bg-blue-50 text-blue-900 hover:bg-blue-100 dark:border-blue-600/30 dark:bg-blue-600/10 dark:text-blue-100",
      )}
    >
      <span className="flex items-center" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-3.5 w-3.5",
              i < Math.round(value) ? "fill-yellow-400 text-yellow-400" : "text-yellow-200/40",
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
