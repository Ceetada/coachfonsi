import type { Metadata } from "next";
import { LegalDraft } from "@/components/legal-draft";

export const metadata: Metadata = { title: "Privacy Policy", robots: { index: false, follow: false } };

export default function PrivacyPage() {
  return (
    <LegalDraft title="Privacy Policy">
      <p>The preview has no account registration or on-site inquiry form. When contact and purchase links become available, they may take visitors to external services that handle enquiries and purchases under their own privacy policies.</p>
      <p>Before launch, this page needs the business identity and contact details, the data used for enquiries and coaching, the purposes for using that data, service providers, retention, and how visitors can exercise their privacy rights.</p>
    </LegalDraft>
  );
}
