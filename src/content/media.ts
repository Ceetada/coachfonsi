export type ImageAsset = {
  src: `/media/${string}`;
  alt: string;
  position?: string;
};

export type VideoAsset = {
  sources: { src: `/media/${string}`; type: "video/mp4" | "video/webm" }[];
  label: string;
  poster?: ImageAsset;
  captions?: `/media/${string}`;
};

export type MediaAsset = ImageAsset | VideoAsset;

export type HeroVideoAsset = {
  src: `/media/${string}.mp4`;
  poster: `/media/${string}`;
  position?: string;
};

export type Transformation = {
  id: string;
  name?: string;
  before: MediaAsset | null;
  after: MediaAsset | null;
  video: VideoAsset | null;
  description?: string;
  timeframe?: string;
  quote?: string;
  outcome?: string;
};

export const media: {
  heroPortrait: ImageAsset | null;
  heroVideo: HeroVideoAsset | null;
  aboutPortrait: ImageAsset | null;
  beforePortrait: ImageAsset | null;
  afterPortrait: ImageAsset | null;
  finalPortrait: ImageAsset | null;
  clientTransformations: Transformation[];
} = {
  heroPortrait: null,
  heroVideo: {
    src: "/media/coach/fonsi-hero.mp4",
    poster: "/media/coach/fonsi-hero-poster.webp",
    position: "50% 68%",
  },
  aboutPortrait: null,
  beforePortrait: null,
  afterPortrait: null,
  finalPortrait: null,
  clientTransformations: [
    {
      id: "client-01",
      before: {
        src: "/media/transformations/client-01-before.webp",
        alt: "Client posing in glasses and a patterned outfit",
        position: "50% 60%",
      },
      after: {
        src: "/media/transformations/client-01-after.webp",
        alt: "Client in blue workout clothes reaching overhead while balancing on one leg",
        position: "50% 12%",
      },
      video: null,
    },
    { id: "client-02", before: null, after: null, video: null },
    { id: "client-03", before: null, after: null, video: null },
    { id: "client-04", before: null, after: null, video: null },
    { id: "client-05", before: null, after: null, video: null },
    { id: "client-06", before: null, after: null, video: null },
  ],
};
