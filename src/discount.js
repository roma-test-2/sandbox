// Discount maths for the storefront.
//
// Compatibility: the mobile app (v3 and older) still sends discounts as fractions
// (0.15 for 15% off), and test/discount.test.js pins that. Those clients must keep
// working until they are retired, so any discount of 1 or less must still be read
// as a fraction.

/**
 * The price after a discount.
 * @param {number} price in cents
 * @param {number} pct the discount as a percentage, 0-100
 */
export function applyDiscount(price, pct) {
  return price - price * pct;
}
