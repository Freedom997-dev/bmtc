import Image from "next/image";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Service } from "@/lib/services";

export function ServiceDetailRow({
  service,
  reverse,
}: {
  service: Service;
  reverse?: boolean;
}) {
  const Icon = service.icon;
  return (
    <div
      id={service.id}
      className="grid items-center gap-10 scroll-mt-20 md:grid-cols-2"
    >
      <div
        className={cn(
          "flex flex-col gap-5",
          reverse ? "md:order-2" : "md:order-1",
        )}
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/15 text-blue-800 dark:text-blue-400">
          <Icon className="h-6 w-6" />
        </span>
        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {service.name}
        </h3>
        <p className="text-base text-muted-foreground sm:text-lg">
          {service.description}
        </p>
        <ul className="grid gap-3">
          {service.bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-sm">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={cn(
          "relative aspect-[4/3] overflow-hidden rounded-2xl border border-border",
          reverse ? "md:order-1" : "md:order-2",
        )}
      >
        {service.hasPhoto ? (
          <>
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"
            />
          </>
        ) : (
          <div className="relative h-full w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(37, 99, 235,0.18),_transparent_55%)]"
            />
            <div className="relative flex h-full items-center justify-center">
              <Icon className="h-24 w-24 text-blue-400/80" strokeWidth={1.25} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
