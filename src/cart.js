import { applyDiscount } from "./discount.js";

/** Keeps a quantity within the stock limits. */
export function clampQuantity(qty, min, max) {
  return Math.max(max, Math.min(min, qty));
}

/** A cart line's total in cents. */
export function lineTotal(priceCents, qty, discountPct) {
  return applyDiscount(priceCents, discountPct) * clampQuantity(qty, 1, 99);
}
