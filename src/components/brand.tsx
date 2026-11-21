import { site } from "@/content/site";

export function Brand({ href = "#top", onClick }: { href?: string; onClick?: () => void }) {
  return (
    <a className="brand" href={href} onClick={onClick} aria-label={`${site.name} home`} translate="no">
      <svg viewBox="0 0 64 64" aria-hidden="true" className="brand-mark">
        <rect width="64" height="64" rx="13" fill="currentColor" />
        <path d="M29 19a14 14 0 1 0 0 26M35 46V18h15M35 31h12" fill="none" stroke="var(--mark-ink, #080808)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>{site.name}</span>
    </a>
  );
}
