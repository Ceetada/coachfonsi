import Image from "next/image";
import type { MediaAsset } from "@/content/media";

export function MediaFrame({
  asset, className = "", sizes = "(max-width: 700px) 90vw, 38vw", priority = false, contain = false, autoplayLoop = false,
}: {
  asset: MediaAsset | null;
  className?: string;
  sizes?: string;
  priority?: boolean;
  contain?: boolean;
  autoplayLoop?: boolean;
}) {
  const frameClass = `media-frame ${className}${contain ? " media-contain" : ""}`;

  if (!asset) return <div className={`${frameClass} media-empty`} aria-hidden="true" />;

  if ("sources" in asset) {
    return (
      <div className={frameClass}>
        <video
          aria-label={asset.label}
          controls={!autoplayLoop}
          autoPlay={autoplayLoop}
          muted={autoplayLoop}
          loop={autoplayLoop}
          playsInline
          preload={autoplayLoop ? "metadata" : "none"}
          poster={asset.poster?.src}
        >
          {asset.sources.map((source) => <source key={source.src} {...source} />)}
          {asset.captions ? <track kind="captions" label="English" srcLang="en" src={asset.captions} /> : null}
          Your browser cannot play this video.
        </video>
      </div>
    );
  }

  return (
    <div className={frameClass}>
      <Image src={asset.src} alt={asset.alt} fill sizes={sizes} preload={priority} style={{ objectPosition: asset.position }} />
    </div>
  );
}
