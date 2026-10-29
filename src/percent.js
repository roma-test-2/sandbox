/**
 * Returns `numerator` as a percentage of `denominator`, rounded to one decimal place.
 *
 * @param {number} numerator
 * @param {number} denominator
 * @returns {number}
 */
export function percent(numerator, denominator) {
  return Math.round((numerator / denominator) * 1000) / 10;
}
