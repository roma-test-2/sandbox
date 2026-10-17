/**
 * The price with VAT added.
 * @param {number} cents the net price
 * @param {number} rate the VAT rate as a fraction, e.g. 0.2
 */
export function addVat(cents, rate) {
  return Math.round(cents * (1 + rate));
}
