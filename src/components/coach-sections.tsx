import { ArrowDown, ArrowRight } from "lucide-react";
import { media } from "@/content/media";
import { site } from "@/content/site";
import { ContactLink } from "./contact-link";
import { HeroVideo } from "./hero-video";
import { MediaFrame } from "./media-frame";

export function Hero({ chat }: { chat: string | null }) {
  const [first, second] = site.hero.headline;
  return (
    <section className="hero wrap" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">{site.tagline}</p>
        <h1 id="hero-title"><span className="hero-line">{first}</span><br /><em className="hero-line">{second}</em></h1>
        <p className="hero-intro">{site.hero.introduction}</p>
        <p className="lede">{site.hero.description}</p>
        <div className="hero-actions">
          <a href="#plans" className="button button-primary">Explore Coaching Plans <ArrowRight size={17} aria-hidden="true" /></a>
          <ContactLink href={chat} className="button-outline button-whatsapp">Chat on WhatsApp</ContactLink>
        </div>
        <a className="text-link" href="#results">See Client Results <ArrowDown size={15} aria-hidden="true" /></a>
      </div>
      {media.heroVideo ? <HeroVideo asset={media.heroVideo} /> : (
        <MediaFrame className="hero-frame" asset={media.heroPortrait} sizes="(max-width: 799px) 92vw, 44vw" priority />
      )}
    </section>
  );
}

export function CoachIntroduction() {
  return (
    <section id="about" className="about-field section" tabIndex={-1} aria-labelledby="about-title">
      <div className="wrap about-grid">
        <MediaFrame asset={media.aboutPortrait} className="about-frame" sizes="(max-width: 699px) 84vw, 34vw" />
        <div className="about-copy" data-reveal="text">
          <h2 id="about-title">{site.about.heading}</h2>
          <p className="section-lead">{site.about.lead}</p>
          {site.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {site.about.biography ? <p>{site.about.biography}</p> : null}
        </div>
      </div>
    </section>
  );
}

export function PersonalTransformation() {
  return (
    <section className="section journey-field" aria-labelledby="journey-title">
      <div className="wrap journey-grid">
        <div>
          <h2 id="journey-title">My Fitness Journey</h2>
          <p className="lede">Progress is a process.</p>
        </div>
        <div className="image-pair" data-reveal="frame">
          <figure>
            <MediaFrame asset={media.beforePortrait} className="journey-frame" sizes="(max-width: 699px) 44vw, 28vw" />
            <figcaption>Before</figcaption>
          </figure>
          <figure>
            <MediaFrame asset={media.afterPortrait} className="journey-frame after-frame" sizes="(max-width: 699px) 44vw, 28vw" />
            <figcaption>After</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export function FinalContact({ chat, email }: { chat: string | null; email: string | null }) {
  return (
    <section id="contact" className="contact-field" tabIndex={-1} aria-labelledby="contact-title">
      <div className="wrap contact-grid" data-reveal="text">
        <div>
          <h2 id="contact-title">{site.closing.headline}</h2>
          <p className="lede">{site.closing.description}</p>
          <ContactLink href={chat ?? email} fallback={null} className="button-primary">{chat || !email ? "Chat With Coach Fonsi" : "Email Coach Fonsi"}</ContactLink>
        </div>
        <MediaFrame className="contact-frame" asset={media.finalPortrait} sizes="(max-width: 699px) 82vw, 34vw" />
      </div>
    </section>
  );
}
