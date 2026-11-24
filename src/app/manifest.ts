import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name, short_name: site.name, description: site.tagline,
    start_url: "/", display: "standalone", background_color: "#000000", theme_color: "#000000",
    icons: [
      { src: "/brand/icon-192.png?v=fonsi-avatar", sizes: "192x192", type: "image/png" },
      { src: "/brand/icon-512.png?v=fonsi-avatar", sizes: "512x512", type: "image/png" },
    ],
  };
}
