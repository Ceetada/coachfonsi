import type { MetadataRoute } from "next";
import { canIndex, metadataBase } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return canIndex && metadataBase ? [{ url: metadataBase.href }] : [];
}
