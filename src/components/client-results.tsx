import { media, type Transformation } from "@/content/media";
import { MediaFrame } from "./media-frame";

const resultImageSizes = "(max-width: 699px) 45vw, (max-width: 84rem) 24vw, 19rem";

function TransformationCard({ entry }: { entry: Transformation }) {
  return (
    <article className="transformation" data-reveal="card">
      {entry.video ? <MediaFrame asset={entry.video} className="result-media result-video" /> : null}
      {!entry.video || entry.before || entry.after ? (
        <div className="result-media result-pair">
          <figure>
            <MediaFrame asset={entry.before} className="result-frame" sizes={resultImageSizes} />
            <figcaption>Before</figcaption>
          </figure>
          <figure>
            <MediaFrame asset={entry.after} className="result-frame after-frame" sizes={resultImageSizes} />
            <figcaption>After</figcaption>
          </figure>
        </div>
      ) : null}
      {entry.name ? <h3>{entry.name}</h3> : null}
      {entry.timeframe ? <p>{entry.timeframe}</p> : null}
      {entry.description ? <p>{entry.description}</p> : null}
      {entry.outcome ? <p><strong>{entry.outcome}</strong></p> : null}
      {entry.quote ? <blockquote>{entry.quote}</blockquote> : null}
    </article>
  );
}

export function ClientResults() {
  return (
    <section className="section results-field" id="results" tabIndex={-1} aria-labelledby="results-title">
      <div className="wrap">
        <div className="section-header" data-reveal="text">
          <h2 id="results-title">Real People. <em>Real Progress.</em></h2>
          <p className="lede">A space for real client journeys, training progress, and transformation stories.</p>
        </div>
        <div className="results-grid">
          {media.clientTransformations.map((entry) => <TransformationCard key={entry.id} entry={entry} />)}
        </div>
      </div>
    </section>
  );
}
