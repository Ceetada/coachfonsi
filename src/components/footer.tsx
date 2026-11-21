import { ArrowUpRight, MessageCircle } from "lucide-react";
import { site } from "@/content/site";
import { httpsUrl } from "@/lib/links";
import { Brand } from "./brand";

export function Footer({ chat, email }: { chat: string | null; email: string | null }) {
  const socials = site.social.flatMap(({ label, url }) => {
    const href = httpsUrl(url);
    return href ? [{ label, href }] : [];
  });
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-main">
          <div><Brand /><p>{site.tagline}</p></div>
          {socials.length || chat || email ? (
            <div className="footer-socials" aria-label="Contact and social links">
              {socials.map(({ label, href }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer">{label}<ArrowUpRight size={14} aria-hidden="true" /></a>)}
              {chat ? <a href={chat} target="_blank" rel="noopener noreferrer">WhatsApp<ArrowUpRight size={14} aria-hidden="true" /></a> : null}
              {email ? <a href={email}>Email</a> : null}
            </div>
          ) : null}
          <a className="text-link back-top" href="#top">Back to top <ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>
        <div className="footer-bottom">
          <small>© {new Date().getFullYear()} {site.name}</small>
          <nav aria-label="Legal">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms</a>
          </nav>
        </div>
      </div>
      {chat ? <a className="floating-contact icon-button" href={chat} target="_blank" rel="noopener noreferrer" aria-label="Chat with Coach Fonsi on WhatsApp"><MessageCircle aria-hidden="true" /></a> : null}
    </footer>
  );
}
