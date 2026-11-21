import { site } from "@/content/site";
import { httpsUrl } from "./links";

const domain = httpsUrl(site.seo.productionDomain);
export const metadataBase = domain ? new URL(new URL(domain).origin) : undefined;
export const canIndex = Boolean(
  metadataBase && site.seo.allowIndexing &&
  process.env.NODE_ENV === "production" &&
  process.env.VERCEL_ENV !== "preview" &&
  process.env.COACH_FONSI_PREVIEW !== "1",
);

export function homepageStructuredData(origin: URL) {
  const url = origin.href;
  const websiteId = new URL("#website", origin).href;
  const providerId = new URL("#coach-fonsi", origin).href;
  const serviceId = new URL("#coaching-service", origin).href;

  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", "@id": websiteId, url, name: site.name, inLanguage: "en" },
      { "@type": "Person", "@id": providerId, url, name: site.name },
      {
        "@type": "Service", "@id": serviceId, url,
        name: "Personal weight-loss and strength coaching",
        serviceType: "Weight-loss and strength coaching",
        description: site.seo.description,
        provider: { "@id": providerId },
      },
      {
        "@type": "WebPage", "@id": new URL("#webpage", origin).href, url,
        name: site.seo.title, description: site.seo.description, inLanguage: "en",
        isPartOf: { "@id": websiteId }, mainEntity: { "@id": serviceId },
      },
    ],
  };
}
