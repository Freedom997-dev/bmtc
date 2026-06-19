import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";

export function ServicesStrip() {
  return (
    <section className="border-b border-border/60 bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <Reveal>
          <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
                What we offer
              </p>
              <h2 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
                Everything a long haul needs, in one stop
              </h2>
            </div>
            <Link
              href="/services"
              className="group inline-flex items-center gap-1.5 text-sm font-medium underline-offset-4 hover:underline"
            >
              Full service list
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <StaggerGroup className="grid grid-cols-2 gap-4 md:grid-cols-4" stagger={0.08}>
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <StaggerItem key={s.id}>
                <Link
                  href={`/services#${s.id}`}
                  className="hover-lift group flex h-full flex-col gap-3 rounded-xl border border-border bg-card p-5 hover:border-amber-400/60"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-400/15 text-amber-700 transition-colors group-hover:bg-amber-400/30 dark:text-amber-300">
                    <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                  </span>
                  <div>
                    <p className="text-base font-semibold tracking-tight">{s.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{s.short}</p>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
