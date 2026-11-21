import { Check, ChevronRight } from "lucide-react";
import { durations, type CoachingPlan } from "@/content/plans";
import { durationLabel, planMessage, whatsappLink } from "@/lib/links";
import { formatNaira, isPrice, savings } from "@/lib/pricing";
import { ContactLink } from "./contact-link";

function PlanRates({ plan, prices, phone }: {
  plan: CoachingPlan;
  prices: NonNullable<CoachingPlan["prices"]>;
  phone: string | null;
}) {
  const longestRate = prices[6];
  const bestValue = plan.showSavings && isPrice(longestRate) && ([1, 3] as const).every((term) => {
    const price = prices[term];
    return isPrice(price) && longestRate / 6 < price / term;
  });

  return (
    <ul className="plan-terms" aria-label={`${plan.title} rates`}>
      {durations.map((duration) => {
        const price = prices[duration];
        const discount = plan.showSavings ? savings(prices[1], price, duration) : null;
        const href = whatsappLink(phone, planMessage(plan.title, duration));
        return (
          <li key={duration}>
            <a className="plan-term" href={href ?? "#contact"} target={href ? "_blank" : undefined} rel={href ? "noopener noreferrer" : undefined}>
              <span className="plan-term-details">
                <span className="sr-only">{plan.title}: </span>
                <strong>{durationLabel(duration)}</strong>
                {discount ? <span className="plan-savings">Save {formatNaira(discount)}</span> : null}
                {duration === 6 && bestValue ? <span className="plan-value">Best value</span> : null}
              </span>
              <span className="plan-term-total">
                <span className={isPrice(price) ? "plan-price" : "plan-savings"}>{isPrice(price) ? formatNaira(price) : "Enquire for pricing"}</span>
                <ChevronRight size={16} aria-hidden="true" />
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

function PricingCard({ plan, phone }: { plan: CoachingPlan; phone: string | null }) {
  const quoteLink = plan.prices === null
    ? whatsappLink(phone, `Hello Coach Fonsi, I’m interested in ${plan.title} coaching. Could we discuss a custom quote?`)
    : null;

  return (
    <article className={`plan-card${plan.featured ? " plan-featured" : ""}`} data-plan={plan.id} data-reveal="card">
      {plan.featured || plan.availability ? (
        <div className="plan-badges">
          {plan.featured ? <span className="plan-badge plan-badge-featured">Most popular</span> : null}
          {plan.availability ? <span className="plan-badge">{plan.availability}</span> : null}
        </div>
      ) : null}
      <div className="plan-summary">
        <h3>{plan.title}</h3>
        <p className="plan-description">{plan.description}</p>
      </div>
      {plan.prices ? <PlanRates plan={plan} prices={plan.prices} phone={phone} /> : (
        <div className="plan-custom">
          <p className="plan-custom-title">Custom pricing</p>
          <p className="plan-description">Reach out on WhatsApp for a quote based on your goals and the support you want.</p>
          <ContactLink href={quoteLink} className="button-outline">{quoteLink ? "Get a quote on WhatsApp" : "Enquire about VIP"}</ContactLink>
        </div>
      )}
      {plan.features.length ? (
        <ul className="plan-features">{plan.features.map((feature) => <li key={feature}><Check size={16} aria-hidden="true" />{feature}</li>)}</ul>
      ) : null}
    </article>
  );
}

export function CoachingPlans({ plans, phone }: { plans: CoachingPlan[]; phone: string | null }) {
  const hasWhatsApp = Boolean(whatsappLink(phone));

  return (
    <section id="plans" className="section plans-field" tabIndex={-1} aria-labelledby="plans-title">
      <div className="wrap">
        <div className="plans-heading" data-reveal="text">
          <p className="lede">{hasWhatsApp
            ? "Choose a plan and enquire on WhatsApp, or ask about a custom VIP quote."
            : "Choose a plan and tap a price to enquire, or ask about a custom VIP quote."}</p>
        </div>
        <h2 id="plans-title" className="plans-title">Pricing</h2>
        <div className="plan-grid">
          {plans.map((plan) => <PricingCard key={plan.id} plan={plan} phone={phone} />)}
        </div>
      </div>
    </section>
  );
}
