import { Quote } from "lucide-react";
import { testimonials } from "@/lib/testimonials";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";

export function Testimonials() {
  return (
    <section className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <Reveal>
          <div className="mb-10 flex flex-col gap-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
              From the road
            </p>
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Drivers, families, and regulars
            </h2>
          </div>
        </Reveal>
        <StaggerGroup className="grid gap-5 md:grid-cols-3" stagger={0.1}>
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="hover-lift flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-7 hover:border-amber-400/60">
                <Quote className="h-6 w-6 text-amber-500" />
                <blockquote className="flex-1 text-base text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <footer className="text-sm">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-muted-foreground">{t.context}</p>
                </footer>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
