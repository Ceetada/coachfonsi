import type { ImageAsset } from "./media";

export type Testimonial = {
  id: string;
  screenshot: ImageAsset | null;
  caption?: string;
  clientLabel?: string;
  date?: string;
  description?: string;
};

export const testimonials: Testimonial[] = [
  { id: "testimonial-01", screenshot: null },
  { id: "testimonial-02", screenshot: null },
  { id: "testimonial-03", screenshot: null },
  { id: "testimonial-04", screenshot: null },
  { id: "testimonial-05", screenshot: null },
];
