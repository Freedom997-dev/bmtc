import { services } from "@/lib/services";
import { ServiceDetailRow } from "./service-detail-row";

export function ServicesDetail() {
  return (
    <section className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mb-12 flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
            Services in detail
          </p>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            Fuel, food, rest, parking — done right
          </h2>
        </div>
        <div className="flex flex-col gap-16 md:gap-24">
          {services.map((s, idx) => (
            <ServiceDetailRow key={s.id} service={s} reverse={idx % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
