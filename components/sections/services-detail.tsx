import { services } from "@/lib/services";
import { ServiceDetailRow } from "./service-detail-row";
import { Reveal } from "@/components/motion/reveal";

export function ServicesDetail() {
  return (
    <section className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <Reveal>
          <div className="mb-12 flex flex-col gap-2">
            <p className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-blue-700"><span aria-hidden className="inline-block h-0.5 w-8 bg-red-600" />
              Services in detail
            </p>
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Fuel, food, rest, parking — done right
            </h2>
          </div>
        </Reveal>
        <div className="flex flex-col gap-16 md:gap-28">
          {services.map((s, idx) => (
            <Reveal key={s.id} direction={idx % 2 === 0 ? "right" : "left"}>
              <ServiceDetailRow service={s} reverse={idx % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
