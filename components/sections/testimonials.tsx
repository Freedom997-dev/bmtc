import { Quote } from "lucide-react";
import { testimonials } from "@/lib/testimonials";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { GoogleRatingBadge } from "@/components/google-rating-badge";

export function Testimonials() {
  return (
    <section className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <Reveal>
          <div className="mb-10 flex flex-col gap-3">
            <p className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-blue-700"><span aria-hidden className="inline-block h-0.5 w-8 bg-red-600" />
              From the road
            </p>
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Drivers, families, and regulars
            </h2>
            <div className="mt-1">
              <GoogleRatingBadge variant="light" />
            </div>
          </div>
        </Reveal>
        <StaggerGroup className="grid gap-5 md:grid-cols-3" stagger={0.1}>
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="hover-lift flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-7 hover:border-blue-600/60">
                <Quote className="h-6 w-6 text-blue-600" />
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
