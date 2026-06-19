import { amenities } from "@/lib/amenities";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";

export function AmenitiesGrid({
  title = "Everything else you need",
  subtitle = "Small touches that make the difference between a quick stop and a real break.",
  withHeader = true,
}: {
  title?: string;
  subtitle?: string;
  withHeader?: boolean;
}) {
  return (
    <section className="bg-muted/30">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        {withHeader && (
          <Reveal>
            <div className="mb-10 flex flex-col gap-2">
              <p className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-blue-700"><span aria-hidden className="inline-block h-0.5 w-8 bg-red-600" />
                Amenities
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
              <p className="max-w-2xl text-base text-muted-foreground">{subtitle}</p>
            </div>
          </Reveal>
        )}
        <StaggerGroup
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
          stagger={0.05}
        >
          {amenities.map((a) => {
            const Icon = a.icon;
            return (
              <StaggerItem key={a.id}>
                <div className="hover-lift group flex h-full flex-col items-start gap-3 rounded-xl border border-border bg-card p-5 hover:border-blue-600/60">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/15 text-blue-800 transition-colors group-hover:bg-blue-600/30 dark:text-blue-400">
                    <Icon className="h-5 w-5 transition-transform group-hover:rotate-6" />
                  </span>
                  <p className="text-sm font-medium">{a.name}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
