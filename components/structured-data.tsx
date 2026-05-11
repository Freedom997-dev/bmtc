import { siteConfig } from "@/lib/site-config";

export function StructuredData() {
  const a = siteConfig.address;

  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "GasStation", "TruckStop"],
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.url}/images/hero.jpg`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: a.street,
      addressLocality: a.city,
      addressRegion: a.state,
      postalCode: a.zip,
      addressCountry: a.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.lat,
      longitude: siteConfig.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Diesel", value: true },
      { "@type": "LocationFeatureSpecification", name: "Gasoline", value: true },
      { "@type": "LocationFeatureSpecification", name: "Showers", value: true },
      { "@type": "LocationFeatureSpecification", name: "Restaurant", value: true },
      { "@type": "LocationFeatureSpecification", name: "Truck Parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "ATM", value: true },
      { "@type": "LocationFeatureSpecification", name: "Laundry", value: true },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
