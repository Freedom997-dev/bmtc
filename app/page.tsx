import { Hero } from "@/components/sections/hero";
import { MarqueeStrip } from "@/components/sections/marquee-strip";
import { ServicesStrip } from "@/components/sections/services-strip";
import { AboutPreview } from "@/components/sections/about-preview";
import { ServicesDetail } from "@/components/sections/services-detail";
import { AmenitiesGrid } from "@/components/sections/amenities-grid";
import { WhyUs } from "@/components/sections/why-us";
import { LocationPreview } from "@/components/sections/location-preview";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div aria-hidden className="h-1 bg-red-600" />
      <MarqueeStrip />
      <ServicesStrip />
      <AboutPreview />
      <ServicesDetail />
      <AmenitiesGrid />
      <WhyUs />
      <LocationPreview />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
