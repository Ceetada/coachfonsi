import type { Duration } from "../content/plans";

export const generalMessage = "Hello Coach Fonsi, I’d like to know more about your coaching.";
export const consultationMessage = "Hello Coach Fonsi, I’d like to ask about a fitness consultation.";

export function durationLabel(months: Duration) {
  return months === 1 ? "1 month" : `${months} months`;
}

export function planMessage(plan: string, months: Duration, displayedPrice: string | null) {
  const selection = `the ${plan} coaching plan for ${durationLabel(months)}`;
  const offer = displayedPrice ? `${selection} at ${displayedPrice}` : selection;
  return `Hello Coach Fonsi, I’m interested in ${offer}. How do I get started?`;
}

export function whatsappLink(phone: string | null, message = generalMessage) {
  const digits = phone?.trim().replace(/^[+]/, "").replace(/[ ()-]/g, "");
  return digits && /^[1-9][0-9]{7,14}$/.test(digits)
    ? `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
    : null;
}

export function httpsUrl(value: string | null) {
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" && !url.username && !url.password ? url.href : null;
  } catch {
    return null;
  }
}
