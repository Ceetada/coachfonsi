# Coach Fonsi content guide

The page preserves the size of each media slot while its value is `null`. Upload the file to the matching directory under `public/media`, then enter its public path starting with `/media/`. Filenames should be lowercase with hyphens. Keep the subject near the center so that tighter mobile crops work.

## Photos and video

| Content | Folder under `public/media` | Configuration | Recommended format and crop |
| --- | --- | --- | --- |
| Hero photo | `coach/` | `src/content/media.ts` → `heroPortrait` | WebP, AVIF, or JPEG, 4:5, around 1200 × 1500 |
| Hero video | `coach/` | `src/content/media.ts` → `heroVideo` | Silent H.264 MP4 with a WebP or JPEG poster. Use `position` to keep the action in the responsive crop. |
| About photo | `coach/` | `aboutPortrait` | WebP or JPEG, 4:5, around 1000 × 1250 |
| Personal before and after | `coach/` | `beforePortrait`, `afterPortrait` | WebP or JPEG, paired 3:4 images, around 900 × 1200 each |
| Client before and after | `transformations/` | `clientTransformations[].before` and `.after` | WebP or JPEG, paired 4:5 crops, around 800 × 1000 each |
| Client transformation video | `videos/` | `clientTransformations[].video`, or a video in `.before` or `.after` | MP4 with H.264/AAC for broad support, optional WebM, portrait 9:16 around 720 × 1280 |
| Video poster and captions | `videos/` | Same video object → `poster` and `captions` | Poster in WebP or JPEG, matching the video crop. Use WebVTT captions for meaningful speech and sound. |
| Testimonial screenshot | `testimonials/` | `src/content/testimonials.ts` → `screenshot` | PNG or WebP, portrait crop. Keep text legible at full size. |
| Ebook cover | `ebooks/` | `src/content/products.ts` → `cover` | WebP or JPEG, 3:4 cover, around 900 × 1200. The full cover fits inside a wider frame. |
| Closing portrait | `coach/` | `src/content/media.ts` → `finalPortrait` | WebP or JPEG, 4:5 source. Keep the central area clear for the wider display crop. |

An image entry looks like `{ src: "/media/coach/hero.webp", alt: "Coach Fonsi standing in a training studio", position: "50% 35%" }`. The description should match the supplied photo. `position` adjusts the crop when needed.

A video entry looks like this. Put the broadest-compatible source last when including multiple encodings.

```ts
video: {
  label: "Training progress video for an approved client",
  sources: [
    { src: "/media/videos/client-01.webm", type: "video/webm" },
    { src: "/media/videos/client-01.mp4", type: "video/mp4" },
  ],
  poster: { src: "/media/videos/client-01-poster.webp", alt: "Frame from the training video" },
  captions: "/media/videos/client-01-en.vtt",
},
```

Client entries can be added, removed, or reordered. Use unique IDs and supply names, dates, quotes, and outcomes only with permission and verification. Remove private details from testimonial screenshots before upload. Set an accessible `description` or include the relevant message in the caption when text inside the image carries the testimonial.

## Coaching plans and digital products

- In `src/content/plans.ts`, give each plan approved `features` and set `prices` for 1, 3, and 6 months in whole naira or with up to two decimal places. A `null` duration means its price is unavailable. Set the entire `prices` field to `null` for a custom-quote plan such as VIP. Enable `showSavings` to compare a valid longer plan to its equivalent at the monthly rate.
- Replace the current example rates with approved totals before launch. The page asks visitors to confirm their rate when they enquire.
- Set `featured: true` only for an approved Most Popular badge. Set `availability` only when you have confirmed wording.
- In `src/content/products.ts`, fill in each approved guide's `title`, `description`, `cover`, `price`, `promotionalPrice`, and HTTPS `purchaseUrl` from Selar or your chosen platform. A purchase action appears when both the title and valid URL are present.

## Search and AI search

- Edit the page title, search description, and public HTTPS address in `site.seo` under `src/content/site.ts`. The preview stays out of search. When the production address is set and indexing is enabled, the site generates its canonical link, sitemap, coaching-service structured data, and crawl rules for Google and ChatGPT Search.
- Keep the first-month figure framed as a goal. Publish client outcomes only when verified and approved for use.

## Brand and contact

- In `src/content/site.ts`, replace the draft introduction and philosophy as needed and add the approved coach biography to `about.biography`.
- Set `whatsappNumber` to the full international number with country code and without a local leading zero. The header, hero, closing, plan, footer, and floating actions share it.
- Set `email` to your contact email and fill in full HTTPS profile URLs for Instagram, TikTok, and YouTube under `social`.
- Replace the draft Privacy Policy and Terms in `src/app/privacy/page.tsx` and `src/app/terms/page.tsx` with approved text. Update their metadata and the robots rules if the final legal pages should be indexed.
- The source mark and sharing graphics are in `public/brand`. The editable header and footer wordmark is in `src/components/brand.tsx`.

## Launch

Enter the production HTTPS origin in `site.seo.productionDomain`, then switch `allowIndexing` on after the content, legal pages, and real contact destinations have been reviewed. Leave it off for previews. For non-Vercel staging builds that share the production configuration, set `COACH_FONSI_PREVIEW=1` at build time. Rebuild after changes and verify the canonical URL, social preview, sitemap, and contact links.
