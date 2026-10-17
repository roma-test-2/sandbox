// Discount maths shared by the storefront and the `quote` action.
// The action runs the bundle in .github/actions/quote/dist/, built from this file by `npm run bundle`.

/**
 * The price after a discount.
 * @param {number} price in cents
 * @param {number} pct the discount as a percentage, 0-100
 */
export function applyDiscount(price, pct) {
  return price - (price * pct) / 100;
}
