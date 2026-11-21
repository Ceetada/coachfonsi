import { ArrowUpRight, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";

export function ContactLink({
  href, children, className = "", fallback = "#contact", icon = "chat", onClick,
}: {
  href: string | null;
  children: ReactNode;
  className?: string;
  fallback?: string | null;
  icon?: "chat" | "arrow" | "whatsapp";
  onClick?: () => void;
}) {
  const classes = `button ${className}`;
  const Icon = href && icon === "chat" ? MessageCircle : ArrowUpRight;

  const destination = href || fallback;
  if (destination) {
    const external = href?.startsWith("https://");
    return (
      <a className={classes} href={destination} onClick={onClick} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
        {icon === "whatsapp" ? (
          <svg className="whatsapp-mark" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20.8 11.7a8.7 8.7 0 0 1-12.9 7.7L3.2 21l1.5-4.6a8.7 8.7 0 1 1 16.1-4.7Z" />
            <path d="m9.4 7.8 1.1 2-1 1.2a7.3 7.3 0 0 0 3.4 3.4l1.2-1 2 1.1c.4.2.5.7.3 1-.4.9-.9 1.2-1.7 1.2-2.9-.2-7-4-7.3-7.1-.1-.8.4-1.5 1-1.9.4-.2.8-.2 1 .1Z" />
          </svg>
        ) : null}
        {children}
        {icon === "whatsapp" ? null : <Icon size={17} aria-hidden="true" />}
      </a>
    );
  }

  return <span className={`${classes} button-unavailable`}>Contact coming soon</span>;
}
