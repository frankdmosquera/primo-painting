import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";

/**
 * Generates the website sitemap.
 *
 * Next.js automatically creates the `/sitemap.xml` file from this function.
 * Simply add or remove pages from the array below, and the sitemap will stay
 * up to date. The `lastModified` date is refreshed on each build, while
 * `changeFrequency` and `priority` help search engines understand the
 * relative importance of each page.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.business.website;

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/booking`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
