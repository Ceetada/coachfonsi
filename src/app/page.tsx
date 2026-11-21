import type { Metadata } from "next";
import { ClientResults } from "@/components/client-results";
import { CoachingFaq } from "@/components/coaching-faq";
import { CoachingPlans } from "@/components/coaching-plans";
import { CoachIntroduction, FinalContact, Hero, PersonalTransformation } from "@/components/coach-sections";
import { DigitalGuides } from "@/components/digital-guides";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ScrollEntrances } from "@/components/scroll-entrances";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { plans } from "@/content/plans";
import { site } from "@/content/site";
import { testimonials } from "@/content/testimonials";
import { consultationMessage, whatsappLink } from "@/lib/links";
import { canIndex, homepageStructuredData, metadataBase } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: metadataBase ? { canonical: "/" } : undefined,
  openGraph: {
    type: "website", title: site.seo.title, description: site.seo.description, siteName: site.name,
    url: metadataBase?.href,
    images: metadataBase ? [{ url: "/brand/social.png", width: 1200, height: 630, alt: site.name }] : undefined,
  },
  twitter: {
    card: "summary_large_image", title: site.seo.title, description: site.seo.description,
    images: metadataBase ? ["/brand/social.png"] : undefined,
  },
};

export default function Home() {
  const chat = whatsappLink(site.whatsappNumber);
  const consultation = whatsappLink(site.whatsappNumber, consultationMessage);
  const email = site.email ? `mailto:${site.email}` : null;
  const structuredData = canIndex && metadataBase ? homepageStructuredData(metadataBase) : null;
  return (
    <div id="top">
      {structuredData ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} /> : null}
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header chat={chat} />
      <main id="main-content" tabIndex={-1}>
        <ScrollEntrances />
        <Hero chat={chat} />
        <CoachIntroduction />
        <PersonalTransformation />
        <ClientResults />
        <section className="section testimonial-field" aria-labelledby="testimonials-title">
          <div className="wrap">
            <div className="section-header" data-reveal="text">
              <h2 id="testimonials-title">Words From My Clients</h2>
              <p className="lede">Real experiences. Shared with permission.</p>
            </div>
            <TestimonialCarousel items={testimonials} />
          </div>
        </section>
        <CoachingPlans plans={plans} phone={site.whatsappNumber} />
        <DigitalGuides />
        <CoachingFaq />
        <FinalContact chat={consultation} email={email} />
      </main>
      <Footer chat={chat} email={email} />
    </div>
  );
}
