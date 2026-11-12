import type { MetadataRoute } from "next";
import { listPublishedDestinations } from "@/lib/catalog";
import { siteUrl } from "@/lib/site";

const STATIC_PATHS = ["/", "/destinations", "/homestays", "/workations", "/plan", "/contact"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const destinations = await listPublishedDestinations();
  const paths = [...STATIC_PATHS, ...destinations.map((item) => `/destinations/${item.slug}`)];
  return paths.map((path) => ({ url: new URL(path, siteUrl).toString() }));
}
