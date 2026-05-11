import { amenities } from "@/lib/amenities";

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
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        {withHeader && (
          <div className="mb-10 flex flex-col gap-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
              Amenities
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
            <p className="max-w-2xl text-base text-muted-foreground">{subtitle}</p>
          </div>
        )}
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {amenities.map((a) => {
            const Icon = a.icon;
            return (
              <li
                key={a.id}
                className="flex flex-col items-start gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:border-amber-400/60"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400/15 text-amber-700 dark:text-amber-300">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="text-sm font-medium">{a.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
