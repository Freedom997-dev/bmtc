import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const lastModified = new Date();

  return [
    { url: `${base}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/about`, lastModified, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/services`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/amenities`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified, changeFrequency: "yearly", priority: 0.6 },
  ];
}
