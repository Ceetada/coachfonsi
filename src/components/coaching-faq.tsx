import { site } from "@/content/site";

export function CoachingFaq() {
  return (
    <section id="coaching-faq" className="section faq-field" aria-labelledby="faq-title">
      <div className="wrap faq-grid">
        <h2 id="faq-title" data-reveal="text">Weight-loss coaching FAQs</h2>
        <div className="faq-answers">
          <div id="weight-loss-pace" className="faq-answer">
            <h3>How many kilograms can I lose in a month?</h3>
            <p>
              For adults who need to lose weight, <strong>2–4 kg over four weeks</strong> is a starting goal.
              We’ll set your first-month target based on your starting weight and health, then build your training and nutrition plan around it.
            </p>
          </div>
          <div className="faq-answer">
            <h3>Can I start if I’m new to strength training?</h3>
            <p>Yes. We’ll build your workouts around your experience, the equipment you have, and the days you can train. You’ll know what to do at each session.</p>
          </div>
          <div className="faq-answer">
            <h3>Do I have to give up the foods I like?</h3>
            <p>Keep the foods you enjoy. We’ll work with the meals you already eat and choose habits you can keep at home, at work, and on busy weeks.</p>
          </div>
          <div className="faq-answer">
            <h3>How do I start coaching with {site.name}?</h3>
            <p><a href="#plans">Compare the coaching plans</a>, then choose a duration to enquire about. Share your goals, training experience, and what you’ve already tried.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
