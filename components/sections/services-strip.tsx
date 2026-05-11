import Link from "next/link";
import { services } from "@/lib/services";

export function ServicesStrip() {
  return (
    <section className="border-b border-border/60 bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
              What we offer
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
              Everything a long haul needs, in one stop
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm font-medium underline-offset-4 hover:underline"
          >
            Full service list →
          </Link>
        </div>

        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <li key={s.id}>
                <Link
                  href={`/services#${s.id}`}
                  className="group flex h-full flex-col gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:border-amber-400/60 hover:bg-amber-50/50 dark:hover:bg-amber-950/20"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-400/15 text-amber-700 dark:text-amber-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-base font-semibold tracking-tight">{s.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{s.short}</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
