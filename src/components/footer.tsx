import { ArrowUp, ArrowUpRight } from "lucide-react";
import { navigation, site } from "@/content/site";
import { httpsUrl } from "@/lib/links";
import { ContactLink, WhatsAppMark } from "./contact-link";

export function Footer({ chat, email }: { chat: string | null; email: string | null }) {
  const socials = site.social.flatMap(({ label, url }) => {
    const href = httpsUrl(url);
    return href ? [{ label, href }] : [];
  });
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-panel">
          <div className="footer-main">
            <div className="footer-identity">
              <a href="#top">{site.name}</a>
              <p>{site.tagline}</p>
            </div>
            <nav className="footer-links" aria-label="Explore Coach Fonsi">
              {navigation.map(({ label, href }) => <a key={href} href={href}>{label}</a>)}
            </nav>
            <div className="footer-contact">
              <ContactLink href={chat} className="footer-cta">
                {chat ? "Chat on WhatsApp" : "Get in touch"}
              </ContactLink>
              {socials.length > 0 ? (
                <nav className="footer-links" aria-label="Social media">
                  {socials.map(({ label, href }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer">{label}<ArrowUpRight size={14} aria-hidden="true" /></a>)}
                </nav>
              ) : null}
              {email ? <a href={email}>Email</a> : null}
            </div>
          </div>
          <div className="footer-wordmark" aria-hidden="true">FONSI</div>
        </div>
        <div className="footer-bottom">
          <small>© {new Date().getFullYear()} {site.name}</small>
          <nav aria-label="Legal">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms</a>
          </nav>
          <a href="#top">Back to top <ArrowUp size={14} aria-hidden="true" /></a>
        </div>
      </div>
      <div className="mobile-contact-bar">
        <p><strong>Questions?</strong><span>I reply personally</span></p>
        <ContactLink href={chat ?? email} className="button-primary">Chat with me</ContactLink>
      </div>
      {chat ? <a className="floating-contact icon-button" href={chat} target="_blank" rel="noopener noreferrer" aria-label="Chat with Coach Fonsi on WhatsApp"><WhatsAppMark size={22} /></a> : null}
    </footer>
  );
}
