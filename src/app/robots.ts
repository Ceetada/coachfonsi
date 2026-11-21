import type { MetadataRoute } from "next";
import { canIndex, metadataBase } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  const liveRules = { allow: "/", disallow: ["/privacy", "/terms"] };
  return {
    rules: canIndex
      ? [{ userAgent: "*", ...liveRules }, { userAgent: "OAI-SearchBot", ...liveRules }]
      : { userAgent: "*", disallow: "/" },
    sitemap: metadataBase && canIndex ? new URL("/sitemap.xml", metadataBase).href : undefined,
  };
}
