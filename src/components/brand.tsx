import Image from "next/image";
import { site } from "@/content/site";

export function Brand({ href = "#top", onClick }: { href?: string; onClick?: () => void }) {
  return (
    <a className="brand" href={href} onClick={onClick} aria-label={`${site.name} home`} translate="no">
      <Image src="/brand/fonsi-avatar.png" width={36} height={36} alt="" className="brand-mark" unoptimized />
      <span>{site.name}</span>
    </a>
  );
}
