import { ArrowUpRight } from "lucide-react";
import { products } from "@/content/products";
import { httpsUrl } from "@/lib/links";
import { formatNaira, isPrice, promotionalPrice } from "@/lib/pricing";
import { MediaFrame } from "./media-frame";

export function DigitalGuides() {
  return (
    <section id="guides" className="section guides-field" tabIndex={-1} aria-labelledby="guides-title">
      <div className="wrap">
        <div className="section-header" data-reveal="text">
          <h2 id="guides-title">Start With a Guide</h2>
          <p className="lede">Practical fitness resources to support your journey.</p>
        </div>
        <div className="guides-grid">
          {products.map((guide) => {
            const href = guide.title ? httpsUrl(guide.purchaseUrl) : null;
            const promotion = promotionalPrice(guide.price, guide.promotionalPrice);
            return (
              <article className="guide" key={guide.id} data-reveal="card">
                <MediaFrame asset={guide.cover} className="guide-frame" sizes="(max-width: 699px) 90vw, 28vw" contain />
                <div className="guide-content">
                  {guide.title ? <p className="guide-category">{guide.badge ?? guide.category}</p> : null}
                  <h3>{guide.title ?? guide.category}</h3>
                  {guide.description ? <p>{guide.description}</p> : null}
                  {promotion && isPrice(guide.price) ? <p><strong>{formatNaira(promotion)}</strong> <s>{formatNaira(guide.price)}</s></p> : isPrice(guide.price) ? <p><strong>{formatNaira(guide.price)}</strong></p> : null}
                  {href ? <a className="text-link" href={href} target="_blank" rel="noopener noreferrer" aria-label={`Buy ${guide.title}`}>View guide <ArrowUpRight size={16} aria-hidden="true" /></a> : <p className="guide-status">Coming soon</p>}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
