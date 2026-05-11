import { googleMapsEmbedSrc, siteConfig } from "@/lib/site-config";

export function MapEmbed({ className }: { className?: string }) {
  return (
    <div
      className={
        "relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border bg-muted " +
        (className ?? "")
      }
    >
      <iframe
        title={`Map of ${siteConfig.name}`}
        src={googleMapsEmbedSrc()}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
