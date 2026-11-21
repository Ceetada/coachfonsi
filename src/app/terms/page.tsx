import type { Metadata } from "next";
import { LegalDraft } from "@/components/legal-draft";

export const metadata: Metadata = { title: "Terms", robots: { index: false, follow: false } };

export default function TermsPage() {
  return (
    <LegalDraft title="Terms">
      <p>This preview describes potential coaching options and guide categories. It does not accept payments or enroll visitors in coaching.</p>
      <p>Before launch, this page needs the approved coaching and guide terms, including service scope, scheduling, payment, cancellations, refunds, and how clients can contact Coach Fonsi.</p>
    </LegalDraft>
  );
}
