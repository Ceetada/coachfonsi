import type { HeroVideoAsset } from "@/content/media";

export function HeroVideo({ asset }: { asset: HeroVideoAsset }) {
  return (
    <div className="media-frame hero-frame hero-video">
      <video
        src={asset.src}
        poster={asset.poster}
        style={{ objectPosition: asset.position }}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
    </div>
  );
}
