import type { Duration } from "../content/plans";

const naira = new Intl.NumberFormat("en-NG", {
  style: "currency", currency: "NGN", maximumFractionDigits: 2, minimumFractionDigits: 0,
});

export function isPrice(price: number | null): price is number {
  return typeof price === "number" && Number.isFinite(price) && price > 0;
}

export function formatNaira(price: number) {
  return naira.format(price);
}

export function savings(monthly: number | null, total: number | null, duration: Duration) {
  if (duration === 1 || !isPrice(monthly) || !isPrice(total)) return null;
  const difference = Math.round((monthly * duration - total) * 100) / 100;
  return difference > 0 ? difference : null;
}

export function promotionalPrice(price: number | null, promotion: number | null) {
  return isPrice(price) && isPrice(promotion) && promotion < price ? promotion : null;
}
