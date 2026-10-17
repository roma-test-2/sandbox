import { applyDiscount, kmToMiles, VAT_RATE } from "./gen/pricing.js";

/** Keeps a quantity within the stock limits. */
export function clampQuantity(qty, min, max) {
  return Math.min(max, Math.max(min, qty));
}

/** The order total in cents: discounted, plus VAT. */
export function orderTotal(priceCents, discountPct) {
  const net = applyDiscount(priceCents, discountPct);
  return Math.round(net * (1 + VAT_RATE));
}

/** The shipping line shown at checkout. */
export function shippingLabel(km) {
  return `Ships ${kmToMiles(km).toFixed(0)} miles`;
}
