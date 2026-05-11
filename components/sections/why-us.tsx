import { Sparkles, Truck, Soup } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const icons = [Sparkles, Truck, Soup];

export function WhyUs() {
  return (
    <section className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mb-10 flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
            Why drivers choose us
          </p>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            Built around what matters on the road
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {siteConfig.whyUs.map((item, i) => {
            const Icon = icons[i] ?? Sparkles;
            return (
              <div
                key={item.title}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-7"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/15 text-amber-700 dark:text-amber-300">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
