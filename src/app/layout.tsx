import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site } from "@/content/site";
import { canIndex, metadataBase } from "@/lib/seo";
import "./globals.css";

const sans = localFont({
  src: "../../node_modules/@fontsource-variable/dm-sans/files/dm-sans-latin-wght-normal.woff2",
  weight: "100 1000", display: "swap", variable: "--font-sans",
});

const display = localFont({
  src: [
    { path: "../../node_modules/@fontsource-variable/playfair-display/files/playfair-display-latin-wght-normal.woff2", weight: "400 900", style: "normal" },
    { path: "../../node_modules/@fontsource-variable/playfair-display/files/playfair-display-latin-wght-italic.woff2", weight: "400 900", style: "italic" },
  ],
  display: "swap", variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase,
  title: { default: site.seo.title, template: "%s | Coach Fonsi" },
  description: site.seo.description,
  applicationName: site.name,
  robots: { index: canIndex, follow: canIndex },
  icons: {
    icon: [
      { url: "/brand/favicon.ico?v=fonsi-avatar", sizes: "any" },
      { url: "/brand/icon-16.png?v=fonsi-avatar", sizes: "16x16", type: "image/png" },
      { url: "/brand/icon-32.png?v=fonsi-avatar", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/brand/apple-touch-icon.png?v=fonsi-avatar", sizes: "180x180" }],
  },
};

export const viewport: Viewport = { themeColor: "#000000", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${sans.variable} ${display.variable}`}><body>{children}</body></html>;
}
