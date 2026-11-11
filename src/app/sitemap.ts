import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

const PATHS = ["/", "/destinations", "/homestays", "/workations", "/plan", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((path) => ({ url: new URL(path, siteUrl).toString() }));
}
